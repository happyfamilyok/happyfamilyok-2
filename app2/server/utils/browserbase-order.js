import { createIdleWatch } from './order-idle.js'
import { dispatchOrderInput } from './order-input.js'
import { normalizeOrderViewport } from './order-viewport.js'

const BB_API = 'https://api.browserbase.com/v1'
const sessions = globalThis.__happyFamilyBrowserbaseSessions ||= new Map()

export function isOrderSessionActive(id) {
  return sessions.has(id)
}

export const ORDER_ONLINE_URL =
  process.env.ORDER_STORE_URL ||
  'https://order.online/business/happy-family-chinese-restaurant-15185683'

function browserbaseApiKey() {
  return String(process.env.BROWSERBASE_API_KEY || '').trim()
}

export function isBrowserbaseConfigured() {
  return Boolean(browserbaseApiKey())
}

async function bbFetch(path, options = {}) {
  const res = await fetch(`${BB_API}${path}`, {
    ...options,
    headers: {
      'X-BB-API-Key': browserbaseApiKey(),
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) {
    const message = data?.message || data?.error || `Browserbase request failed (${res.status})`
    const error = new Error(typeof message === 'string' ? message : JSON.stringify(message))
    error.statusCode = res.status
    throw error
  }
  return data
}

function sendCdp(ws, pending, nextId, method, params, sessionId) {
  const id = nextId()
  const payload = { id, method, params }
  if (sessionId) payload.sessionId = sessionId
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      pending.delete(id)
      reject(new Error(`CDP timeout: ${method}`))
    }, 60_000)
    pending.set(id, {
      resolve: (value) => {
        clearTimeout(timer)
        resolve(value)
      },
      reject: (err) => {
        clearTimeout(timer)
        reject(err)
      },
    })
    ws.send(JSON.stringify(payload))
  })
}

async function navigateWithCdp(connectUrl, url, onIdle, viewport) {
  const { default: WebSocket } = await import('ws')
  const ws = new WebSocket(connectUrl, { handshakeTimeout: 15_000 })
  let idleWatch
  const stop = () => {
    idleWatch?.stop()
    ws.close()
  }
  const pending = new Map()
  let idSeq = 0
  const nextId = () => ++idSeq

  await new Promise((resolve, reject) => {
    ws.once('open', resolve)
    ws.once('error', reject)
  })

  ws.on('message', (raw) => {
    let msg
    try {
      msg = JSON.parse(String(raw))
    } catch {
      return
    }
    if (msg.method === 'Runtime.bindingCalled' && msg.params?.name === '__happyFamilyOrderActivity') {
      idleWatch?.touch()
    }
    if (!msg.id || !pending.has(msg.id)) return
    const waiter = pending.get(msg.id)
    pending.delete(msg.id)
    if (msg.error) waiter.reject(new Error(msg.error.message || JSON.stringify(msg.error)))
    else waiter.resolve(msg.result)
  })

  ws.on('error', () => {})
  ws.on('close', () => {
    for (const waiter of pending.values()) waiter.reject(new Error('Ordering browser disconnected'))
    pending.clear()
    // Keep the idle deadline running even if monitoring disconnects.
  })

  try {
    const { targetInfos } = await sendCdp(ws, pending, nextId, 'Target.getTargets')
    let page = (targetInfos || []).find((target) => target.type === 'page')
    if (!page) {
      const created = await sendCdp(ws, pending, nextId, 'Target.createTarget', { url: 'about:blank' })
      page = { targetId: created.targetId }
    }
    const attached = await sendCdp(ws, pending, nextId, 'Target.attachToTarget', {
      targetId: page.targetId,
      flatten: true,
    })
    const sessionId = attached.sessionId
    await sendCdp(ws, pending, nextId, 'Page.enable', {}, sessionId)
    await sendCdp(ws, pending, nextId, 'Runtime.enable', {}, sessionId)
    await sendCdp(ws, pending, nextId, 'Runtime.addBinding', {
      name: '__happyFamilyOrderActivity',
    }, sessionId)
    await sendCdp(ws, pending, nextId, 'Page.addScriptToEvaluateOnNewDocument', {
      source: `(() => {
        let lastSent = 0;
        for (const type of ['pointerdown', 'pointermove', 'keydown', 'wheel', 'touchstart', 'touchmove', 'input']) {
          window.addEventListener(type, (event) => {
            if (!event.isTrusted) return;
            const now = Date.now();
            if (now - lastSent < 250) return;
            lastSent = now;
            window.__happyFamilyOrderActivity('activity');
          }, { capture: true, passive: true });
        }
      })();`,
    }, sessionId)
    let currentViewport = normalizeOrderViewport(viewport)
    const resize = async (size) => {
      const { width, height, mobile } = normalizeOrderViewport(size)
      await sendCdp(ws, pending, nextId, 'Emulation.setDeviceMetricsOverride', {
        width, height, screenWidth: width, screenHeight: height,
        deviceScaleFactor: 1, mobile,
      }, sessionId)
      await sendCdp(ws, pending, nextId, 'Emulation.setTouchEmulationEnabled', {
        enabled: mobile,
      }, sessionId)
      currentViewport = { width, height, mobile }
    }
    await resize(viewport)
    await sendCdp(ws, pending, nextId, 'Page.navigate', { url }, sessionId)
    idleWatch = createIdleWatch(onIdle)
    const input = (event) => dispatchOrderInput(
      (method, params) => sendCdp(ws, pending, nextId, method, params, sessionId),
      currentViewport, event, () => idleWatch?.touch()
    )
    return { stop, resize, input }
  } catch (error) {
    stop()
    throw error
  }
}

