// plugins/toast.client.ts
// Dynamically renders a global toast using the provided markup and overrides window.alert
// No changes to pages/index.vue are required.

export default defineNuxtPlugin((nuxtApp) => {
  // Ensure the global live region container exists
  const ensureToastRegion = (): HTMLElement => {
    let region = document.getElementById('global-toast-region') as HTMLElement | null
    if (!region) {
      region = document.createElement('div')
      region.id = 'global-toast-region'
      region.setAttribute('aria-live', 'assertive')
      region.className = 'pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6 z-[99999]'
      // Inner stack container
      const stack = document.createElement('div')
      stack.className = 'flex w-full flex-col items-center space-y-4 sm:items-end'
      stack.id = 'global-toast-stack'
      region.appendChild(stack)
      document.body.appendChild(region)
    }
    return region
  }

  type ToastType = 'success' | 'error' | 'info'

  const iconByType: Record<ToastType, { color: string; svg: string; titleDefault: string }> = {
    success: {
      color: 'text-green-400',
      svg: '<path d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke-linecap="round" stroke-linejoin="round" />',
      titleDefault: 'Success',
    },
    info: {
      color: 'text-blue-400',
      svg: '<path d="M12 9h.01M11 12h1v4h1m-1-13a9 9 0 110 18 9 9 0 010-18z" stroke-linecap="round" stroke-linejoin="round" />',
      titleDefault: 'Notice',
    },
    error: {
      color: 'text-red-400',
      // Red X icon for errors
      svg: '<path d="M6 18L18 6M6 6l12 12" stroke-linecap="round" stroke-linejoin="round" />',
      titleDefault: 'Error',
    },
  }

  const showToast = (opts: { title?: string; message?: string; type?: ToastType; durationMs?: number } = {}) => {
    const { title, message, type = 'success', durationMs = 4000 } = opts
    const region = ensureToastRegion()
    const stack = region.querySelector('#global-toast-stack') as HTMLElement

    // Build notification panel per provided markup
    const panel = document.createElement('div')
    panel.className = 'pointer-events-auto w-full max-w-sm translate-y-0 transform rounded-lg bg-white opacity-100 shadow-lg outline-1 outline-black/5 transition duration-300 ease-out sm:translate-x-0 starting:translate-y-2 starting:opacity-0 starting:sm:translate-x-2 starting:sm:translate-y-0'

    const icon = iconByType[type]

    panel.innerHTML = `
      <div class="p-4">
        <div class="flex items-start">
          <div class="shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true" class="size-6 ${icon.color}">
              ${icon.svg}
            </svg>
          </div>
          <div class="ml-3 w-0 flex-1 pt-0.5">
            <p class="text-sm font-medium text-gray-900">${(title || icon.titleDefault).replace(/</g, '&lt;')}</p>
            <p class="mt-1 text-sm text-gray-500">${(message || '').replace(/</g, '&lt;').replace(/\n/g, '<br/>')}</p>
            <p class="mt-1 text-[8pt] text-gray-400">AI Generated - may contain errors.</p>
        </div>
          <div class="ml-4 flex shrink-0">
            <button type="button" class="toast-close inline-flex rounded-md text-gray-400 hover:text-gray-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
              <span class="sr-only">Close</span>
              <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" class="size-5">
                <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    `

    // Timer state for auto-dismiss with pause/resume
    let timeoutId: number | undefined
    let remaining = Math.max(0, durationMs)
    let startTime = Date.now()

    // Close interactions
    const remove = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = undefined
      }
      if (!panel.isConnected) return
      panel.classList.add('opacity-0', 'translate-y-2')
      setTimeout(() => panel.remove(), 200)
    }

    panel.querySelector('.toast-close')?.addEventListener('click', remove)

    // Auto-dismiss with pause on hover and resume on mouse leave
    const startTimer = () => {
      startTime = Date.now()
      if (remaining <= 0) {
        remove()
        return
      }
      timeoutId = window.setTimeout(remove, remaining)
    }

    const pauseTimer = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        timeoutId = undefined
        remaining = Math.max(0, remaining - (Date.now() - startTime))
      }
    }

    panel.addEventListener('mouseenter', pauseTimer)
    panel.addEventListener('mouseleave', startTimer)

    // Insert into stack and start timer
    stack.appendChild(panel)
    startTimer()

    return remove
  }

  // Expose as a global for convenience if needed
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ;(window as any).showToast = showToast

  // Helper to extract AI text from alert strings like:
  // "Dish: ...\n\nAI says: {\"text\":\"...\"}"
  const extractAiTextFromAlert = (fullText: string): { title: string; body: string } => {
    const lines = fullText.split('\n')
    const nonEmpty = lines.map(l => l.trim()).filter(Boolean)
    const title = nonEmpty[0] || 'Notice'

    // Prefer parsing after the marker "AI says:"
    const afterMarkerMatch = fullText.match(/AI says:\s*([\s\S]*)$/)
    if (afterMarkerMatch) {
      const payload = afterMarkerMatch[1].trim()
      // Try object JSON { text: ... }
      if (payload.startsWith('{')) {
        try {
          const obj = JSON.parse(payload)
          const aiText = obj?.text || obj?.aiText || obj?.result?.response || ''
          if (aiText) return { title, body: String(aiText) }
        } catch {
          // fall through
        }
      }
      // Try string JSON "..."
      if ((payload.startsWith('"') && payload.endsWith('"')) || (payload.startsWith("'") && payload.endsWith("'"))) {
        try {
          const s = JSON.parse(payload as string)
          return { title, body: String(s) }
        } catch {
          // fall through
        }
      }
      // Fallback: use raw payload (strip wrapping quotes if present)
      const stripped = payload.replace(/^['"]|['"]$/g, '')
      return { title, body: stripped }
    }

    // Otherwise try parsing the remainder (all but the first line) as JSON
    const remainder = nonEmpty.slice(1).join('\n')
    if (remainder) {
      try {
        const maybeObj = JSON.parse(remainder)
        if (typeof maybeObj === 'string') {
          return { title, body: maybeObj }
        }
        const aiText = maybeObj?.text || maybeObj?.aiText || maybeObj?.result?.response || ''
        if (aiText) return { title, body: String(aiText) }
      } catch {
        // ignore
      }
    }

    // Default: use everything after first line
    return { title, body: nonEmpty.slice(1).join('\n') }
  }

  // Normalize/shorten a rate limit message if present
  const RATE_LIMIT_SENTENCE = 'Rate limit exceeded: max 10 requests per 24 hours'
  const normalizeRateLimitMessage = (text: string): string | null => {
    return /rate limit exceeded: max 10 requests per 24 hours/i.test(text) ? RATE_LIMIT_SENTENCE : null
  }

  // Override window.alert to use toast, parsing AI JSON for description
  const originalAlert = window.alert.bind(window)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.alert = (message?: any) => {
    try {
      const text = typeof message === 'string' ? message : JSON.stringify(message)

      // If this is a rate-limit message, show a clean error toast with red X
      const rl = normalizeRateLimitMessage(text)
      if (rl) {
        showToast({ title: 'Rate limit exceeded', message: rl, type: 'error', durationMs: 6000 })
        return
      }

      const { title, body } = extractAiTextFromAlert(text)
      showToast({ title, message: body, type: 'info' })
    } catch (e) {
      originalAlert(message)
    }
  }

  // Intercept $fetch (ofetch) used by useFetch/$fetch to catch 429s as well
  try {
    const f = (nuxtApp as any).$fetch
    if (f && typeof f.onResponse === 'function') {
      f.onResponse((ctx: any) => {
        const reqUrl = String(ctx.request || '')
        if (reqUrl.includes('/api/ask-ai') && ctx.response?.status === 429) {
          showToast({ title: 'Rate limit exceeded', message: RATE_LIMIT_SENTENCE, type: 'error', durationMs: 6000 })
        }
      })
      if (typeof f.onResponseError === 'function') {
        f.onResponseError((ctx: any) => {
          const reqUrl = String(ctx.request || '')
          const status = ctx.response?.status || ctx.options?.response?.status
          if (reqUrl.includes('/api/ask-ai') && status === 429) {
            showToast({ title: 'Rate limit exceeded', message: RATE_LIMIT_SENTENCE, type: 'error', durationMs: 6000 })
          } else if (reqUrl.includes('/api/ask-ai')) {
            const msg = normalizeRateLimitMessage(String(ctx.error?.data || ctx.error?.message || ''))
            if (msg) {
              showToast({ title: 'Rate limit exceeded', message: msg, type: 'error', durationMs: 6000 })
            }
          }
        })
      }
    }
  } catch {
    // ignore
  }

  // Intercept fetch for /api/ask-ai to display a clear rate limit message
  if (!(window as any).__askAiFetchPatched) {
    ;(window as any).__askAiFetchPatched = true
    const originalFetch = window.fetch.bind(window)
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const res = await originalFetch(input as any, init as any)
      try {
        const url = typeof input === 'string'
          ? input
          : input instanceof URL
            ? input.toString()
            : (input as Request)?.url ?? ''

        if (url.includes('/api/ask-ai')) {
          if (res.status === 429) {
            showToast({ title: 'Rate limit exceeded', message: RATE_LIMIT_SENTENCE, type: 'error', durationMs: 6000 })
          } else if (res.status >= 400) {
            // Inspect response body to catch rate limit phrasing coming from proxies
            try {
              const clone = res.clone()
              const text = await clone.text()
              if (/rate limit exceeded: max 10 requests per 24 hours/i.test(text)) {
                showToast({ title: 'Rate limit exceeded', message: RATE_LIMIT_SENTENCE, type: 'error', durationMs: 6000 })
              }
            } catch {
              // ignore
            }
          }
        }
      } catch {
        // ignore toast-side interception errors
      }
      return res
    }
  }

  // Also provide via Nuxt inject for composables/components
  return {
    provide: {
      toast: showToast,
    },
  }
})

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    showToast?: (opts: { title?: string; message?: string; type?: 'success' | 'error' | 'info'; durationMs?: number }) => void
  }
}
