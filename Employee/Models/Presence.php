<?php

if(!isset($_SESSION)) 
{ 
    session_start(); 
} 
class presence{
    private $conn;
    private $table = "presence";

    public  $id;
    public $clock_in;
    public $clock_out;
    public $userid;


    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function ClockIn()
    {
        $user_id=$_SESSION['id'];
        $query = 'INSERT into '.$this->table.'(clock_in,clock_out,user_id) VALUES (:clock_in,:clock_out,:user_id)';
            $data = [
                'clock_in' => $this->clock_in,
                'clock_out' => $this->clock_out,
                'user_id' => $user_id,
                
            ] ;
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $this->conn->lastInsertId();
    }
    public function ClockOut()
    {
        
        $query = 'Update '.$this->table.' Set clock_out = :clock_out where id = '.$this->id;
            $data = [
                'clock_out' => $this->clock_out,
            ] ;
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $this->conn->lastInsertId();
    }
    public function PreviousAttendance()
    {
        $query = 'Select * from '.$this->table.' where clock_out is not null and user_id = '.$_SESSION["id"];
        $stmt =$this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function GetAttendance(){
        $query = 'Select * from '.$this->table.' where approved = 0';
        $stmt =$this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function ApproveAttendance(){
        $query = 'Update '.$this->table.' set approved = 1 where Id = :id';
        $data=[
            "id"=>$this->id
        ];
        $stmt =$this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
}
