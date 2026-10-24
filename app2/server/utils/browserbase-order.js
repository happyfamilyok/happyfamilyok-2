const BB_API = 'https://api.browserbase.com/v1'

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

async function navigateWithCdp(connectUrl, url) {
  const { default: WebSocket } = await import('ws')
  const ws = new WebSocket(connectUrl)
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
    if (!msg.id || !pending.has(msg.id)) return
    const waiter = pending.get(msg.id)
    pending.delete(msg.id)
    if (msg.error) waiter.reject(new Error(msg.error.message || JSON.stringify(msg.error)))
    else waiter.resolve(msg.result)
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
    await sendCdp(ws, pending, nextId, 'Page.navigate', { url }, sessionId)
  } finally {
    ws.close()
  }
}

export async function createOrderLiveView() {
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
      viewport: { width: 1280, height: 800 },
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

  if (!session.connectUrl) {
    throw new Error('Browserbase session did not return a connect URL')
  }

  await navigateWithCdp(session.connectUrl, ORDER_ONLINE_URL)

  const debug = await bbFetch(`/sessions/${encodeURIComponent(session.id)}/debug`)
  const baseLiveUrl = debug.debuggerFullscreenUrl
  if (!baseLiveUrl) {
    throw new Error('Browserbase session did not return a live view URL')
  }
  const liveViewUrl = `${baseLiveUrl}${baseLiveUrl.includes('?') ? '&' : '?'}navbar=false`

  return {
    sessionId: session.id,
    liveViewUrl,
    storeUrl: ORDER_ONLINE_URL,
    expiresAt: session.expiresAt,
  }
}
