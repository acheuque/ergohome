<?php
require 'config.php';
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
    exit;
}

$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

$name = isset($data['name']) ? trim(filter_var($data['name'], FILTER_SANITIZE_STRING)) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$utm_source = isset($data['utm_source']) ? trim(filter_var($data['utm_source'], FILTER_SANITIZE_STRING)) : '';
$utm_medium = isset($data['utm_medium']) ? trim(filter_var($data['utm_medium'], FILTER_SANITIZE_STRING)) : '';
$utm_campaign = isset($data['utm_campaign']) ? trim(filter_var($data['utm_campaign'], FILTER_SANITIZE_STRING)) : '';
$utm_term = isset($data['utm_term']) ? trim(filter_var($data['utm_term'], FILTER_SANITIZE_STRING)) : '';
$utm_content = isset($data['utm_content']) ? trim(filter_var($data['utm_content'], FILTER_SANITIZE_STRING)) : '';
$referrer = isset($data['referrer']) ? trim(filter_var($data['referrer'], FILTER_SANITIZE_STRING)) : '';
$landing_page = isset($data['landing_page']) ? trim(filter_var($data['landing_page'], FILTER_SANITIZE_STRING)) : '';
$timestamp = date("Y-m-d H:i:s");

// Additional Legal & Technical Analytics
$ip_address = $_SERVER['REMOTE_ADDR'] ?? 'Desconocida';
$user_agent = $_SERVER['HTTP_USER_AGENT'] ?? 'Desconocido';
$consent_version = "v1.0-20260617";

if (empty($name) || empty($email)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El nombre y correo son obligatorios."]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El formato de correo no es válido."]);
    exit;
}

$recaptchaToken = isset($data['token']) ? $data['token'] : '';

if (empty($recaptchaToken)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Acción bloqueada: reCAPTCHA token faltante."]);
    exit;
}

$gcpApiKey = isset($EROGOWORK_RECAPTCHA_SECRET_KEY) ? $EROGOWORK_RECAPTCHA_SECRET_KEY : '';

if (!$gcpApiKey) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error del servidor: Variable de clave secreta no configurada."]);
    exit;
}

$projectId = "ergoworks";
$siteKey = "6LdUoaUsAAAAACta8oXLlYocvXcZw_rp41Q5jSbs"; // Tu llave pública

$url = "https://recaptchaenterprise.googleapis.com/v1/projects/" . urlencode($projectId) . "/assessments?key=" . urlencode($gcpApiKey);
$postData = json_encode([
    'event' => [
        'token' => $recaptchaToken,
        'siteKey' => $siteKey,
        'expectedAction' => 'LOGIN'
    ]
]);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, $postData);
$referrerURL = isset($EROGOWORK_DOMAIN_REFERRER) ? $EROGOWORK_DOMAIN_REFERRER : '';
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Referer: ' . $referrerURL
]);
$verifyResponse = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$responseData = json_decode($verifyResponse);

if ($httpCode !== 200 || !isset($responseData->tokenProperties->valid) || $responseData->tokenProperties->valid !== true) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Verificación de reCAPTCHA fallida. Por favor, intenta de nuevo."]);
    exit;
}

$score = isset($responseData->riskAnalysis->score) ? $responseData->riskAnalysis->score : 1.0;
if ($score < 0.5) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Tu solicitud fue marcada como sospechosa de spam por nuestros sistemas."]);
    exit;
}

// 1. Storage in CSV
$csvFile = (isset($EROGOHOME_CAMPAIGN_CSV_PATH) && !empty($EROGOHOME_CAMPAIGN_CSV_PATH))
    ? __DIR__ . $EROGOHOME_CAMPAIGN_CSV_PATH
    : __DIR__ . '/data/leads_logia.csv';

if (!is_dir(dirname($csvFile))) {
    mkdir(dirname($csvFile), 0755, true);
}

// Add header if file doesn't exist
$isNewFile = !file_exists($csvFile);
$fileHandle = fopen($csvFile, 'a');
if ($fileHandle) {
    if ($isNewFile) {
        fputcsv($fileHandle, ['Timestamp', 'Name', 'Email', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Term', 'UTM Content', 'Referrer', 'Landing Page', 'IP Address', 'User Agent', 'Consent Version', 'reCAPTCHA Score']);
    }
    fputcsv($fileHandle, [$timestamp, $name, $email, $utm_source, $utm_medium, $utm_campaign, $utm_term, $utm_content, $referrer, $landing_page, $ip_address, $user_agent, $consent_version, $score]);
    fclose($fileHandle);
}


// Require globals because they are defined in config.php mostly, but we need them inside function
// Wait, actually, require 'config.php' is done globally. So we shouldn't use "global" inside if they are defined in config.php using standard variable declarations. 
// A safer approach: get globals into local vars first since we're in the global scope right now.
$smtpUser = isset($EROGOHOME_SMTP_USER) ? $EROGOHOME_SMTP_USER : '';
$smtpPass = isset($EROGOHOME_SMTP_PASSWORD) ? $EROGOHOME_SMTP_PASSWORD : '';
$smtpName = isset($EROGOHOME_SMTP_NAME) ? $EROGOHOME_SMTP_NAME : 'Ergohome';
$adminEmail = isset($EROGOWORK_TO_EMAIL) ? $EROGOWORK_TO_EMAIL : '';

function sendEmailSafe($subject, $body, $recipientEmail, $recipientName, $smtpUser, $smtpPass, $smtpName)
{
    if (!$smtpUser || !$smtpPass)
        return false;
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->CharSet = 'UTF-8';
        $mail->setFrom($smtpUser, $smtpName);
        $mail->addAddress($recipientEmail, $recipientName);

        $mail->isHTML(false);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        return true;
    }
    catch (Exception $e) {
        error_log("PHPMailer Exception: " . $e->getMessage());
        return false;
    }
}

// Envío a Administración
$internalSubject = "NUEVO LEAD DE CAMPAÑA: Logia Printable ($name)";
$internalBody = "Has recibido un nuevo lead desde la campaña Logia Printable:\n\n";
$internalBody .= "Fecha: $timestamp\n";
$internalBody .= "Nombre: $name\n";
$internalBody .= "Email: $email\n";
$internalBody .= "Source: $utm_source\n";
$internalBody .= "Medium: $utm_medium\n";
$internalBody .= "Campaign: $utm_campaign\n";
$internalBody .= "Content: $utm_content\n";
$internalBody .= "Referencia: $referrer\n";
$internalBody .= "Landing Page: $landing_page\n";

// sendEmailSafe($internalSubject, $internalBody, $adminEmail, "Contacto Ergohome", $smtpUser, $smtpPass, $smtpName);

// Envío a Usuario (Autoresponder)
$userSubject = "Tu imprimible gratuito: Construye tu propia logia";
$userBody = "Hola $name,\n\n";
$userBody .= "Gracias por tu interés en Ergohome y nuestra línea Ergo-logia.\n\n";
$userBody .= "Aquí tienes acceso a tu guía imprimible 'Construye tu propia logia'.\n";
$userBody .= "Puedes descargarla desde este enlace:\n";
$userBody .= "https://ergohome.cl/downloads/ergo-logia-printable.pdf\n\n";
$userBody .= "¡Esperamos que te sea de gran utilidad!\n\n";
$userBody .= "Saludos cordiales,\n";
$userBody .= "El equipo de Ergohome";

// sendEmailSafe($userSubject, $userBody, $email, $name, $smtpUser, $smtpPass, $smtpName);

http_response_code(200);
echo json_encode(["success" => true, "message" => "Lead guardado correctamente (envío cancelado)"]);
?>