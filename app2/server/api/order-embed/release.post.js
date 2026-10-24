export default defineEventHandler(async (event) => {
  const { sessionId } = await readBody(event)
  await releaseOrderSession(sessionId)
  return { ok: true }
})
