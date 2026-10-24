export default defineEventHandler(async (event) => {
  const origin = getHeader(event, 'origin')
  setResponseHeaders(event, orderEmbedCorsHeaders(origin))

  try {
    return await createOrderLiveView()
  } catch (err) {
    throw createError({
      statusCode: err.statusCode || 502,
      statusMessage: err.message || 'Could not start Browserbase ordering session',
    })
  }
})
