export default defineEventHandler(() => {
  const health = getOrderEmbedHealth()
  if (!health.ready) {
    ensureOrderEmbed().catch(() => {})
  }
  return health
})
