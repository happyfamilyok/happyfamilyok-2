import { reactive, toRefs } from 'vue'
import { createOrderSessionController } from '../utils/order-session.js'

let shared

export function useOrderSession() {
  if (!shared) {
    const state = reactive({
      phase: 'waiting',
      activeInstance: null,
      liveViewUrl: '',
      statusVisible: true,
      statusSpinning: false,
      statusTitle: 'Online ordering',
      statusDetail: 'The pickup menu opens when this window is fully in view.',
      showFallback: false,
    })
    const controller = createOrderSessionController({
      state,
      request: (...args) => $fetch(...args),
      release: (sessionId) => fetch('/api/order-embed/release', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
        keepalive: true,
      }).catch(() => {}),
      isPageVisible: () => document.visibilityState === 'visible',
    })
    document.addEventListener('visibilitychange', controller.ensureStarted)
    window.addEventListener('pageshow', controller.ensureStarted)
    window.addEventListener('pagehide', controller.releaseSession)
    shared = { ...toRefs(state), ...controller }
    if (import.meta.hot) import.meta.hot.dispose(() => {
      controller.releaseSession()
      document.removeEventListener('visibilitychange', controller.ensureStarted)
      window.removeEventListener('pageshow', controller.ensureStarted)
      window.removeEventListener('pagehide', controller.releaseSession)
    })
  }
  return shared
}
