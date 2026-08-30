export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin')
  setResponseHeaders(event, orderEmbedCorsHeaders(origin))
  return getOrderEmbedHealth()
})
