<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
class LeaveOfApplication{
    private $conn;
    private $table = 'leaveapplication';

    public $id;
    public $dateofleave_from;
    public $dateofleave_to;


    public function __construct($db)
    {
        $this->conn = $db;
    }


    public function leaveofapplication()
    {
        $query = 'INSERT into '.$this->table.'(dateofleave_from,dateofleave_to,approved,user_id) VALUES (:dateofleave_from,:dateofleave_to,:approved,:user_id)';
        $data = [
            'dateofleave_from' => $this->dateofleave_from,
            'dateofleave_to'=>$this->dateofleave_to, 
            'approved' => 0,
            'user_id'=>$_SESSION["id"]
        ];
         $stmt = $this->conn->prepare($query);
        return $stmt->execute($data);
    }
    public function GetLeaves(){
        $query ='Select * from '.$this->table.' where approved = 0';
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function ApproveLeave(){
        $query = 'UPDATE '.$this->table.' set approved = 1 where id = :id';
        $data = [
            'id'=>$this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function RejectLeave(){
        $query = 'UPDATE '.$this->table.' set approved = -1 where id = :id';
        $data = [
            'id'=>$this->id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
}

?>