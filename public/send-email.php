<?php
require 'config.php';

// /public/send-email.php
// Script de procesamiento del Formulario de Contacto para Hostinger (Plain PHP)

header('Content-Type: application/json');

// Permitir solicitudes solo si es un método POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Método no permitido."]);
    exit;
}

// Obtener la data enviada en formato JSON desde React (fetch api)
$inputJSON = file_get_contents('php://input');
$data = json_decode($inputJSON, true);

// 1. Obtener y sanitizar datos
$name = isset($data['name']) ? trim(filter_var($data['name'], FILTER_SANITIZE_STRING)) : '';
$email = isset($data['email']) ? trim(filter_var($data['email'], FILTER_SANITIZE_EMAIL)) : '';
$subject = isset($data['subject']) ? trim(filter_var($data['subject'], FILTER_SANITIZE_STRING)) : '';
$message = isset($data['message']) ? trim(filter_var($data['message'], FILTER_SANITIZE_STRING)) : '';
$recaptchaToken = isset($data['token']) ? $data['token'] : '';

// 2. Validación de campos obligatorios
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Todos los campos son obligatorios."]);
    exit;
}

// 3. Validación de correo válido
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El formato de correo no es válido."]);
    exit;
}

// 4. Validación de longitud máxima del mensaje (1500 caracteres)
if (strlen($message) > 1500) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "El mensaje ha superado el límite de 1500 caracteres."]);
    exit;
}

if (empty($recaptchaToken)) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Acción bloqueada: reCAPTCHA token faltante."]);
    exit;
}

// 5. Validación de reCAPTCHA Enterprise
// Para la versión Enterprise, el secret de backend en realidad es una "API Key" general de Google Cloud Platform (GCP).
$gcpApiKey = $EROGOWORK_RECAPTCHA_SECRET_KEY;

if (!$gcpApiKey) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error del servidor: Variable de clave secreta no configurada."]);
    exit;
}

$projectId = "ergoworks";
$siteKey = "6LdUoaUsAAAAACta8oXLlYocvXcZw_rp41Q5jSbs"; // Tu llave pública

// Crear Petición POST a la API REST de Enterprise
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

$referrer = $EROGOWORK_DOMAIN_REFERRER;
// Enviamos el Referer manualmente para que pase tu restricción en Google Cloud
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Referer: ' . $referrer
]);
$verifyResponse = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

$responseData = json_decode($verifyResponse);

// Revisar si Google devolvió que el token NO es válido
if ($httpCode !== 200 || !isset($responseData->tokenProperties->valid) || $responseData->tokenProperties->valid !== true) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Verificación de reCAPTCHA fallida. Por favor, intenta de nuevo.", "details" => $responseData]);
    exit;
}

// IMPORTANTE: En Enterprise, el score está dentro de riskAnalysis
$score = isset($responseData->riskAnalysis->score) ? $responseData->riskAnalysis->score : 1.0;
if ($score < 0.5) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Tu solicitud fue marcada como sospechosa de spam por nuestros sistemas."]);
    exit;
}

// 6. Preparar el Email con PHPMailer
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.hostinger.com';
    $mail->SMTPAuth = true;
    $mail->Username = $EROGOHOME_SMTP_USER;
    $mail->Password = $EROGOHOME_SMTP_PASSWORD;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    $mail->CharSet = 'UTF-8';
    $mail->setFrom($EROGOHOME_SMTP_USER, $EROGOHOME_SMTP_NAME);
    $mail->addAddress($EROGOWORK_TO_EMAIL);

    $mail->isHTML(false);
    $mail->Subject = "NUEVO CONTACTO WEB ERGOHOME: $subject";

    $emailBody = "Has recibido una nueva solicitud desde la página web de Ergohome:\n\n";
    $emailBody .= "======================================\n";
    $emailBody .= "Nombre Completo: $name\n";
    $emailBody .= "Email Corporativo: $email\n";
    $emailBody .= "Asunto: $subject\n";
    $emailBody .= "Mensaje:\n$message\n";
    $emailBody .= "======================================\n";
    $emailBody .= "Score de Confianza de Spam (Google): $score/1.0\n";

    $mail->Body = $emailBody;

    // 7. Enviar y retornar éxito
    $mail->send();
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Formulario enviado exitosamente. Nos pondremos en contacto pronto."]);
}
catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error interno al enviar el correo: {$mail->ErrorInfo}"]);
}
?>