
<?php
if(isset($_POST['submit'])){
  $name = $_POST['name'];
  $mailfrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "tj17908@bristol.ac.uk";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from ".$name.".\n\n".$message;
  mail($mailTo, $subject, $txt, $headers);
  header("location: index.php?mailsend");
}
?>
