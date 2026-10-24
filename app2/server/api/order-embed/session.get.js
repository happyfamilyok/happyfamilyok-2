export default defineEventHandler((event) => {
  setHeader(event, 'Cache-Control', 'no-store')
  return { active: isOrderSessionActive(String(getQuery(event).sessionId || '')) }
})
