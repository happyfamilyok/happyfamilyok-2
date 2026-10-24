<template>
  <div class="online-order-embed">
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
          >Order on order.online</a>
        </p>
      </div>
    </div>
    <iframe
      v-if="liveViewUrl"
      :src="liveViewUrl"
      title="Happy Family Chinese Restaurant online ordering"
      sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      allow="clipboard-read; clipboard-write"
      referrerpolicy="no-referrer"
      @load="hideStatus"
    />
  </div>
</template>

<script setup>
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

const liveViewUrl = ref('')
const statusVisible = ref(true)
const statusSpinning = ref(true)
const statusTitle = ref('Loading online ordering')
const statusDetail = ref('Starting a Browserbase session for pickup ordering…')
const showFallback = ref(false)

let alive = true

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
}

async function startSession() {
  if (!alive) return
  liveViewUrl.value = ''
  setStatus(
    'Loading online ordering',
    'Starting a Browserbase session for pickup ordering…'
  )
  try {
    const session = await $fetch('/api/order-embed/session', {
      method: 'POST',
      cache: 'no-store',
    })
    if (!alive) return
    if (!session?.liveViewUrl) throw new Error('missing live view')
    liveViewUrl.value = session.liveViewUrl
    setStatus('Loading online ordering', 'Opening the pickup menu…')
  } catch {
    if (!alive) return
    setStatus(
      'Online ordering unavailable',
      'Could not start a Browserbase ordering session.',
      false,
      true
    )
  }
}

function onDisconnectMessage(event) {
  if (event.data !== 'browserbase-disconnected') return
  if (!alive) return
  setStatus(
    'Disconnected',
    'The ordering session ended. Open the menu in a new tab or reload this page.',
    false,
    true
  )
}

onMounted(() => {
  alive = true
  window.addEventListener('message', onDisconnectMessage)
  startSession()
})

onBeforeUnmount(() => {
  alive = false
  window.removeEventListener('message', onDisconnectMessage)
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

iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: 0;
  background: #fff;
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
