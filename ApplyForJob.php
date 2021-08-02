<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../../Db/db.php';
    include_once '../../Admin/Models/Hiring.php';
    
    $db = new dbConnection();
    $Hiring = new Hiring($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    $Hiring->job_id = $data->job_id;

    $Hiring->Post();
    echo json_encode("ok");

    return json_encode("ok");
