<?php
header('Content-Type: application/json');

require "./PHPMailer/src/PHPMailer.php"; 
require "./PHPMailer/src/SMTP.php"; 
require './PHPMailer/src/Exception.php'; 

$url = parse_url($_SERVER["HTTP_REFERER"]);

if($_SERVER["REQUEST_METHOD"] === 'POST' && $url["host"] == $_SERVER["HTTP_HOST"]) {
    $ret = array(
        "ok" => 0,
        "message" => ""
    );
    
    $params = $_POST;
    $required_inputs = array(
        'name',
        'phone',
        'email',
        'subject',
        'message'
    );
    foreach ($params as $key=>$value){
        if(in_array($key, $required_inputs) && empty($value)){
            $ret["message"] = '（※）Please check the field';
        }
    }
    
    if (!filter_var($params["email"], FILTER_VALIDATE_EMAIL)) {
        $ret["message"] = 'the email is incorrect.';
    }
    
    if(empty($ret["message"])){
        $body = "Dear ".$params["name"]." <br /><br />
            Thank you for contacting me.<br />
            I have received your inquiry with the following information:<br /><br />
            ------------------------------------------<br />
            <table border='0' cellpadding='4' cellspacing='5' style='text-align: left;'>
                <tbody>
                    <tr>
                        <th>Your name</th>
                        <td>: ".$params["name"]."</td>
                    </tr>
                    <tr>
                        <th>Telephone number</th>
                        <td>: ".$params["phone"]."</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>: ".$params["email"]."</td>
                    </tr>
                    <tr>
                        <th>Subject</th>
                        <td>: ".$params["subject"]."</td>
                    </tr>
                    <tr>
                        <th style='vertical-align: top;'>Your message</th>
                        <td style='white-space: pre-wrap;'>: ".$params["message"]."</td>
                    </tr>
                </tbody>
            </table>
            ------------------------------------------<br /><br />
            I will contact you as soon as possible.<br /><br />

            ================================<br />
            Akira Ht. <br />
            Email: sonlh89@gmail.com<br />
            Web: https://akiraht.id.vn<br />
            TEL: 084.779.3566<br />
            ================================<br />
        ";

        $body2 = "
            We received your inquiry from our website.<br />
            Please respond by phone or email within 1-3 business days.<br /><br />
            ------------------------------------------<br />
            <table border='0' cellpadding='4' cellspacing='5' style='text-align: left;'>
                <tbody>
                    <tr>
                        <th>Your name</th>
                        <td>: ".$params["name"]."</td>
                    </tr>
                    <tr>
                        <th>Telephone number</th>
                        <td>: ".$params["phone"]."</td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>: ".$params["email"]."</td>
                    </tr>
                    <tr>
                        <th>Subject</th>
                        <td>: ".$params["subject"]."</td>
                    </tr>
                    <tr>
                        <th style='vertical-align: top;'>Your message</th>
                        <td style='white-space: pre-wrap;'>: ".$params["message"]."</td>
                    </tr>
                </tbody>
            </table>
            ------------------------------------------<br /><br />
        ";
        
        // Send email client
        $mail1 = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail1->SMTPDebug = 0;
        $mail1->isSMTP();
        $mail1->CharSet  = "utf-8";
        $mail1->Host = 'smtp.titan.email';
        $mail1->SMTPAuth = true;
        $mail1->Port = 465;
        $mail1->SMTPSecure = "ssl";
        $mail1->Username = "service@akiraht.id.vn";
        $mail1->Password = "Akira1705@S";
        
        $mail1->setFrom("service@akiraht.id.vn", "Akira Ht");
        $mail1->addAddress($params["email"]);
        $mail1->isHTML(true);
        $mail1->Subject = "I have received your inquiry.";
        $mail1->Body = $body1;

        // Send email me
        $mail2 = new PHPMailer\PHPMailer\PHPMailer(true);
        $mail2->SMTPDebug = 0;
        $mail2->isSMTP();
        $mail2->CharSet  = "utf-8";
        $mail2->Host = 'smtp.titan.email';
        $mail2->SMTPAuth = true;
        $mail2->Port = 465;
        $mail2->SMTPSecure = "ssl";
        $mail2->Username = "service@akiraht.id.vn";
        $mail2->Password = "Akira1705@S";
        
        $mail2->setFrom("service@akiraht.id.vn", "Akira Ht");
        $mail2->addAddress("service@akiraht.id.vn");
        $mail2->addCC('sweb1705@gmail.com');
        $mail2->isHTML(true);
        $mail2->Subject = "Clien contact";
        $mail2->Body = $body2;
        
        // Send both emails
        if(!$mail1->send() || !$mail2->send()) {
            $ret["message"] = "There was an error sending email.";
        } else {
            $ret["ok"] = 1;
        }
    }
    
    echo json_encode($ret);
    exit;
}
    
?>