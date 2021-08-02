<?php
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 } 
class Complain{
    private $conn;
    private $table = "complains";

    public int $id;
    public string $complain_for;
    public string $complain;
    public int $user_id;

    public function __construct($db){
        $this->conn = $db;
    }

    public function Post()
    {
        $query = "INSERT into ".$this->table." (complain_for,complain,user_id) VALUES (:complain_for,:complain,:user_id)";
        $data = [
            "complain_for" =>$this->complain_for,
            "complain" => $this->complain,
            "user_id" => $_SESSION["id"]
        ];
        $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);
    }
}