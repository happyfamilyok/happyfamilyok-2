export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin')
  setResponseHeaders(event, orderEmbedCorsHeaders(origin))
  const health = getOrderEmbedHealth()
  if (health.supported && !health.ready) {
    ensureOrderEmbed().catch(() => {})
  }
  return health
})
