<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');

include_once '../../Db/db.php';
include_once '../../HR/Models/Queries.php';
include_once '../../Admin/Models/Messages.php';

$db = new dbConnection();
$Messages = new Message($db->connect());

$result = $Messages->GetMessages();
$arr =  array();

foreach($result as $row)
{
    $item = array(
        'id' => $row['id'],
        'message_from'=>$row['message_from'],
        'message'=>$row['message'],
        'user_id'=>$row['user_id'],
    );

    array_push($arr,$item);
}


echo json_encode($arr);
return $arr;