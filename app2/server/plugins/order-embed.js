export default defineNitroPlugin((nitroApp) => {
  ensureOrderEmbed().catch(() => {})
  nitroApp.hooks.hook('close', () => shutdownOrderEmbed())
})
