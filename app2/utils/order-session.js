import { normalizeOrderViewport } from '../server/utils/order-viewport.js'

// One controller is shared by every ordering component in the current page.
export function createOrderSessionController({ state, request, release, isPageVisible }) {
  const visibleInstances = new Set()
  let sessionId = ''
  let generation = 0
  let timer
  let resizeTimer
  let resizing = false
  let appliedViewport = ''
  const viewports = new Map()
  const currentViewport = () => viewports.get(state.activeInstance) || normalizeOrderViewport()

  async function syncViewport() {
    if (resizing || !sessionId || !state.activeInstance) return
    resizing = true
    const id = sessionId
    try {
      while (id === sessionId && state.activeInstance) {
        const viewport = currentViewport()
        const key = JSON.stringify(viewport)
        if (key === appliedViewport) break
        await request('/api/order-embed/viewport', {
          method: 'POST', body: { sessionId: id, viewport },
        })
        if (id !== sessionId) break
        appliedViewport = key
      }
    } catch {
      // The next measurement retries; resizing must not create another session.
    } finally {
      resizing = false
    }
  }

  function setViewport(instance, viewport) {
    viewports.set(instance, normalizeOrderViewport(viewport))
    if (state.activeInstance === instance) {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(syncViewport, 150)
    }
  }

  function setStatus(title, detail, spinning = false, fallback = false) {
    Object.assign(state, {
      statusTitle: title, statusDetail: detail, statusSpinning: spinning,
      showFallback: fallback, statusVisible: true,
    })
  }

  function releaseSession() {
    generation++
    clearTimeout(timer)
    clearTimeout(resizeTimer)
    appliedViewport = ''
    const id = sessionId
    sessionId = ''
    state.liveViewUrl = ''
    state.phase = 'waiting'
    if (id) release(id)
  }

  async function checkSession() {
    const id = sessionId
    if (!id) return
    try {
      const status = await request('/api/order-embed/session', {
        query: { sessionId: id }, cache: 'no-store',
      })
      if (sessionId !== id) return
      if (!status.active) {
        sessionId = ''
        state.liveViewUrl = ''
        state.phase = 'closed'
        setStatus('Ordering session closed',
          'The session closes after 15 seconds without activity. Try again to start a new ordering session.',
          false, true)
        return
      }
    } catch {
      // Keep the current view during temporary network failures.
    }
    if (sessionId === id) timer = setTimeout(checkSession, 3000)
  }

  async function startSession() {
    if (!visibleInstances.size || !isPageVisible() ||
        state.phase === 'starting' || sessionId) return
    const version = ++generation
    state.phase = 'starting'
    setStatus('Loading online ordering', 'Opening the pickup menu…', true)
    try {
      const viewport = currentViewport()
      const session = await request('/api/order-embed/session', {
        method: 'POST', cache: 'no-store', body: { viewport },
      })
      // Component switches must keep an already requested session alive.
      if (generation !== version) {
        if (session?.sessionId) release(session.sessionId)
        return
      }
      if (!session?.sessionId || !session?.liveViewUrl) {
        if (session?.sessionId) release(session.sessionId)
        throw new Error('Missing ordering session')
      }
      sessionId = session.sessionId
      state.liveViewUrl = session.liveViewUrl
      state.phase = 'active'
      appliedViewport = JSON.stringify(viewport)
      void syncViewport()
      timer = setTimeout(checkSession, 3000)
    } catch (error) {
      if (generation !== version) return
      state.phase = 'failed'
      setStatus('Online ordering unavailable',
        error?.data?.data?.message || 'Could not start online ordering. Please try again or order directly on order.online.',
        false, true)
    }
  }

  function ensureStarted() {
    if (state.phase === 'waiting') void startSession()
  }

  function setVisible(instance, visible) {
    if (visible) visibleInstances.add(instance)
    else visibleInstances.delete(instance)
    // Full visibility gates startup and handoff, not the lifetime of a loaded viewer.
    if (!visibleInstances.has(state.activeInstance) && visibleInstances.size) {
      state.activeInstance = visibleInstances.values().next().value
    }
    ensureStarted()
    void syncViewport()
  }

  function removeInstance(instance) {
    visibleInstances.delete(instance)
    viewports.delete(instance)
    if (state.activeInstance === instance) {
      state.activeInstance = visibleInstances.values().next().value || null
      void syncViewport()
    }
  }

  async function sendInput(instance, input) {
    if (state.activeInstance !== instance || !sessionId || state.phase !== 'active') return
    await request('/api/order-embed/input', {
      method: 'POST', body: { sessionId, input },
    })
  }

  function hideStatus() {
    if (state.phase !== 'active') return
    state.statusVisible = false
    state.showFallback = false
  }

  return { setVisible, setViewport, sendInput, removeInstance, ensureStarted, startSession, releaseSession, hideStatus }
}
