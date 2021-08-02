<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');

include_once '../../Db/db.php';
include_once '../../HR/Models/Availability.php';

$db = new dbConnection();
$Availability = new Availability($db->connect());

$result = $Availability->Get();

$arr =  array();

foreach($result as $row)
{
    $item = array(
        'id' => $row['Id'],
        'user_id'=>$row['user_id'],
        'monday'=>$row['monday'],
        'tuesday'=>$row['tuesday'],
        'wednesday' =>$row['wednesday'],
        'thursday'=>$row['thursday'],
        'friday'=>$row['friday'],
        'saturday' =>$row['saturday'],
        'sunday'=>$row['sunday']
    );

    array_push($arr,$item);
}

echo json_encode($arr);
return $arr;