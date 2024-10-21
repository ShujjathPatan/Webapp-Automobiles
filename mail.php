<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $title = htmlspecialchars($_POST['title']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $to = "";  // Replace with your email address
        $subject = $title;
        $headers = "From: " . $email . "\r\n" . "Reply-To: " . $email . "\r\n";
        $email_body = "Name: $name\nEmail: $email\nSubject: $title\nMessage:\n$message";

        if (mail($to, $subject, $email_body, $headers)) {
            echo "Email sent successfully!";
        } else {
            echo "Failed to send email.";
        }
    } else {
        echo "Invalid email format.";
    }
} else {
    echo "Invalid request.";
}
?>
