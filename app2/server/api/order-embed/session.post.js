export default defineEventHandler(async (event) => {
  const origin = getHeader(event, 'origin')
  setResponseHeaders(event, orderEmbedCorsHeaders(origin))

  try {
    const body = await readBody(event)
    return await createOrderLiveView(body?.viewport)
  } catch (err) {
    throw createError({
      statusCode: err.statusCode || 502,
      statusMessage: 'Could not start ordering session',
      data: {
        message: err.statusCode === 402
          ? 'Embedded ordering has reached its Browserbase usage limit. Please order directly on order.online.'
          : err.statusCode === 429
            ? 'Online ordering is busy. Please try again in a few minutes, or order directly on order.online.'
            : 'Could not start online ordering. Please try again or order directly on order.online.',
      },
    })
  }
})
