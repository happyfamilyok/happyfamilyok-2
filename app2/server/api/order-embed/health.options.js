export default defineEventHandler((event) => {
  setResponseHeaders(event, orderEmbedCorsHeaders(getHeader(event, 'origin')))
  setResponseStatus(event, 204)
  return ''
})
