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
$utm_content = isset($data['utm_content']) ? trim(filter_var($data['utm_content'], FILTER_SANITIZE_STRING)) : '';
$referrer = isset($data['referrer']) ? trim(filter_var($data['referrer'], FILTER_SANITIZE_STRING)) : '';
$landing_page = isset($data['landing_page']) ? trim(filter_var($data['landing_page'], FILTER_SANITIZE_STRING)) : '';
$timestamp = date("Y-m-d H:i:s");

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

// 1. Storage in CSV
$csvFile = __DIR__ . '/data/leads_logia.csv';
// Create dir if doesn't exist
if (!is_dir(__DIR__ . '/data')) {
    mkdir(__DIR__ . '/data', 0755, true);
}
// Add header if file doesn't exist
$isNewFile = !file_exists($csvFile);
$fileHandle = fopen($csvFile, 'a');
if ($fileHandle) {
    if ($isNewFile) {
        fputcsv($fileHandle, ['Timestamp', 'Name', 'Email', 'UTM Source', 'UTM Medium', 'UTM Campaign', 'UTM Content', 'Referrer', 'Landing Page']);
    }
    fputcsv($fileHandle, [$timestamp, $name, $email, $utm_source, $utm_medium, $utm_campaign, $utm_content, $referrer, $landing_page]);
    fclose($fileHandle);
}

// 2. Email Setup (Internal & Autoresponder)
function sendEmail($subject, $body, $recipientEmail, $recipientName, $isHTML = false)
{
    global $EROGOHOME_SMTP_USER, $EROGOHOME_SMTP_PASSWORD, $EROGOHOME_SMTP_NAME;
    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.hostinger.com';
        $mail->SMTPAuth = true;
        // The sender configuration is taken from the imported required files in config.php
        $mail->Username = $EROGOHOME_SMTP_USER;
        $mail->Password = $EROGOHOME_SMTP_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port = 465;

        $mail->CharSet = 'UTF-8';
        $mail->setFrom($EROGOHOME_SMTP_USER, $EROGOHOME_SMTP_NAME);
        $mail->addAddress($recipientEmail, $recipientName);

        $mail->isHTML($isHTML);
        $mail->Subject = $subject;
        $mail->Body = $body;

        $mail->send();
        return true;
    }
    catch (Exception $e) {
        // En producción podemos imprimir ErrorInfo a un log seguro, por ahora retornamos falso.
        error_log($mail->ErrorInfo);
        return false;
    }
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

sendEmailSafe($internalSubject, $internalBody, $adminEmail, "Contacto Ergohome", $smtpUser, $smtpPass, $smtpName);

// Envío a Usuario (Autoresponder)
$userSubject = "Tu imprimible gratuito: Construye tu propia logia";
$userBody = "Hola $name,\n\n";
$userBody .= "Gracias por tu interés en Ergohome y nuestra línea Ergo-logía.\n\n";
$userBody .= "Aquí tienes acceso a tu guía imprimible 'Construye tu propia logia'.\n";
$userBody .= "Puedes descargarla en desde este enlace:\n";
$userBody .= "https://ergohome.cl/downloads/logia_printable.pdf\n\n";
$userBody .= "¡Esperamos que te sea de gran utilidad!\n\n";
$userBody .= "Saludos cordiales,\n";
$userBody .= "El equipo de Ergohome";

sendEmailSafe($userSubject, $userBody, $email, $name, $smtpUser, $smtpPass, $smtpName);

http_response_code(200);
echo json_encode(["success" => true, "message" => "Lead guardado y enviado"]);
?>
