<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
class Hiring{
    private $conn;
    private $table="hiring";

    public int $id;
    public int $user_id;
    public int $job_id;
    public string $status = "Undecided";

    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function Post(){
        $query = "Insert into ".$this->table."(user_id,job_id,status) Values(:user_id,:job_id,:status)";
        $data=[
            "user_id"=>$_SESSION['id'],
            "job_id"=>$this->job_id,
            "status"=>$this->status
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Get(){
        $query = "SELECT * from ".$this->table." where status = 'Undecided'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function Approve(){
        $query = "Update ".$this->table." set status = 'Approved' where id = ".$this->id;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function Reject(){
        $query = "Update ".$this->table." set status = 'Rejected' where id = ".$this->id;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}