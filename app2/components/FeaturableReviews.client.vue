<template>
  <div
    :id="containerId"
    data-featurable-async
  />
</template>

<script setup>
const WIDGET_ID = 'b6e969a0-ed41-4868-9f25-f6583b93b3ef'
const EMBED_SRC = 'https://cdn.featurable.com/widget/v2/embed.js'
const containerId = `featurable-${WIDGET_ID}`

function getInit() {
  return window.featurable_widgets_all
}

function waitForInit(timeoutMs = 10000) {
  return new Promise((resolve, reject) => {
    const started = Date.now()
    const tick = () => {
      if (typeof getInit() === 'function') {
        resolve(getInit())
        return
      }
      if (Date.now() - started > timeoutMs) {
        reject(new Error('Featurable widget failed to load'))
        return
      }
      requestAnimationFrame(tick)
    }
    tick()
  })
}

function loadEmbedScript() {
  if (typeof getInit() === 'function') {
    return Promise.resolve(getInit())
  }

  const existing = document.querySelector(`script[src="${EMBED_SRC}"]`)
  if (!existing) {
    const script = document.createElement('script')
    script.src = EMBED_SRC
    script.defer = true
    script.onerror = () => console.warn('Failed to load Featurable embed')
    document.body.appendChild(script)
  }

  return waitForInit()
}

onMounted(async () => {
  await nextTick()
  try {
    // Script already ran on a previous visit — remount into this page's empty container.
    if (typeof getInit() === 'function') {
      await getInit()()
      return
    }
    // First visit: embed.js loads the widget bundle, which auto-initializes.
    await loadEmbedScript()
  } catch (error) {
    console.warn(error)
  }
})
</script>
