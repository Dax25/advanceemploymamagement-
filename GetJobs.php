<?php

header('Access-Control-Allow-Origin:*');
header('Content-Type:application/json');

include_once '../../Db/db.php';
include_once '../../Admin/Models/job.php';

$db = new dbConnection();
$job = new Job($db->connect());

$result = $job->Get();

$arr =  array();

foreach($result as $row)
{
    $item = array(
        'id' => $row['id'],
        'job_title'=>$row['job_title']
    );

    array_push($arr,$item);
}

echo json_encode($arr);
return $arr;