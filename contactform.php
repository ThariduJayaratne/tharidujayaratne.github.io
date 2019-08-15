<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];

  $email_from = 'tj17908@bristol.ac.uk';
  $email_subject = "New Form Submission";
  $email_body = "User Nmae: $name. \n".
                "User Email: $visitor_email.\n".
                "User Message: $message.\n";

$to = "tharidurandika@gmail.com";
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $vistor_email \r\n";
mail($to, $email_subject, $email_body, $headers);
header("location: contact.html");
?>
