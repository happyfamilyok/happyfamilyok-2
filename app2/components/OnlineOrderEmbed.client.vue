<template>
  <div ref="shellRef" class="online-order-embed">
    <div v-show="statusVisible" class="status" role="status">
      <div>
        <div v-if="statusSpinning" class="spinner" />
        <h1>{{ statusTitle }}</h1>
        <p>
          {{ statusDetail }}
          <a
            v-if="showFallback"
            :href="fallbackHref"
            target="_blank"
            rel="nofollow noopener"
            class="fallback-btn"
          >Order on DoorDash</a>
        </p>
      </div>
    </div>
    <img
      ref="viewRef"
      alt="Happy Family Chinese Restaurant online ordering"
      tabindex="0"
      draggable="false"
      @pointermove="onPointerMove"
      @pointerdown="onPointerDown"
      @pointerup="onPointerUp"
      @wheel.prevent="onWheel"
      @keydown="onKeyDown"
      @contextmenu.prevent
    >
  </div>
</template>

<script setup>
const props = defineProps({
  fallbackUrl: {
    type: String,
    default:
      'https://www.doordash.com/store/happy-family-chinese-restaurant-norman-36737771/82709946/',
  },
})

const config = useRuntimeConfig()
const fallbackHref = computed(() => props.fallbackUrl || config.public.orderStoreUrl)

const shellRef = ref(null)
const viewRef = ref(null)
const statusVisible = ref(true)
const statusSpinning = ref(true)
const statusTitle = ref('Loading online ordering')
const statusDetail = ref('Connecting to Happy Family Chinese Restaurant pickup menu…')
const showFallback = ref(false)

const viewport = reactive({ width: 1280, height: 800 })
let ws = null
let moveTimer = 0
let wheelTimer = 0
let retryTimer = 0
let resizeTimer = 0
let connectAttempts = 0
let lastPointerEvent = null
let wheelAcc = { x: 0, y: 0, deltaX: 0, deltaY: 0 }
let alive = true
let resizeObserver = null
let currentBlobUrl = ''

function setStatus(title, detail, spinning = true, fallback = false) {
  statusVisible.value = true
  statusSpinning.value = spinning
  statusTitle.value = title
  statusDetail.value = detail
  showFallback.value = fallback
}

function hideStatus() {
  statusVisible.value = false
  showFallback.value = false
  connectAttempts = 0
}

function embedOrigin() {
  return String(config.public.orderEmbedOrigin || '').replace(/\/$/, '')
}

function healthUrl() {
  const origin = embedOrigin()
  return origin ? `${origin}/api/order-embed/health` : '/api/order-embed/health'
}

function socketUrl() {
  const origin = embedOrigin()
  if (origin) return `${origin.replace(/^http/, 'ws')}/order-embed`
  const protocol = location.protocol === 'https:' ? 'wss' : 'ws'
  return `${protocol}://${location.host}/order-embed`
}

function retryDelay() {
  return Math.min(10_000, 1200 * Math.max(1, connectAttempts))
}

function viewportSize() {
  const el = shellRef.value
  const rect = el?.getBoundingClientRect()
  return {
    width: Math.max(1, Math.round(rect?.width || 1280)),
    height: Math.max(1, Math.round(rect?.height || 800)),
    dpr: 1,
  }
}

function send(payload) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(payload))
  }
}

function sendResize(immediate = false) {
  const size = viewportSize()
  viewport.width = size.width
  viewport.height = size.height
  const payload = { type: 'resize', ...size }
  if (immediate) {
    send(payload)
    return
  }
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(() => send(payload), 150)
}

function applyJpegFrame(data) {
  const view = viewRef.value
  if (!view) return
  const blob = data instanceof Blob ? data : new Blob([data], { type: 'image/jpeg' })
  const url = URL.createObjectURL(blob)
  const previous = currentBlobUrl
  currentBlobUrl = url
  view.onload = () => {
    if (previous) URL.revokeObjectURL(previous)
  }
  view.src = url
  hideStatus()
}

function localPoint(event) {
  const view = viewRef.value
  if (!view) return { x: 0, y: 0 }
  const rect = view.getBoundingClientRect()
  return {
    x: ((event.clientX - rect.left) / (rect.width || 1)) * viewport.width,
    y: ((event.clientY - rect.top) / (rect.height || 1)) * viewport.height,
  }
}

function buttonName(button) {
  if (button === 1) return 'middle'
  if (button === 2) return 'right'
  return 'left'
}

