<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require "PHPMailer/src/Exception.php";
    require "PHPMailer/src/PHPMailer.php";

    $mail = new PHPMailer(true);
    $mail->CharSet = "UTF-8";
    $mail->IsHTML(true);

    $name = $_POST["name"];
    // // $email = $_POST["email"];
	$phone = $_POST["phone"];
    $message = $_POST["message"];

   
    $mail->addAddress("artemshilov75@gmail.com");  
	// $mail->setFrom($email);
    $mail->Subject = "[Заявка с формы]";

    $body = '<hi>Новое письмо</hi>'

    if(trim(!empty($name))){
        $body.='<p><strong>Имя:</strong> '.$name'</p>'
    }
    if(trim(!empty($phone))){
        $body.='<p><strong>Телефон:</strong> '.$phone'</p>'
    }
    if(trim(!empty($message))){
        $body.='<p><strong>Комментарий:</strong> '.$message'</p>'
    }

    if (!$mail->send()) {
        $message = "Ошибка отправки";
    } else {
        $message = "Данные отправлены!";
    }
	$response = ["message" => $message];

    header('Content-type: application/json');
    echo json_encode($response);
    
?>


