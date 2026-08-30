export default defineNitroPlugin((nitroApp) => {
  if (!isOrderEmbedAvailable()) return
  if (import.meta.dev) {
    ensureOrderEmbed().catch(() => {})
  }
  nitroApp.hooks.hook('close', () => shutdownOrderEmbed())
})
