const STORE_URL =
  process.env.ORDER_STORE_URL ||
  'https://order.online/store/36737771?pickup=true&redirected=true'

const DEFAULT_VIEWPORT = { width: 1280, height: 800 }
const MAX_FRAME_WIDTH = 1280
const MAX_FRAME_HEIGHT = 800
const JPEG_QUALITY = 55
const MIN_FRAME_INTERVAL_MS = 32
const MAX_SESSIONS = Math.max(1, Number(process.env.ORDER_EMBED_MAX_SESSIONS) || 2)
const IDLE_MS = Math.max(15_000, Number(process.env.ORDER_EMBED_IDLE_MS) || 10 * 60 * 1000)
const STATE_KEY = '__happyFamilyOrderEmbedV4'
const PREV_STATE_KEYS = [
  '__happyFamilyOrderEmbed',
  '__happyFamilyOrderEmbedV2',
  '__happyFamilyOrderEmbedV3',
]

for (const key of PREV_STATE_KEYS) {
  const previous = globalThis[key]
  if (previous?.browser) {
    previous.browser.close().catch(() => {})
  }
  globalThis[key] = null
}

function getState() {
  if (!globalThis[STATE_KEY]) {
    globalThis[STATE_KEY] = {
      browser: null,
      startingBrowser: null,
      sessions: new Map(),
      peers: new Map(),
      lastError: null,
    }
  }
  return globalThis[STATE_KEY]
}

function sessionFor(peer) {
  return getState().peers.get(peer) || null
}

function sessionIsLive(session) {
  return Boolean(session && getState().sessions.get(session.id) === session)
}

function normalizeSessionId(raw) {
  const id = String(raw || '').trim()
  if (/^[A-Za-z0-9_-]{8,80}$/.test(id)) return id
  return crypto.randomUUID()
}

export function sessionIdFromRequestUrl(rawUrl) {
  if (!rawUrl) return null
  try {
    return new URL(rawUrl, 'http://localhost').searchParams.get('session')
  } catch {
    return null
  }
}

function framePixelSize(session) {
  const width = Math.round(session.viewport.width * session.scaleFactor)
  const height = Math.round(session.viewport.height * session.scaleFactor)
  const scale = Math.min(1, MAX_FRAME_WIDTH / width, MAX_FRAME_HEIGHT / height)
  return {
    maxWidth: Math.max(1, Math.round(width * scale)),
    maxHeight: Math.max(1, Math.round(height * scale)),
  }
}

export function isOrderEmbedAvailable() {
  if (process.env.ORDER_EMBED_FORCE === '1' || process.env.ORDER_EMBED_FORCE === 'true') {
    return true
  }
  if (process.env.ORDER_EMBED_ENABLED === '0' || process.env.ORDER_EMBED_ENABLED === 'false') {
    return false
  }
  if (process.env.NETLIFY || process.env.NETLIFY_LOCAL) return false
  if (process.env.AWS_LAMBDA_FUNCTION_NAME) return false
  if (process.env.VERCEL) return false
  const preset = String(process.env.NITRO_PRESET || '')
  if (/netlify|cloudflare|vercel|lambda/i.test(preset)) return false
  return true
}

export function getOrderEmbedAllowedOrigins() {
  const raw = process.env.ORDER_EMBED_ALLOWED_ORIGINS || '*'
  return raw.split(',').map((origin) => origin.trim()).filter(Boolean)
}

export function isOrderEmbedOriginAllowed(origin) {
  const allowed = getOrderEmbedAllowedOrigins()
  if (allowed.includes('*')) return true
  if (!origin) return true
  return allowed.includes(origin)
}

export function orderEmbedCorsHeaders(requestOrigin) {
  if (requestOrigin && isOrderEmbedOriginAllowed(requestOrigin)) {
    return {
      'Access-Control-Allow-Origin': requestOrigin,
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      Vary: 'Origin',
    }
  }
  if (getOrderEmbedAllowedOrigins().includes('*')) {
    return { 'Access-Control-Allow-Origin': '*' }
  }
  return {}
}

export function getOrderEmbedHealth() {
  const supported = isOrderEmbedAvailable()
  const state = getState()
  return {
    ready: supported,
    supported,
    url: STORE_URL,
    clients: state.sessions.size,
    starting: Boolean(state.startingBrowser),
    error: supported ? state.lastError : 'Live ordering needs a Node server with Chrome. Netlify cannot run it.',
  }
}

