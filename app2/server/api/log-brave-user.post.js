import mysql from 'mysql2/promise'

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
    
    // Database configuration - update host with your VPS IP/domain
    const connection = await mysql.createConnection({
      host: '107.175.194.17', // Your VPS IP address
      user: 'jzheng',
      password: 'jz72903',
      database: 'phpmyadmin',
      charset: 'utf8mb4'
    })
    
    try {
      // Get current timestamp in MySQL format
      const currentDateTime = new Date().toISOString().slice(0, 23).replace('T', ' ')
      
      // Execute the INSERT statement
      const [result] = await connection.execute(
        'INSERT INTO `happyfamily` (`date`) VALUES (?)',
        [currentDateTime]
      )
      
      console.log('Brave user logged:', {
        id: result.insertId,
        date: currentDateTime,
        userAgent: body.userAgent || 'Unknown',
        url: body.url || 'Unknown'
      })
      
      return {
        success: true,
        id: result.insertId,
        date: currentDateTime,
        message: 'Brave user logged successfully'
      }
      
    } finally {
      await connection.end()
    }
    
  } catch (error) {
    console.error('Error logging Brave user:', error)
    
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to log Brave user',
      data: error.message
    })
  }
})
