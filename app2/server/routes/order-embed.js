export default defineWebSocketHandler({
  open(peer) {
    addOrderEmbedPeer(peer)
  },
  message(peer, message) {
    const text = message.text().trim()
    if (!text || text === 'connected' || (text[0] !== '{' && text[0] !== '[')) return
    try {
      handleOrderEmbedInput(JSON.parse(text))
    } catch (err) {
      peer.send(
        JSON.stringify({
          type: 'error',
          message: String(err?.message || err),
        })
      )
    }
  },
  close(peer) {
    removeOrderEmbedPeer(peer)
  },
})
