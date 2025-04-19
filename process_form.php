<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Use correct 'name' attributes from the HTML form
    $name = $_POST["full-name"]; // Changed from 'name' to 'full-name'
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $service = $_POST["service-interest"]; // Changed from 'service' to 'service-interest'
    $message = $_POST["message"];
    
    // **Important:** Replace with your actual email address
    $to = "info@greenscapepro.com"; 
    $subject = "New Contact Form Submission from GreenScape Pro Website";
    
    // Construct email body
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Here are the details:\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Service Interest: $service\n\n";
    $body .= "Message:\n$message\n";
    
    // Construct headers
    $headers = "From: " . strip_tags($email) . "\r\n";
    $headers .= "Reply-To: " . strip_tags($email) . "\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Attempt to send the email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect to a thank you page on success
        // Make sure 'thank_you.html' exists
        header("Location: thank_you.html"); 
        exit; // Stop script execution after redirect
    } else {
        // Display an error message on failure
        // In a real application, provide more user-friendly feedback or logging
        echo "Message could not be sent. Please check your server's mail configuration or try again later.";
    }
} else {
    // Not a POST request, redirect back to the form or show an error
    // For simplicity, just echoing an error here
    echo "Invalid request method.";
}
?> 