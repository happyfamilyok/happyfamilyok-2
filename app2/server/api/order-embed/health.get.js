export default defineEventHandler((event) => {
  const origin = getHeader(event, 'origin')
  setResponseHeaders(event, orderEmbedCorsHeaders(origin))
  return {
    ...getOrderEmbedHealth(),
    provider: isBrowserbaseConfigured() ? 'browserbase' : 'vps',
    browserbase: isBrowserbaseConfigured(),
    storeUrl: ORDER_ONLINE_URL,
  }
})
