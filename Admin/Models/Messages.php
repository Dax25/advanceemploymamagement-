<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
class Message{
    private $conn;
    private $table="message";


    public int $id;
    public string $message;
    public string $message_from;
    public int $user_id;

    public function __construct($db) {
        $this->conn = $db;
    }
    
    public function SendMessage()
    {
        $query="Insert into ".$this->table.'(message,message_from,user_id) Values(:message,:message_from,:user_id)';
        $data = [
            "message"=>$this->message,
            "message_from"=>$this->message_from,
            "user_id"=>$this->user_id
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function GetMessages(){
        $query = "Select * from ".$this->table." where user_id = ".$_SESSION['id'];
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}