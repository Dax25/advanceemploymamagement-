<?php
    if(!isset($_SESSION)) 
    { 
        session_start(); 
    } 
class Messages{
    private $conn;
    private $table="messages";


    public int $id;
    public string $message;
    public int $message_from;
    public string $message_for;

    public function __construct($db) {
        $this->conn = $db;
    }
    
    public function SendMessage()
    {
        $query="Insert into ".$this->table.'(message,message_from,message_for) Values(:message,:message_from,:message_for)';
        $data = [
            "message"=>$this->message,
            "message_from"=>$_SESSION['id'],
            "message_for"=>$this->message_for
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
}