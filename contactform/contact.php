<?php
if(isset($_POST['submit'])){
$purpose = $_POST['purpose'];
$name = $_POST['name'];
$email = $_POST['email'];
$subj = $_POST['subject'];
$message =  $_POST['message'];
//$form = "From: $name \n Message: $message";
$form = "<!DOCTYPE html>
<html lang="">

<head>
 <meta charset='UTF-8'>
 <style>
 body {
   background-color: blue;

 }
 </style>
</head>
<body>
<p> From: $name \n Purpose: $purpose \n Message: $message </p>
</body>
</html>";
$recipient = "m204824@usna.edu";
$header = "From: $email \r\n";
mail($recipient, $subj, $form, $header) or die("Error Message not sent!");
echo "Your message has been sent;"

}
 ?>
