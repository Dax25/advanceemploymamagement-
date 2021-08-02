<?php

if(!isset($_SESSION)){
    session_start();
}

class Task{
    private $conn;
    private $table = "target";

    public int $id;
    public string $target_desc;
    public int $assigned_id;
    public string $active = "InActive";
    public string $completed = "InComplete";

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Post(){
        $query = "INSERT into ".$this->table."(target_desc,assigned_id,active,completed) VALUES (:target_desc,:assigned_id,:active,:completed)";
        $data = [
            "target_desc" =>$this->target_desc,
            "assigned_id" => $this->assigned_id,
            "active" => $this->active,
            "completed"=>$this->completed
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Get(){
        $query =  "Select * from ".$this->table." where assigned_id = ".$_SESSION['id']." and completed = 'InComplete'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function GetCompleted(){
        $query =  "Select * from ".$this->table." where assigned_id = ".$_SESSION['id']." and completed = 'Complete'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function Activate(){
        $query = "UPDATE ".$this->table." SET active = :active  where id = :id";
        $data = [
            'active'=>"Active",
            'id'=> $this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Deactivate(){
        $query = "UPDATE ".$this->table." SET active = :active  where id = :id";
        $data = [
            'active'=>"InActive",
            'id'=> $this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Complete(){
        $query = "UPDATE ".$this->table." set completed = 'Complete' where id = :id";
        $data=[
            "id"=>$this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }

}