function parseMessage(data) {
  if (typeof data !== 'string') return null
  const raw = data.trim()
  if (!raw || raw === 'connected' || raw === 'reload' || (raw[0] !== '{' && raw[0] !== '[')) {
    return null
  }
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

async function connect() {
  if (!alive) return
  clearTimeout(retryTimer)
  if (!config.public.orderEmbed) {
    setStatus(
      'Online ordering',
      'Live ordering is turned off on this host.',
      false
    )
    return
  }

  try {
    const health = await $fetch(healthUrl(), { cache: 'no-store' })
    if (typeof health?.ready !== 'boolean') throw new Error('wrong server')
    if (!health.ready) {
      setStatus(
        'Loading online ordering',
        'Connecting to Happy Family Chinese Restaurant pickup menu…'
      )
    }
  } catch {
    if (!alive) return
    connectAttempts += 1
    setStatus(
      'Online ordering unavailable',
      'Could not reach the ordering server. Retrying…'
    )
    retryTimer = setTimeout(connect, retryDelay())
    return
  }

  if (!alive) return

  if (ws) {
    ws.onclose = null
    ws.onerror = null
    ws.onmessage = null
    ws.close()
    ws = null
  }

  ws = new WebSocket(socketUrl())
  ws.binaryType = 'arraybuffer'

  ws.onopen = () => sendResize(true)

  ws.onmessage = (event) => {
    if (typeof event.data !== 'string') {
      applyJpegFrame(event.data)
      return
    }
    const msg = parseMessage(event.data)
    if (!msg) return
    if (msg.type === 'hello' && msg.viewport) {
      viewport.width = msg.viewport.width
      viewport.height = msg.viewport.height
    }
    if (msg.type === 'frame') {
      if (msg.viewport) {
        viewport.width = msg.viewport.width
        viewport.height = msg.viewport.height
      }
      applyJpegFrame(Uint8Array.from(atob(msg.data), (c) => c.charCodeAt(0)))
    }
    if (msg.type === 'error') {
      setStatus('Could not load the store', msg.message, false, true)
    }
  }

  ws.onclose = () => {
    if (!alive) return
    connectAttempts += 1
    setStatus('Disconnected', 'Reconnecting to online ordering…')
    retryTimer = setTimeout(connect, retryDelay())
  }

  ws.onerror = () => {
    if (!alive) return
    setStatus('Could not open live view', 'Retrying the ordering connection…')
  }
}

function onPointerMove(event) {
  lastPointerEvent = event
  if (moveTimer) return
  moveTimer = requestAnimationFrame(() => {
    moveTimer = 0
    if (!lastPointerEvent) return
    const { x, y } = localPoint(lastPointerEvent)
    send({ type: 'move', x, y })
  })
}

function onPointerDown(event) {
  event.preventDefault()
  viewRef.value?.focus()
  const { x, y } = localPoint(event)
  send({ type: 'down', x, y, button: buttonName(event.button) })
}

function onPointerUp(event) {
  const { x, y } = localPoint(event)
  send({ type: 'up', x, y, button: buttonName(event.button) })
}

function onWheel(event) {
  const { x, y } = localPoint(event)
  const lineScale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? viewport.height : 1
  wheelAcc.x = x
  wheelAcc.y = y
  wheelAcc.deltaX += event.deltaX * lineScale
  wheelAcc.deltaY += event.deltaY * lineScale
  if (wheelTimer) return
  wheelTimer = requestAnimationFrame(() => {
    wheelTimer = 0
    send({
      type: 'wheel',
      x: wheelAcc.x,
      y: wheelAcc.y,
      deltaX: wheelAcc.deltaX,
      deltaY: wheelAcc.deltaY,
    })
    wheelAcc.deltaX = 0
    wheelAcc.deltaY = 0
  })
}

function onKeyDown(event) {
  if (event.metaKey || event.ctrlKey) return
  event.preventDefault()
  if (event.key.length === 1) send({ type: 'key', text: event.key })
  else send({ type: 'key', key: event.key })
}

onMounted(() => {
  alive = true
  if (shellRef.value) {
    resizeObserver = new ResizeObserver(() => sendResize())
    resizeObserver.observe(shellRef.value)
  }
  connect()
})

onBeforeUnmount(() => {
  alive = false
  clearTimeout(retryTimer)
  clearTimeout(resizeTimer)
  resizeObserver?.disconnect()
  resizeObserver = null
  if (moveTimer) cancelAnimationFrame(moveTimer)
  if (wheelTimer) cancelAnimationFrame(wheelTimer)
  if (currentBlobUrl) URL.revokeObjectURL(currentBlobUrl)
  if (ws) {
    ws.onclose = null
    ws.onerror = null
    ws.close()
    ws = null
  }
})
</script>

<style scoped>
.online-order-embed {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 24rem;
  background: #fff;
  overflow: hidden;
}

img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: fill;
  object-position: center;
  image-rendering: auto;
  background: #fff;
  cursor: auto;
  user-select: none;
  -webkit-user-drag: none;
  touch-action: none;
}

img:focus {
  outline: none;
}

.status {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  background: #fff;
  color: #111;
  text-align: center;
  padding: 24px;
  z-index: 2;
}

.status h1 {
  margin: 0 0 8px;
  font-size: 22px;
}

.status p {
  margin: 0;
  color: #6b7280;
  max-width: 36em;
}

.status a.fallback-btn {
  display: inline-block;
  margin-top: 16px;
  padding: 10px 18px;
  border-radius: 9999px;
  background: #d92128;
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}

.spinner {
  width: 36px;
  height: 36px;
  border: 3px solid #eee;
  border-top-color: #d92128;
  border-radius: 50%;
  margin: 0 auto 16px;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
