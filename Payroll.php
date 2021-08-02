<?php
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 } 
class Payroll{
    private $conn;
    private $table = "paycheck";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Post(){
        $query = "INSERT into ".$this->table." (request_id) VALUES (:request_id)";
        $data = [
            'request_id' => $_SESSION['id']
        ];
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);

    }
}