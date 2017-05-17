<?php
require 'phpmailer/class.phpmailer.php';

$mail = new PHPMailer;

$mail->IsSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.live.com';  // Specify main and backup server
$mail->SMTPAuth = true;            // Enable SMTP authentication
$mail->Port = 587;
$mail->Username = 'kenneth_d91@hotmail.com';                            // SMTP username
$mail->Password = '?login4177';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable encryption, 'ssl' also accepted
$mail->IsHTML(true);
$mail->WordWrap = 50;

$mail->From = 'kenneth_d91@hotmail.com';
$mail->FromName = 'Website Contact Form';
$mail->AddAddress('unodostresquad@gmail.com', 'Kenneth Darmawan Lay');  // Add a recipient


$mail->Subject = 'Someone Contacted Thee';
$mail->Body    = 'How art <i>thou?</i>';

if(!$mail->Send()) {
   echo 'Message could not be sent.';
   echo 'Mailer Error: ' . $mail->ErrorInfo;
   exit;
}

echo 'Message has been sent';
?>