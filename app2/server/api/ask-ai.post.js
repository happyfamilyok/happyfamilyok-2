// server/api/ask-ai.post.js
import { getCookie, setCookie, getRequestURL } from 'h3'

const trimToDishDescription = (text) => {
  let t = String(text || '').trim()
  if (!t) return ''

  const quoted = t.match(/^["“]([^"”]+)["”]/)
  if (quoted?.[1]) return quoted[1].trim()

  t = t.split(/\n+/)[0].trim()
  t = t.replace(/\s+(What|Who|Where|When|Why|How)\s+(is|are|was|were|do|does|did|the)\b[\s\S]*$/i, '')
  return t.replace(/^["“]|["”]$/g, '').trim()
}
export default defineEventHandler(async (event) => {
  try {
    const hostname = getRequestURL(event).hostname.toLowerCase()
    const isLocalhost = hostname === 'localhost'

    // Simple per-user rate limit via cookie (max 10 requests per 24h).
    // Skip on localhost so local testing is not capped.
    if (!isLocalhost) {
      const COOKIE_NAME = 'ask_ai_count'
      const LIMIT = 10
      const WINDOW_SEC = 60 * 60 * 24 // 24 hours

      let raw = getCookie(event, COOKIE_NAME) || '0'
      let count = parseInt(raw, 10)
      if (!Number.isFinite(count) || count < 0) count = 0
      if (count >= LIMIT) {
        throw createError({
          statusCode: 429,
          statusMessage: 'Rate limit exceeded: max 10 requests per 24 hours',
        })
      }
      // Increment immediately to account for attempts
      setCookie(event, COOKIE_NAME, String(count + 1), {
        maxAge: WINDOW_SEC,
        sameSite: 'lax',
        path: '/',
        httpOnly: true,
      })
    }

    const body = await readBody(event)

    if (!body?.dishName || typeof body.dishName !== 'string' || body.dishName.trim().length < 2) {
      throw createError({
        statusCode: 400,
        statusMessage: "dishName is required",
      })
    }

    const dishName = body.dishName.trim()

    // Chat messages keep the model from continuing into quiz-style follow-ups.
    const response = await $fetch(
      "https://api.cloudflare.com/client/v4/accounts/2c08273ee1caa17d3f3ef50e831bdec4/ai/run/@cf/meta/llama-3.1-8b-instruct",
      {
        method: "POST",
        headers: {
          Authorization: "Bearer ioQlD1_2GXIqzM-JmXF6dhIhZWpBSPSwXfKcGPjH", // direct token per your request
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: {
          messages: [
            {
              role: 'system',
              content: 'You write restaurant menu blurbs. Reply with one appetizing description of the dish and nothing else. No questions, no answers, no lists, no extra lines. Maximum 25 words.',
            },
            {
              role: 'user',
              content: `Describe this dish in one short sentence: ${dishName}`,
            },
          ],
          temperature: 0.3,
          max_tokens: 60,
        },
      }
    )

    // Cloudflare wraps results in an envelope { success, result }
    const rawAiText = response?.result?.response ?? response?.response ?? (typeof response === 'string' ? response : '')
    const aiText = trimToDishDescription(rawAiText)

    // Build a user-friendly, compact payload for the client
    const simplified = {
      text: aiText || '',
      model: response?.result?.model || '@cf/meta/llama-3.1-8b-instruct',
      usage: response?.result?.usage || response?.result?.token_count || undefined,
    }

    return {
      success: true,
      dish: dishName,
      aiText,
      // Keep the field name used by the client, but return a simplified object
      aiResponse: simplified,
    }
  } catch (error) {
    if (error?.statusCode && error.statusCode < 500) {
      throw error
    }

    // Surface Cloudflare's error payload to help debug 400s
    console.error("Error proxying to Cloudflare AI:", error?.data || error?.message || error)

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to query Cloudflare AI",
      data: error?.data || error?.message || String(error),
    })
  }
})
