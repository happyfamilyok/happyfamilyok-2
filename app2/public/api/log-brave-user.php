<?php
// Set timezone to Eastern Time (EST/EDT)
date_default_timezone_set('America/New_York');

// Debug: Log all requests for troubleshooting
error_log("Brave logging endpoint accessed - Method: " . $_SERVER['REQUEST_METHOD'] . ", Origin: " . ($_SERVER['HTTP_ORIGIN'] ?? 'None'));

// Enable CORS for client-side requests - set headers first
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS, GET');
header('Access-Control-Allow-Headers: Content-Type, Accept, Origin');
header('Access-Control-Max-Age: 3600');
header('Content-Type: application/json');

// Handle OPTIONS request for CORS preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    error_log("CORS preflight request handled");
    http_response_code(200);
    echo json_encode(['status' => 'CORS preflight OK']);
    exit;
}

// Add a simple GET endpoint for testing
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode([
        'status' => 'PHP endpoint is working',
        'server_time' => date('Y-m-d H:i:s'),
        'timezone' => date_default_timezone_get(),
        'method' => 'GET'
    ]);
    exit;
}

// Only allow POST requests for logging
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed', 'allowed' => 'POST, OPTIONS, GET']);
    exit;
}

try {
    // Database configuration
    $host = 'localhost';
    $dbname = 'phpmyadmin';
    $username = 'jzheng';
    $password = 'jz72903';
    
    // Create PDO connection
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]);
    
    // Get the POST data
    $input = json_decode(file_get_contents('php://input'), true);
    
    // Validate that this is a Brave user log request
    if (!isset($input['action']) || $input['action'] !== 'log_brave_user') {
        throw new Exception('Invalid request');
    }
    
    // Get current timestamp in EST timezone (MySQL format)
    $currentDateTime = date('Y-m-d H:i:s');
    
    // Prepare and execute the INSERT statement
    $stmt = $pdo->prepare("INSERT INTO `happyfamily` (`date`) VALUES (?)");
    $stmt->execute([$currentDateTime]);
    
    // Get the inserted ID
    $insertedId = $pdo->lastInsertId();
    
    // Log additional info for debugging
    error_log("Brave user logged - ID: $insertedId, Date: $currentDateTime (EST), UserAgent: " . ($input['userAgent'] ?? 'Unknown'));
    
    // Return success response
    echo json_encode([
        'success' => true,
        'id' => $insertedId,
        'date' => $currentDateTime,
        'timezone' => date_default_timezone_get(),
        'message' => 'Brave user logged successfully'
    ]);
    
} catch (PDOException $e) {
    // Database error
    http_response_code(500);
    echo json_encode([
        'error' => 'Database error',
        'message' => 'Failed to connect to database'
    ]);
    error_log("Database error in Brave logging: " . $e->getMessage());
} catch (Exception $e) {
    // General error
    http_response_code(500);
    echo json_encode([
        'error' => 'Server error',
        'message' => $e->getMessage()
    ]);
    error_log("Error in Brave logging: " . $e->getMessage());
}
?>