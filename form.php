<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;


require 'vendor/phpmailer/phpmailer/src/Exception.php';
require 'vendor/phpmailer/phpmailer/src/PHPMailer.php';
require 'vendor/phpmailer/phpmailer/src/SMTP.php';

// Include autoload.php file
require 'vendor/autoload.php';
// Create object of PHPMailer class
$mail = new PHPMailer(true);

$output = '';

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

<<<<<<< HEAD
    try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    // Gmail ID which you want to use as SMTP server
    $mail->Username = 'learndevsho@gmail.com';
    // Gmail Password
    $mail->Password = 'learnDev$250@144PNew';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    // Email ID from which you want to send the email
    $mail->setFrom('learndevsho@gmail.com');
    // Recipient Email ID where you want to receive emails
    $mail->addAddress('elhaibsoufian@gmail.com');

    $mail->isHTML(true);
    $mail->Subject = $subject;
    $mail->Body = "<h3>Name : $name <br>Email : $email <br>Message : $message</h3>";

    $mail->send();
    header("location: index.php#contact");

    $output = '<div class="alert alert-success">
                <h5>Thankyou! for contacting us, We\'ll get back to you soon!</h5>
                </div>';
=======
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            // Gmail ID which you want to use as SMTP server
            $mail->Username = 'learndevsho@gmail.com';
            // Gmail Password
            $mail->Password = 'learnDev$250@144PNew';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Email ID from which you want to send the email
            $mail->setFrom('learndevsho@gmail.com');
            // Recipient Email ID where you want to receive emails
            $mail->addAddress('elhaibsoufian@gmail.com');

            $mail->isHTML(true);
            $mail->Subject = $subject;
            $mail->Body = "<h3>Name : $name <br>Email : $email <br>Message : $message</h3>";

            $mail->send();
            header("location: index.html#contact");

            $output = '<div class="alert alert-success">
                        <h5>Thankyou! for contacting us, We\'ll get back to you soon!</h5>
                        </div>';
                        
                        header("location: index.html#contact");
>>>>>>> 59f9ea04410f4d0a21486684d17ababa74f96de4
    } catch (Exception $e) {
    $output = '<div class="alert alert-danger">
                <h5>' . $e->getMessage() . '</h5>
                </div>';
    }
}

?>