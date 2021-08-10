<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../../Db/db.php';
    include_once '../../Employee/Models/Presence.php';
    
    $db = new dbConnection();
    $Presence = new presence($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    $Presence->id = $data->id;
    


    $Presence->ApproveAttendance();
    echo json_encode("ok");

    return json_encode("ok");
