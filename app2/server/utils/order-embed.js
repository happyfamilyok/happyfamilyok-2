const STORE_URL =
  process.env.ORDER_STORE_URL ||
  'https://order.online/store/36737771?pickup=true&redirected=true'

const DEFAULT_VIEWPORT = { width: 1280, height: 800 }
const MAX_FRAME_WIDTH = 1280
const MAX_FRAME_HEIGHT = 800
const JPEG_QUALITY = 55
const MIN_FRAME_INTERVAL_MS = 32
const STATE_KEY = '__happyFamilyOrderEmbedV2'
const PREV_STATE_KEY = '__happyFamilyOrderEmbed'

if (globalThis[PREV_STATE_KEY]?.browser) {
  globalThis[PREV_STATE_KEY].browser.close().catch(() => {})
  globalThis[PREV_STATE_KEY] = null
}

function getState() {
  if (!globalThis[STATE_KEY]) {
    globalThis[STATE_KEY] = {
      browser: null,
      page: null,
      cdp: null,
      screencastOn: false,
      latestFrame: null,
      viewport: { ...DEFAULT_VIEWPORT },
      scaleFactor: 1,
      peers: new Set(),
      starting: null,
      lastError: null,
      inputBusy: false,
      pendingMove: null,
      pendingWheel: null,
      pendingDiscrete: [],
      frameTimer: null,
      pendingScreencast: null,
      lastFrameAt: 0,
    }
  }
  return globalThis[STATE_KEY]
}

function framePixelSize() {
  const state = getState()
  const width = Math.round(state.viewport.width * state.scaleFactor)
  const height = Math.round(state.viewport.height * state.scaleFactor)
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
    ready: Boolean(supported && state.page),
    supported,
    url: state.page ? state.page.url() : STORE_URL,
    clients: state.peers.size,
    starting: Boolean(state.starting),
    error: supported
      ? state.lastError
      : 'Live ordering needs a Node server with Chrome. Netlify cannot run it.',
  }
}

function sendToPeers(data) {
  for (const peer of getState().peers) {
    try {
      peer.send(data)
    } catch {
      /* peer may already be closed */
    }
  }
}

export function broadcastOrderEmbed(payload) {
  sendToPeers(JSON.stringify(payload))
}

function emitScreencast(frame) {
  const state = getState()
  const bytes = Buffer.from(frame.data, 'base64')
  state.latestFrame = bytes
  state.lastFrameAt = Date.now()
  sendToPeers(bytes)
}