function sendJson(peer, payload) {
  try {
    peer.send(JSON.stringify(payload))
  } catch {
    /* peer may already be closed */
  }
}

function emitScreencast(session, frame) {
  if (!sessionIsLive(session)) return
  const bytes = Buffer.from(frame.data, 'base64')
  session.latestFrame = bytes
  session.lastFrameAt = Date.now()
  if (!session.peer) return
  try {
    session.peer.send(bytes)
  } catch {
    /* peer may already be closed */
  }
}

function queueScreencastFrame(session, frame) {
  session.pendingScreencast = frame
  const wait = MIN_FRAME_INTERVAL_MS - (Date.now() - session.lastFrameAt)
  if (wait <= 0) {
    if (session.frameTimer) {
      clearTimeout(session.frameTimer)
      session.frameTimer = null
    }
    const next = session.pendingScreencast
    session.pendingScreencast = null
    if (next) emitScreencast(session, next)
    return
  }
  if (session.frameTimer) return
  session.frameTimer = setTimeout(() => {
    session.frameTimer = null
    const next = session.pendingScreencast
    session.pendingScreencast = null
    if (next) emitScreencast(session, next)
  }, wait)
}

async function launchBrowser() {
  const { chromium } = await import('playwright')
  const args = [
    '--disable-blink-features=AutomationControlled',
    '--disable-dev-shm-usage',
  ]
  if (process.env.PLAYWRIGHT_NO_SANDBOX === '1' || process.getuid?.() === 0) {
    args.push('--no-sandbox', '--disable-setuid-sandbox')
  }
  const executablePath = process.env.PLAYWRIGHT_CHROME_PATH || process.env.CHROMIUM_PATH
  if (executablePath) {
    return await chromium.launch({ executablePath, headless: true, args })
  }
  try {
    return await chromium.launch({ channel: 'chrome', headless: true, args })
  } catch {
    return await chromium.launch({ headless: true, args })
  }
}

async function waitForStore(target) {
  await target.goto(STORE_URL, {
    waitUntil: 'domcontentloaded',
    timeout: 90_000,
  })
  await target.waitForFunction(
    () => {
      const title = document.title || ''
      return title.length > 0 && !/just a moment|attention required|cloudflare/i.test(title)
    },
    { timeout: 90_000 }
  )
  await target.waitForSelector('text=Featured Items', { timeout: 60_000 })
}

async function startScreencast(session) {
  if (!session.cdp || session.screencastOn) return
  const { maxWidth, maxHeight } = framePixelSize(session)
  await session.cdp.send('Page.startScreencast', {
    format: 'jpeg',
    quality: JPEG_QUALITY,
    maxWidth,
    maxHeight,
    everyNthFrame: 1,
  })
  session.screencastOn = true
}

async function stopScreencast(session) {
  if (!session.cdp || !session.screencastOn) return
  try {
    await session.cdp.send('Page.stopScreencast')
  } catch {
    /* page may already be closed */
  }
  session.screencastOn = false
}

async function dispatchWheel(session, x, y, deltaX, deltaY) {
  if (session.cdp) {
    await session.cdp.send('Input.dispatchMouseEvent', {
      type: 'mouseWheel',
      x: Math.round(x),
      y: Math.round(y),
      deltaX,
      deltaY,
    })
    return
  }
  await session.page.mouse.move(x, y)
  await session.page.mouse.wheel(deltaX, deltaY)
}

async function handleDiscrete(session, msg) {
  if (!session.page) return
  const x = Number(msg.x) || 0
  const y = Number(msg.y) || 0

  switch (msg.type) {
    case 'down':
      await session.page.mouse.move(x, y)
      await session.page.mouse.down({ button: msg.button || 'left' })
      break
    case 'up':
      await session.page.mouse.move(x, y)
      await session.page.mouse.up({ button: msg.button || 'left' })
      break
    case 'click':
      await session.page.mouse.click(x, y, {
        button: msg.button || 'left',
        clickCount: msg.clickCount || 1,
      })
      break
    case 'key':
      if (msg.text) {
        await session.page.keyboard.insertText(msg.text)
      } else if (msg.key) {
        await session.page.keyboard.press(msg.key)
      }
      break
    case 'resize': {
      const width = Math.max(1, Math.round(Number(msg.width) || session.viewport.width))
      const height = Math.max(1, Math.round(Number(msg.height) || session.viewport.height))
      const changed = width !== session.viewport.width || height !== session.viewport.height
      if (!changed) break
      session.viewport.width = width
      session.viewport.height = height
      session.scaleFactor = 1
      await session.page.setViewportSize({ width, height })
      if (session.cdp) {
        await session.cdp.send('Emulation.setDeviceMetricsOverride', {
          width,
          height,
          deviceScaleFactor: 1,
          mobile: false,
        })
      }
      await stopScreencast(session)
      await startScreencast(session)
      break
    }
    default:
      break
  }
}

