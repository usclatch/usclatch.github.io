<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['major'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No Arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$major = strip_tags(htmlspecialchars($_POST['major']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'dgarry@usc.edu';
$email_subject = "LATCH Recruitment Interest Response From: $name";
$email_body = "User filled out the recruitment form with the following information.\n\n"."Name: $name\nEmail: $email_address\nMajor: $major\nGraduation Year: $message\nSearch Tag: F3SQ42KN";
$headers = "From: $email_address\n"; 
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;
?>
