<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../../Db/db.php';
    include_once '../../Admin/Models/Messages.php';
    
    $db = new dbConnection();
    $message = new Message($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    $message->message_from = $data->from;
    $message->message = $data->message;
    $message->user_id = $data->user_id;


    $message->SendMessage();
    echo json_encode("ok");

    return json_encode("ok");
