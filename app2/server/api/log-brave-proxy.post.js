export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)
    
    // Make the HTTP request to your endpoint from the server side
    // This avoids mixed content issues since server-to-server communication doesn't have those restrictions
    const response = await $fetch('http://107.175.194.17/log-brave-user.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        timestamp: body.timestamp || new Date().toISOString(),
        userAgent: body.userAgent || 'Unknown',
        url: body.url || 'Unknown',
        action: body.action || 'log_privacy_browser_user',
        browserName: body.browserName || 'Unknown'
      })
    })
    
    console.log('Successfully proxied privacy browser request to VPS:', response)
    
    return {
      success: true,
      message: 'Privacy browser user logged successfully via proxy',
      data: response
    }
    
  } catch (error) {
    console.error('Error proxying request to VPS:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to log privacy browser user',
      data: error.message
    })
  }
})