async function pumpInput(session) {
  if (session.inputBusy) return
  session.inputBusy = true
  try {
    while (session.page && sessionIsLive(session)) {
      const move = session.pendingMove
      session.pendingMove = null
      const wheel = session.pendingWheel
      session.pendingWheel = null
      const next = session.pendingDiscrete.shift()
      if (!move && !wheel && !next) break

      if (move) {
        await session.page.mouse.move(Number(move.x) || 0, Number(move.y) || 0)
      }
      if (wheel) {
        await dispatchWheel(
          session,
          Number(wheel.x) || 0,
          Number(wheel.y) || 0,
          Number(wheel.deltaX) || 0,
          Number(wheel.deltaY) || 0
        )
      }
      if (next) await handleDiscrete(session, next)
    }
  } finally {
    session.inputBusy = false
    const more = session.pendingMove || session.pendingWheel || session.pendingDiscrete.length
    if (more) pumpInput(session).catch(() => {})
  }
}

export function handleOrderEmbedInput(peer, msg) {
  if (msg?.type === 'session') {
    addOrderEmbedPeer(peer, msg.id)
    return
  }
  const session = sessionFor(peer)
  if (!session || !session.page) return
  if (msg.type === 'move') {
    session.pendingMove = msg
  } else if (msg.type === 'wheel') {
    if (session.pendingWheel) {
      session.pendingWheel.deltaX =
        (Number(session.pendingWheel.deltaX) || 0) + (Number(msg.deltaX) || 0)
      session.pendingWheel.deltaY =
        (Number(session.pendingWheel.deltaY) || 0) + (Number(msg.deltaY) || 0)
      session.pendingWheel.x = msg.x
      session.pendingWheel.y = msg.y
    } else {
      session.pendingWheel = { ...msg }
    }
  } else {
    session.pendingDiscrete.push(msg)
  }
  pumpInput(session).catch(() => {})
}

async function ensureBrowser() {
  const state = getState()
  if (state.browser) return state.browser
  if (state.startingBrowser) return state.startingBrowser
  state.startingBrowser = launchBrowser()
    .then((browser) => {
      state.browser = browser
      state.lastError = null
      browser.on('disconnected', () => {
        const current = getState()
        if (current.browser === browser) current.browser = null
      })
      return browser
    })
    .catch((err) => {
      state.lastError = String(err?.message || err)
      throw err
    })
    .finally(() => {
      state.startingBrowser = null
    })
  return state.startingBrowser
}

function createSession(peer, id) {
  return {
    id,
    peer,
    context: null,
    page: null,
    cdp: null,
    screencastOn: false,
    viewport: { ...DEFAULT_VIEWPORT },
    scaleFactor: 1,
    pendingMove: null,
    pendingWheel: null,
    pendingDiscrete: [],
    inputBusy: false,
    frameTimer: null,
    pendingScreencast: null,
    latestFrame: null,
    lastFrameAt: 0,
    starting: null,
    idleTimer: null,
    lastActiveAt: Date.now(),
  }
}

async function startSession(session) {
  const browser = await ensureBrowser()
  if (!sessionIsLive(session)) return

  const context = await browser.newContext({
    viewport: session.viewport,
    deviceScaleFactor: 1,
    userAgent:
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
    locale: 'en-US',
  })
  if (!sessionIsLive(session)) {
    await context.close().catch(() => {})
    return
  }

  session.context = context
  session.page = await context.newPage()
  await waitForStore(session.page)
  if (!sessionIsLive(session)) return

  session.cdp = await context.newCDPSession(session.page)
  session.cdp.on('Page.screencastFrame', (frame) => {
    if (!sessionIsLive(session) || session.cdp == null) return
    session.cdp
      .send('Page.screencastFrameAck', { sessionId: frame.sessionId })
      .catch(() => {})
    queueScreencastFrame(session, frame)
  })

  sendHello(session, true)
  if (session.peer) await startScreencast(session)
}

function clearIdleTimer(session) {
  if (session.idleTimer) {
    clearTimeout(session.idleTimer)
    session.idleTimer = null
  }
}