export async function createOrderLiveView(requestedViewport) {
  const viewport = normalizeOrderViewport(requestedViewport)
  if (!isBrowserbaseConfigured()) {
    const error = new Error('BROWSERBASE_API_KEY is not set')
    error.statusCode = 503
    throw error
  }

  const timeout = Math.min(
    21600,
    Math.max(60, Number(process.env.BROWSERBASE_SESSION_TIMEOUT) || 900)
  )
  const body = {
    keepAlive: true,
    timeout,
    region: process.env.BROWSERBASE_REGION || 'us-east-1',
    browserSettings: {
      viewport: { width: viewport.width, height: viewport.height },
      blockAds: true,
    },
    userMetadata: { purpose: 'happyfamily-order' },
  }
  const projectId = String(process.env.BROWSERBASE_PROJECT_ID || '').trim()
  if (projectId) body.projectId = projectId

  const session = await bbFetch('/sessions', {
    method: 'POST',
    body: JSON.stringify(body),
  })

  let liveViewUrl
  try {
    if (!session.connectUrl) {
      throw new Error('Browserbase session did not return a connect URL')
    }
    const browser = await navigateWithCdp(session.connectUrl, ORDER_ONLINE_URL, () => {
      releaseOrderSession(session.id).catch((error) => {
        console.error('Failed to release idle ordering session:', error.message)
      })
    }, viewport)
    sessions.set(session.id, browser)
    const debug = await bbFetch(`/sessions/${encodeURIComponent(session.id)}/debug`)
    const baseLiveUrl = debug.debuggerFullscreenUrl
    if (!baseLiveUrl) {
      throw new Error('Browserbase session did not return a live view URL')
    }
    liveViewUrl = `${baseLiveUrl}${baseLiveUrl.includes('?') ? '&' : '?'}navbar=false`
  } catch (error) {
    await releaseOrderSession(session.id).catch(() => {})
    throw error
  }

  return {
    sessionId: session.id,
    liveViewUrl,
    storeUrl: ORDER_ONLINE_URL,
    expiresAt: session.expiresAt,
  }
}

export async function releaseOrderSession(sessionId) {
  if (!/^[a-f0-9-]{36}$/i.test(String(sessionId || ''))) return
  const browser = sessions.get(sessionId)
  if (typeof browser === 'function') browser()
  else browser?.stop()
  sessions.delete(sessionId)
  const body = { status: 'REQUEST_RELEASE' }
  const projectId = String(process.env.BROWSERBASE_PROJECT_ID || '').trim()
  if (projectId) body.projectId = projectId
  await bbFetch(`/sessions/${encodeURIComponent(sessionId)}`, {
    method: 'POST',
    body: JSON.stringify(body),
  })
}

export async function shutdownBrowserbaseOrders() {
  await Promise.allSettled([...sessions.keys()].map(releaseOrderSession))
}

export async function resizeOrderSession(sessionId, viewport) {
  const browser = sessions.get(sessionId)
  if (!browser?.resize) {
    const error = new Error('Ordering session is no longer active')
    error.statusCode = 410
    throw error
  }
  await browser.resize(normalizeOrderViewport(viewport))
}

export async function sendOrderSessionInput(sessionId, input) {
  const browser = sessions.get(sessionId)
  if (!browser?.input) {
    throw Object.assign(new Error('Ordering session is no longer active'), { statusCode: 410 })
  }
  await browser.input(input)
}
