// server/api/ask-ai.post.js
import { getCookie, setCookie } from 'h3'
export default defineEventHandler(async (event) => {
  try {
    // Simple per-user rate limit via cookie (max 10 requests per 24h)
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

    const body = await readBody(event)

    if (!body?.dishName || typeof body.dishName !== 'string' || body.dishName.trim().length < 2) {
      throw createError({
        statusCode: 400,
        statusMessage: "dishName is required",
      })
    }

    const prompt = `Give a short, appetizing description of the dish: ${body.dishName}. Keep it under 25 words.`

    // Call Cloudflare Workers AI using the documented schema for llama-3.1-8b-instruct
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
          prompt,
          temperature: 0.3,
          max_tokens: 120,
        },
      }
    )

    // Cloudflare wraps results in an envelope { success, result }
    const aiText = response?.result?.response ?? response?.response ?? (typeof response === 'string' ? response : '')

    // Build a user-friendly, compact payload for the client
    const simplified = {
      text: aiText || '',
      model: response?.result?.model || '@cf/meta/llama-3.1-8b-instruct',
      usage: response?.result?.usage || response?.result?.token_count || undefined,
    }

    return {
      success: true,
      dish: body.dishName,
      aiText,
      // Keep the field name used by the client, but return a simplified object
      aiResponse: simplified,
    }
  } catch (error) {
    // Surface Cloudflare's error payload to help debug 400s
    console.error("Error proxying to Cloudflare AI:", error?.data || error?.message || error)

    throw createError({
      statusCode: 500,
      statusMessage: "Failed to query Cloudflare AI",
      data: error?.data || error?.message || String(error),
    })
  }
})