function queueScreencastFrame(frame) {
  const state = getState()
  state.pendingScreencast = frame
  const wait = MIN_FRAME_INTERVAL_MS - (Date.now() - state.lastFrameAt)
  if (wait <= 0) {
    if (state.frameTimer) {
      clearTimeout(state.frameTimer)
      state.frameTimer = null
    }
    const next = state.pendingScreencast
    state.pendingScreencast = null
    if (next) emitScreencast(next)
    return
  }
  if (state.frameTimer) return
  state.frameTimer = setTimeout(() => {
    state.frameTimer = null
    const next = state.pendingScreencast
    state.pendingScreencast = null
    if (next) emitScreencast(next)
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

async function startScreencast() {
  const state = getState()
  if (!state.cdp || state.screencastOn) return
  const { maxWidth, maxHeight } = framePixelSize()
  await state.cdp.send('Page.startScreencast', {
    format: 'jpeg',
    quality: JPEG_QUALITY,
    maxWidth,
    maxHeight,
    everyNthFrame: 1,
  })
  state.screencastOn = true
}

async function stopScreencast() {
  const state = getState()
  if (!state.cdp || !state.screencastOn) return
  try {
    await state.cdp.send('Page.stopScreencast')
  } catch {
    /* page may already be closed */
  }
  state.screencastOn = false
}

export async function ensureOrderEmbedScreencast() {
  if (getState().peers.size === 0) {
    await stopScreencast()
    return
  }
  await startScreencast()
}

async function dispatchWheel(x, y, deltaX, deltaY) {
  const state = getState()
  if (state.cdp) {
    await state.cdp.send('Input.dispatchMouseEvent', {
      type: 'mouseWheel',
      x: Math.round(x),
      y: Math.round(y),
      deltaX,
      deltaY,
    })
    return
  }
  await state.page.mouse.move(x, y)
  await state.page.mouse.wheel(deltaX, deltaY)
}

async function handleDiscrete(msg) {
  const state = getState()
  if (!state.page) return
  const x = Number(msg.x) || 0
  const y = Number(msg.y) || 0

  switch (msg.type) {
    case 'down':
      await state.page.mouse.move(x, y)
      await state.page.mouse.down({ button: msg.button || 'left' })
      break
    case 'up':
      await state.page.mouse.move(x, y)
      await state.page.mouse.up({ button: msg.button || 'left' })
      break
    case 'click':
      await state.page.mouse.click(x, y, {
        button: msg.button || 'left',
        clickCount: msg.clickCount || 1,
      })
      break
    case 'key':
      if (msg.text) {
        await state.page.keyboard.insertText(msg.text)
      } else if (msg.key) {
        await state.page.keyboard.press(msg.key)
      }
      break
    case 'resize': {
      const width = Math.max(1, Math.round(Number(msg.width) || state.viewport.width))
      const height = Math.max(1, Math.round(Number(msg.height) || state.viewport.height))
      const changed = width !== state.viewport.width || height !== state.viewport.height
      if (!changed) break
      state.viewport.width = width
      state.viewport.height = height
      state.scaleFactor = 1
      await state.page.setViewportSize({ width, height })
      if (state.cdp) {
        await state.cdp.send('Emulation.setDeviceMetricsOverride', {
          width,
          height,
          deviceScaleFactor: 1,
          mobile: false,
        })
      }
      await stopScreencast()
      await ensureOrderEmbedScreencast()
      break
    }
    default:
      break
  }
}

async function pumpInput() {
  const state = getState()
  if (state.inputBusy) return
  state.inputBusy = true
  try {
    while (state.page) {
      const move = state.pendingMove
      state.pendingMove = null
      const wheel = state.pendingWheel
      state.pendingWheel = null
      const next = state.pendingDiscrete.shift()
      if (!move && !wheel && !next) break

      if (move) {
        await state.page.mouse.move(Number(move.x) || 0, Number(move.y) || 0)
      }
      if (wheel) {
        await dispatchWheel(
          Number(wheel.x) || 0,
          Number(wheel.y) || 0,
          Number(wheel.deltaX) || 0,
          Number(wheel.deltaY) || 0
        )
      }
      if (next) await handleDiscrete(next)
    }
  } finally {
    state.inputBusy = false
    const more =
      state.pendingMove || state.pendingWheel || state.pendingDiscrete.length
    if (more) pumpInput().catch(() => {})
  }
}

export function handleOrderEmbedInput(msg) {
  const state = getState()
  if (msg.type === 'move') {
    state.pendingMove = msg
  } else if (msg.type === 'wheel') {
    if (state.pendingWheel) {
      state.pendingWheel.deltaX = (Number(state.pendingWheel.deltaX) || 0) + (Number(msg.deltaX) || 0)
      state.pendingWheel.deltaY = (Number(state.pendingWheel.deltaY) || 0) + (Number(msg.deltaY) || 0)
      state.pendingWheel.x = msg.x
      state.pendingWheel.y = msg.y
    } else {
      state.pendingWheel = { ...msg }
    }
  } else {
    state.pendingDiscrete.push(msg)
  }
  pumpInput().catch(() => {})
}

async function startStore() {
  const state = getState()
  state.lastError = null
  try {
    state.browser = await launchBrowser()
    const context = await state.browser.newContext({
      viewport: state.viewport,
      deviceScaleFactor: 1,
      userAgent:
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
      locale: 'en-US',
    })
    state.page = await context.newPage()
    await waitForStore(state.page)
    state.cdp = await context.newCDPSession(state.page)
    state.cdp.on('Page.screencastFrame', (frame) => {
      const current = getState()
      current.cdp
        ?.send('Page.screencastFrameAck', { sessionId: frame.sessionId })
        .catch(() => {})
      queueScreencastFrame(frame)
    })
    console.log(`Order embed ready: ${state.page.url()}`)
    broadcastOrderEmbed({
      type: 'hello',
      viewport: state.viewport,
      ready: true,
      url: STORE_URL,
    })
    await ensureOrderEmbedScreencast()
    return state
  } catch (err) {
    await state.browser?.close().catch(() => {})
    state.browser = null
    state.page = null
    state.cdp = null
    throw err
  }
}

export async function ensureOrderEmbed() {
  if (!isOrderEmbedAvailable()) return getState()
  const state = getState()
  if (state.page) return state
  if (state.starting) return state.starting
  state.starting = startStore()
    .catch((err) => {
      state.lastError = String(err?.message || err)
      console.error('Failed to load order embed store:', err)
      broadcastOrderEmbed({ type: 'error', message: state.lastError })
      throw err
    })
    .finally(() => {
      state.starting = null
    })
  return state.starting
}

export function addOrderEmbedPeer(peer) {
  if (!isOrderEmbedAvailable()) {
    peer.send(
      JSON.stringify({
        type: 'error',
        message: 'Live ordering is not available on this host.',
      })
    )
    return
  }
  const state = getState()
  state.peers.add(peer)
  peer.send(
    JSON.stringify({
      type: 'hello',
      viewport: state.viewport,
      ready: Boolean(state.page),
      url: STORE_URL,
    })
  )
  if (state.latestFrame) {
    peer.send(state.latestFrame)
  }
  if (state.lastError && !state.page) {
    peer.send(JSON.stringify({ type: 'error', message: state.lastError }))
  }
  ensureOrderEmbed().catch(() => {})
  ensureOrderEmbedScreencast().catch(() => {})
}

export function removeOrderEmbedPeer(peer) {
  getState().peers.delete(peer)
  setTimeout(() => {
    ensureOrderEmbedScreencast().catch(() => {})
  }, 250)
}

export async function shutdownOrderEmbed() {
  await stopScreencast()
  const state = getState()
  if (state.frameTimer) {
    clearTimeout(state.frameTimer)
    state.frameTimer = null
  }
  if (state.browser) {
    await state.browser.close().catch(() => {})
  }
  state.browser = null
  state.page = null
  state.cdp = null
  state.screencastOn = false
  state.latestFrame = null
  state.starting = null
  state.pendingMove = null
  state.pendingWheel = null
  state.pendingDiscrete = []
  state.pendingScreencast = null
  state.peers.clear()
}

export { STORE_URL }
