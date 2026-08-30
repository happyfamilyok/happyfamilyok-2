process.env.ORDER_EMBED_FORCE = '1'

import http from 'node:http'
import { WebSocketServer } from 'ws'
import {
  addOrderEmbedPeer,
  getOrderEmbedHealth,
  handleOrderEmbedInput,
  isOrderEmbedOriginAllowed,
  orderEmbedCorsHeaders,
  removeOrderEmbedPeer,
  sessionIdFromRequestUrl,
  shutdownOrderEmbed,
} from '../server/utils/order-embed.js'

const PORT = Number(process.env.PORT) || 8787
const HOST = process.env.HOST || '0.0.0.0'

function applyCors(req, res) {
  const headers = orderEmbedCorsHeaders(req.headers.origin)
  for (const [key, value] of Object.entries(headers)) {
    res.setHeader(key, value)
  }
}

function sendJson(req, res, status, body) {
  applyCors(req, res)
  res.writeHead(status, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(body))
}

const server = http.createServer((req, res) => {
  const url = req.url?.split('?')[0] || '/'

  if (req.method === 'OPTIONS') {
    applyCors(req, res)
    res.writeHead(204)
    res.end()
    return
  }

  if (url === '/' || url === '/health' || url === '/api/order-embed/health') {
    sendJson(req, res, 200, getOrderEmbedHealth())
    return
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' })
  res.end('Not found')
})

const wss = new WebSocketServer({ server })

wss.on('connection', (socket, req) => {
  const origin = req.headers.origin
  if (!isOrderEmbedOriginAllowed(origin)) {
    socket.close(1008, 'origin not allowed')
    return
  }

  const requestUrl = req.url || '/'
  const pathname = requestUrl.split('?')[0]
  if (pathname !== '/order-embed') {
    socket.close(1008, 'not found')
    return
  }

  addOrderEmbedPeer(socket, sessionIdFromRequestUrl(requestUrl))

  socket.on('message', (raw) => {
    const text = String(raw).trim()
    if (!text || text === 'connected' || (text[0] !== '{' && text[0] !== '[')) return
    try {
      handleOrderEmbedInput(socket, JSON.parse(text))
    } catch (err) {
      socket.send(
        JSON.stringify({
          type: 'error',
          message: String(err?.message || err),
        })
      )
    }
  })

  socket.on('close', () => {
    removeOrderEmbedPeer(socket)
  })
})

async function shutdown() {
  await shutdownOrderEmbed()
  await new Promise((resolve) => server.close(resolve))
}

process.on('SIGINT', () => shutdown().then(() => process.exit(0)))
process.on('SIGTERM', () => shutdown().then(() => process.exit(0)))

server.listen(PORT, HOST, () => {
  console.log(`Order embed host listening on http://${HOST}:${PORT}`)
})