function attachPeer(session, peer) {
  const state = getState()
  if (session.peer && session.peer !== peer) {
    state.peers.delete(session.peer)
    try {
      session.peer.close?.()
    } catch {
      /* ignore */
    }
  }
  session.peer = peer
  session.lastActiveAt = Date.now()
  clearIdleTimer(session)
  state.peers.set(peer, session)
}

function sendHello(session, ready) {
  if (!session.peer) return
  sendJson(session.peer, {
    type: 'hello',
    viewport: session.viewport,
    ready,
    url: STORE_URL,
  })
  if (ready && session.latestFrame) {
    try {
      session.peer.send(session.latestFrame)
    } catch {
      /* ignore */
    }
  }
}

function oldestIdleSession() {
  let oldest = null
  for (const session of getState().sessions.values()) {
    if (session.peer) continue
    if (!oldest || session.lastActiveAt < oldest.lastActiveAt) oldest = session
  }
  return oldest
}

async function destroySession(session) {
  const state = getState()
  if (!session || state.sessions.get(session.id) !== session) return
  state.sessions.delete(session.id)
  if (session.peer) state.peers.delete(session.peer)
  clearIdleTimer(session)
  if (session.frameTimer) {
    clearTimeout(session.frameTimer)
    session.frameTimer = null
  }
  session.pendingMove = null
  session.pendingWheel = null
  session.pendingDiscrete = []
  session.pendingScreencast = null
  session.latestFrame = null
  await stopScreencast(session).catch(() => {})
  session.cdp = null
  session.page = null
  if (session.context) {
    await session.context.close().catch(() => {})
    session.context = null
  }
  if (state.sessions.size === 0 && state.browser) {
    const browser = state.browser
    state.browser = null
    await browser.close().catch(() => {})
  }
}

function parkSession(session) {
  if (!sessionIsLive(session)) return
  session.peer = null
  session.lastActiveAt = Date.now()
  stopScreencast(session).catch(() => {})
  clearIdleTimer(session)
  session.idleTimer = setTimeout(() => {
    destroySession(session).catch(() => {})
  }, IDLE_MS)
}

export async function ensureOrderEmbed() {
  if (!isOrderEmbedAvailable()) return getState()
  await ensureBrowser()
  return getState()
}

export function addOrderEmbedPeer(peer, sessionId) {
  if (!isOrderEmbedAvailable()) {
    sendJson(peer, {
      type: 'error',
      message: 'Live ordering is not available on this host.',
    })
    return
  }

  const state = getState()
  const id = normalizeSessionId(
    sessionId || sessionIdFromRequestUrl(peer.url || peer.request?.url)
  )
  const previous = sessionFor(peer)
  if (previous && previous.id !== id) {
    state.peers.delete(peer)
    previous.peer = null
    destroySession(previous).catch(() => {})
  }
  const existing = state.sessions.get(id)
  if (existing) {
    attachPeer(existing, peer)
    sendHello(existing, Boolean(existing.page))
    if (existing.page) startScreencast(existing).catch(() => {})
    return
  }

  if (state.sessions.size >= MAX_SESSIONS) {
    const idle = oldestIdleSession()
    if (idle) {
      destroySession(idle).catch(() => {})
    } else {
      sendJson(peer, {
        type: 'error',
        message: 'Online ordering is busy. Please try again in a moment.',
      })
      try {
        peer.close?.()
      } catch {
        /* ignore */
      }
      return
    }
  }

  const session = createSession(peer, id)
  state.sessions.set(id, session)
  attachPeer(session, peer)
  sendHello(session, false)
  session.starting = startSession(session)
    .catch((err) => {
      state.lastError = String(err?.message || err)
      console.error('Failed to start private order session:', err)
      sendJson(peer, { type: 'error', message: state.lastError })
      destroySession(session).catch(() => {})
    })
    .finally(() => {
      session.starting = null
    })
}

export function removeOrderEmbedPeer(peer) {
  const session = sessionFor(peer)
  if (!session) return
  getState().peers.delete(peer)
  if (session.peer !== peer) return
  parkSession(session)
}

export async function shutdownOrderEmbed() {
  const state = getState()
  const sessions = [...state.sessions.values()]
  await Promise.all(sessions.map((session) => destroySession(session)))
  if (state.browser) {
    await state.browser.close().catch(() => {})
    state.browser = null
  }
}

export { STORE_URL }
