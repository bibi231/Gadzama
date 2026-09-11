<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON input']);
    exit;
}

$email = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$source = isset($data['source']) ? strip_tags(trim($data['source'])) : 'website';

if (empty($email)) {
    http_response_code(400);
    echo json_encode(['error' => 'Email address is required.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid email address.']);
    exit;
}

// Store subscriber in a server-side CSV log
$logFile = __DIR__ . '/subscribers.csv';
$date = date('Y-m-d H:i:s');
$entry = sprintf("\"%s\",\"%s\",\"%s\"\n", $date, str_replace('"', '""', $email), str_replace('"', '""', $source));
$fileSaved = @file_put_contents($logFile, $entry, FILE_APPEND | LOCK_EX);

// Send notification email to the office
$to = 'info@gadzama.com';
$subject = 'New Newsletter Subscriber via Gadzama.com';
$body = "You have a new newsletter subscriber from gadzama.com.\n\n" .
        "Email: $email\n" .
        "Source: $source\n" .
        "Date: $date\n\n" .
        "This subscriber has also been saved to subscribers.csv on the server.";

$headers = "From: no-reply@gadzama.com\r\n";
$headers .= "Reply-To: $email\r\n";

$mailSent = @mail($to, $subject, $body, $headers);

if ($fileSaved !== false || $mailSent) {
    echo json_encode(['success' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Could not record subscription. Please contact info@gadzama.com directly.']);
}
