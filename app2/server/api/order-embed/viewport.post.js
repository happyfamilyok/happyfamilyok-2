export default defineEventHandler(async (event) => {
  const { sessionId, viewport } = await readBody(event)
  await resizeOrderSession(sessionId, viewport)
  return { ok: true }
})
