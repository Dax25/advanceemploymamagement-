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
    public $assigneddate;
    public string $active = "InActive";
    public string $completed = "InComplete";
    public $completiondate;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Post(){
        $query = "INSERT into ".$this->table."(target_desc,assigned_id,assigneddate,active,completed,completiondate) VALUES (:target_desc,:assigned_id,:assigneddate,:active,:completed,:completiondate)";
        $data = [
            "target_desc" =>$this->target_desc,
            "assigned_id" => $this->assigned_id,
            "assigneddate"=>$this->assigneddate,
            "active" => $this->active,
            "completed"=>$this->completed,
            "completiondate"=>$this->completiondate
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
        $query = "UPDATE ".$this->table." set completed = 'Complete', completiondate = :completiondate where id = :id";
        $data=[
            "completiondate"=>$this->completiondate,
            "id"=>$this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }

}