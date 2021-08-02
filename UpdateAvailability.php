<?php

    header('Access-Control-Allow-Origin:*');
    header('Content-Type:application/json');
    header('Access-Control-Allow-Methods:POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../../Db/db.php';
    include_once '../../HR/Models/Availability.php';
    
    $db = new dbConnection();
    $Availability = new Availability($db->connect());

    $data = json_decode(file_get_contents("php://input"));

    $Availability->monday = $data->monday;
    $Availability->tuesday = $data->tuesday;
    $Availability->wednesday = $data->wednesday;
    $Availability->thursday = $data->thursday;
    $Availability->friday = $data->friday;
    $Availability->saturday = $data->saturday;
    $Availability->sunday = $data->sunday;

    $Availability->Put();
    echo json_encode("ok");

    return json_encode("ok");
