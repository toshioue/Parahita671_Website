<?php
if(isset($_GET['submit'])){
$purpose = $_GET['purpose'];
$name = $_GET['name'];
$email = $_GET['email'];
$subj = $_GET['subject'];
$message =  $_GET['message'];
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
