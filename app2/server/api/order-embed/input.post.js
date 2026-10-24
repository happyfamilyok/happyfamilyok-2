export default defineEventHandler(async (event) => {
  const { sessionId, input } = await readBody(event)
  await sendOrderSessionInput(sessionId, input)
  return { ok: true }
})
