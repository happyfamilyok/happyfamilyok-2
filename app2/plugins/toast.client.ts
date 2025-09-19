// plugins/toast.client.ts
// Dynamically renders a global toast using the provided markup and overrides window.alert
// No changes to pages/index.vue are required.

export default defineNuxtPlugin(() => {
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
      svg: '<path d="M12 9v4m0 4h.01M10.34 3.94l-7.06 12.23a2 2 0 001.73 3h14.12a2 2 0 001.73-3L13.8 3.94a2 2 0 00-3.46 0z" stroke-linecap="round" stroke-linejoin="round" />',
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

    // Close interactions
    const remove = () => {
      if (!panel.isConnected) return
      panel.classList.add('opacity-0', 'translate-y-2')
      setTimeout(() => panel.remove(), 200)
    }

    panel.querySelector('.toast-close')?.addEventListener('click', remove)

    // Auto-dismiss
    const t = window.setTimeout(remove, durationMs)
    panel.addEventListener('mouseenter', () => clearTimeout(t))

    // Insert into stack
    stack.appendChild(panel)
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

  // Override window.alert to use toast, parsing AI JSON for description
  const originalAlert = window.alert.bind(window)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.alert = (message?: any) => {
    try {
      const text = typeof message === 'string' ? message : JSON.stringify(message)
      const { title, body } = extractAiTextFromAlert(text)
      showToast({ title, message: body, type: 'info' })
    } catch (e) {
      originalAlert(message)
    }
  }

  // Intercept fetch calls to show toast on rate limit errors from /api/ask-ai
  if (!(window as any).__toastFetchPatched) {
    const originalFetch = window.fetch.bind(window)
    window.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
      const res = await originalFetch(input as any, init)
      try {
        const url = typeof input === 'string' ? input : (input as URL)?.toString?.() || (input as Request)?.url
        if (url && url.includes('/api/ask-ai') && !res.ok) {
          // Try to parse JSON error payload
          const clone = res.clone()
          let msg = ''
          try {
            const data = await clone.json()
            msg = data?.data || data?.statusMessage || data?.message || ''
          } catch {
            try { msg = await clone.text() } catch { /* ignore */ }
          }
          if (typeof msg === 'string' && msg.toLowerCase().includes('rate limit exceeded')) {
            showToast({ title: 'Error', message: 'Rate limit exceeded: max 10 requests per 24 hours', type: 'error' })
          }
        }
      } catch {
        // ignore interception failures
      }
      return res
    }
    ;(window as any).__toastFetchPatched = true
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
