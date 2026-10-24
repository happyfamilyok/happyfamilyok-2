export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('close', () => shutdownBrowserbaseOrders())
  if (!isOrderEmbedAvailable()) return
  nitroApp.hooks.hook('close', () => shutdownOrderEmbed())
})
