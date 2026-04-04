<?php
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

// 5. Validación de reCAPTCHA
// NOTA: Para Hostinger, puedes establecer RECAPTCHA_SECRET_KEY en las variables de entorno o bien usar putenv() en un archivo seguro no expuesto.
$recaptchaSecret = getenv('EROGOWORK_RECAPTCHA_SECRET_KEY');

if (!$recaptchaSecret) {
    // Si no logras poner variables de entorno en tu panel Hostinger, usa la siguiente línea solo sustituyendo tu SECRET KEY privado, y quita el `getenv` anterior. 
    // $recaptchaSecret = "TU_SECRET_KEY"; 
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error del servidor: Variable de clave secreta no configurada."]);
    exit;
}

// Hacer la petición a Google usando la llave Legacy SiteVerify que es compatible con Enterprise (devuelve score básico)
$verifyResponse = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . urlencode($recaptchaSecret) . "&response=" . urlencode($recaptchaToken));
$responseData = json_decode($verifyResponse);

if (!$responseData->success) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Verificación de reCAPTCHA fallida. Por favor, intenta de nuevo.", "details" => $responseData]);
    exit;
}

// IMPORTANTE: Un Score debajo de 0.5 es usualmente un bot para v3/Enterprise.
$score = isset($responseData->score) ? $responseData->score : 1.0;
if ($score < 0.5) {
    http_response_code(403);
    echo json_encode(["success" => false, "message" => "Tu solicitud fue marcada como sospechosa de spam por nuestros sistemas."]);
    exit;
}

// 6. Preparar el Email 
$toEmail = getenv('EROGOWORK_TO_EMAIL'); // <-- CAMBIAR POR EL CORREO DONDE QUIERES RECIBIR ESTO
$emailSubject = "NUEVO CONTACTO WEB: $subject";

$emailBody = "Has recibido una nueva solicitud desde la página web de Ergohome:\n\n";
$emailBody .= "======================================\n";
$emailBody .= "Nombre Completo: $name\n";
$emailBody .= "Email Corporativo: $email\n";
$emailBody .= "Asunto: $subject\n";
$emailBody .= "Mensaje:\n$message\n";
$emailBody .= "======================================\n";
$emailBody .= "Score de Confianza de Spam (Google): $score/1.0\n";

$headers = "From: webmaster@ergohome.cl\r\n"; // <-- CAMBIAR AL EMAIL ORIGEN EN HOSTINGER
$headers .= "Reply-To: $email\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// 7. Enviar y retornar éxito
$mailResult = mail($toEmail, $emailSubject, $emailBody, $headers);

if ($mailResult) {
    http_response_code(200);
    echo json_encode(["success" => true, "message" => "Formulario enviado exitosamente. Nos pondremos en contacto pronto."]);
}
else {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Error interno al enviar el correo. Por favor reintente más tarde."]);
}
?>