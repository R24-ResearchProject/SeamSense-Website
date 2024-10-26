<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $first_name = htmlspecialchars($_POST['first_name']);
    $last_name = htmlspecialchars($_POST['last_name']);
    $email = htmlspecialchars($_POST['email']);
    $subject = htmlspecialchars($_POST['subject']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // SMTP server
        $mail->SMTPAuth = true;
        $mail->Username = '2024researchgroup066@gmail.com'; // Your Gmail address
        $mail->Password = 'Research_SEAMSENSE#2024'; // Your Gmail App Password
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Email headers and content
        $mail->setFrom($email, "$first_name $last_name");
        $mail->addAddress('kavindu.kasthu@gmail.com'); // Your receiving email address
        $mail->addReplyTo($email, "$first_name $last_name");

        $mail->Subject = $subject;
        $mail->Body    = "Name: $first_name $last_name\nEmail: $email\n\nMessage:\n$message";

        // Send email
        $mail->send();
        echo "<script>alert('Thank you, your message has been sent!'); window.location.href = 'index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Message could not be sent. Mailer Error: {$mail->ErrorInfo}');</script>";
    }
}
?>
