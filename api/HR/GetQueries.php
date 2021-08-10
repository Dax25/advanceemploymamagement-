<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');

include_once '../../Db/db.php';
include_once '../../HR/Models/Queries.php';
include_once '../../Employee/Models/Users.php';

$db = new dbConnection();
$queries = new Queries($db->connect());

$result = $queries->Getqueries();
$arr =  array();

foreach($result as $row)
{
    $item = array(
        'id' => $row['id'],
        'complain_for'=>$row['complain_for'],
        'complain'=>$row['complain'],
        'user_id'=>$row['user_id'],
    );

    array_push($arr,$item);
}


echo json_encode($arr);
return $arr;