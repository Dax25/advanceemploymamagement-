<?php

class Queries{
    private $conn;
    private $table = "complains";

    public int $id;
    public string $complain_for;
    public string $complain;
    public int $user_id;


    public function __construct($db)
    {
        $this->conn = $db;    
    }
    public function Getqueries(){
        $query = "SELECT * from ".$this->table." where complain_for = 'HR'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}