<?php

$name = $_POST["name"];
$tel = $_POST["tel"];
$email = $_POST["email"];
$message = $_POST["message"];

$body = "";
$body .= "Nombre: ";
$body .= $name;
$body .= "<br>";
$body .= "Teléfono: ";
$body .= $tel;
$body .= "<br>";
$body .= "E-mail: ";
$body .= $email;
$body .= "<br>";
$body .= "Mensaje: ";
$body .= $message;
$body .= "<br>";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->isSMTP();
	$mail->Host = 'localhost';
	$mail->SMTPAuth = false;
	$mail->SMTPAutoTLS = false;
	$mail->Port = 25;

    //Recipients
    $mail->setFrom('programadorweb@colegioinglesplaya.com', $name);
    $mail->addAddress('admisiones@colegioinglestulum.com');     // Para Maugue
    $mail->addCC('antonio_caamal@colegioinglesplaya.com');     // Para Toño
    $mail->addCC('programadorweb@colegioinglesplaya.com');     // Para mí :v


    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Landing Colegio Inglés Tulum';
    $mail->Body    = $body;
    $mail->CharSet = 'UTF-8';
    $mail->send();
    echo 'success';
} catch (Exception $e) {
    echo "El mensaje no se pudo enviar. Mailer Error: {$mail->ErrorInfo}";
}