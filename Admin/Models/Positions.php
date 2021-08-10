<?php


class Positions{
    private $conn;
    private $table = "positions";

    public int $id;
    public int $user_id;
    public string $position;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Get(){
        $query = "Select * from ".$this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function Assign(){
        $query = "INSERT into ".$this->table."(user_id,position) VALUES (:user_id,:position)";
        $data = [
            "user_id" => $this->user_id,
            "position" =>$this->position
        ];
        $stmt= $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Change()
    {
        $query = "UPDATE ".$this->table." SET position = :position where id = :id";
        $data = [
            
            "position" =>$this->position,
            "id" => $this->id
        ];
        $stmt= $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }

}