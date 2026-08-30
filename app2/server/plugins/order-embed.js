export default defineNitroPlugin((nitroApp) => {
  if (!isOrderEmbedAvailable()) return
  nitroApp.hooks.hook('close', () => shutdownOrderEmbed())
})
