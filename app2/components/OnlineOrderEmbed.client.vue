<template>
  <div :ref="observeContainer" class="online-order-embed">
    <div v-show="statusVisible || activeInstance !== instance" class="status" role="status">
      <div>
        <div v-if="statusSpinning" class="spinner" />
        <h1>{{ activeInstance !== instance && liveViewUrl ? 'Online ordering' : statusTitle }}</h1>
        <button v-if="showFallback" type="button" @click="startSession">Try again</button>
        <p>
          {{ activeInstance !== instance && liveViewUrl ? 'The pickup menu appears when this window is fully in view.' : statusDetail }}
          <a
            v-if="showFallback"
            :href="fallbackHref"
            target="_blank"
            rel="nofollow noopener"
            class="fallback-btn"
          >Order on order.online</a>
        </p>
      </div>
    </div>
    <iframe
      v-if="liveViewUrl && activeInstance === instance"
      :src="liveViewUrl"
      title="Happy Family Chinese Restaurant online ordering"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      allow="clipboard-read; clipboard-write"
      referrerpolicy="no-referrer"
      @load="hideStatus"
    />
    <div
      v-if="liveViewUrl && activeInstance === instance && mobileViewport"
      class="mobile-gestures"
      aria-hidden="true"
      @pointerdown.prevent="beginTouch"
      @pointermove.prevent="moveTouch"
      @pointerup.prevent="endTouch"
      @pointercancel="cancelTouch"
      @lostpointercapture="cancelTouch"
    />
  </div>
</template>

<script setup>
import { createOrderTouch } from '../utils/order-touch.js'

const props = defineProps({
  fallbackUrl: {
    type: String,
    default:
      'https://order.online/business/happy-family-chinese-restaurant-15185683',
  },
})

const config = useRuntimeConfig()
const fallbackHref = computed(
  () => props.fallbackUrl || config.public.orderStoreUrl
)

let container = null
const {
  liveViewUrl, activeInstance, statusVisible, statusSpinning, statusTitle, statusDetail,
  showFallback, startSession, hideStatus, setVisible, setViewport, sendInput, removeInstance,
} = useOrderSession()

const instance = Symbol('ordering-window')
let observer
let resizeObserver
const mobileViewport = ref(false)
let inputTimer
let sendingInput = false
let disposed = false
const pendingInput = []

function enqueueInput(input) {
  const previous = pendingInput.at(-1)
  if (input.type === 'scroll' && previous?.type === 'scroll') {
    previous.deltaX += input.deltaX
    previous.deltaY += input.deltaY
    previous.x = input.x
    previous.y = input.y
  } else pendingInput.push(input)
  if (!sendingInput && !inputTimer) inputTimer = setTimeout(flushInput, 60)
}

async function flushInput() {
  inputTimer = null
  if (sendingInput || disposed) return
  sendingInput = true
  try {
    while (pendingInput.length && !disposed) {
      await sendInput(instance, pendingInput.shift())
    }
  } catch {
    pendingInput.length = 0
  } finally {
    sendingInput = false
  }
}

const touch = createOrderTouch(enqueueInput)
function touchPoint(event) {
  const rect = container.getBoundingClientRect()
  return [event.pointerId, event.clientX - rect.left, event.clientY - rect.top]
}
function beginTouch(event) {
  if (!event.isPrimary) return
  event.currentTarget.setPointerCapture(event.pointerId)
  touch.start(...touchPoint(event))
}
function moveTouch(event) { touch.move(...touchPoint(event)) }
function endTouch(event) { touch.end(...touchPoint(event)) }
function cancelTouch() { touch.cancel() }

function measureViewport() {
  if (!container) return
  const { width, height } = container.getBoundingClientRect()
  if (width <= 0 || height <= 0) return
  mobileViewport.value = window.matchMedia('(pointer: coarse)').matches && width < 1024
  setViewport(instance, {
    width, height,
    mobile: mobileViewport.value,
  })
}

function observeContainer(element) {
  if (element === container) return
  observer?.disconnect()
  resizeObserver?.disconnect()
  setVisible(instance, false)
  container = element instanceof Element ? element : null
  if (container && observer) {
    measureViewport()
    observer.observe(container)
    resizeObserver?.observe(container)
  }
}

onMounted(() => {
  resizeObserver = new ResizeObserver(measureViewport)
  observer = new IntersectionObserver(([entry]) => {
    // Allow only subpixel rounding at viewport edges, never partial exposure.
    const bounds = entry.rootBounds
    const rect = entry.boundingClientRect
    const fullyVisible = bounds && entry.isIntersecting &&
      rect.top >= bounds.top - 0.5 && rect.left >= bounds.left - 0.5 &&
      rect.bottom <= bounds.bottom + 0.5 && rect.right <= bounds.right + 0.5 &&
      entry.intersectionRatio >= 0.999
    measureViewport()
    setVisible(instance, Boolean(fullyVisible))
  }, { threshold: [0, 0.999, 1] })
  if (container) {
    measureViewport()
    observer.observe(container)
    resizeObserver.observe(container)
  }
})

onBeforeUnmount(() => {
  disposed = true
  clearTimeout(inputTimer)
  touch.cancel()
  pendingInput.length = 0
  resizeObserver?.disconnect()
  observer?.disconnect()
  removeInstance(instance)
})
</script>

<style scoped>
.online-order-embed {
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1 1 0%;
  min-width: 0;
  min-height: 0;
  background: #fff;
  overflow: hidden;
}

iframe {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #fff;
}

.mobile-gestures {
  position: absolute;
  inset: 0;
  touch-action: none;
  user-select: none;
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
