<?php
      if(!isset($_SESSION)) 
      { 
          session_start(); 
      } 
class Notification{
    private $conn;
    private $table="notifications";


    public int $id;
    public string $notification;
    public int $user_id;
    public string $status;
    public string $notification_type;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Post(){
        $query = "Insert into ".$this->table."(notification,user_id,status,notification_type) Values(:notification,:user_id,:status,:notification_type)";
        $data = [
            "notification"=>$this->notification,
            "user_id"=>$this->user_id,
            "status"=>"New",
            "notification_type"=>$this->notification_type
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Get(){
        $query = "Select * from ".$this->table." where user_id = :user_id";
        $data = [
            "user_id"=>$_SESSION['id']
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function GetNew(){
        $query = "Select * from ".$this->table." where user_id = :user_id and status='New'";
        $data = [
            "user_id"=>$_SESSION['id']
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function SetOld(){
        $query = "UPDATE ".$this->table." set status = 'Old' where id = :id";
        $data = [
            "id"=>$this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
}