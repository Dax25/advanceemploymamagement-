<?php
if(!isset($_SESSION)){
    session_start();
}
class Availability{
    private $conn;
    private $table="availability";

    public int $Id;
    public int $user_id;
    public string $monday;
    public string $tuesday;
    public string $wednesday;
    public string $thursday;
    public string $friday;
    public string $saturday;
    public string $sunday;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Get(){
        $query = "SELECT * from ".$this->table." Where user_id = ".$_SESSION['id'];
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
    public function Put(){
        $query = "UPDATE ".$this->table." SET monday = :monday,tuesday = :tuesday,wednesday = :wednesday,thursday = :thursday,friday = :friday,saturday = :saturday,sunday = :sunday where user_id = ".$_SESSION['id'];
        $data = [
            'monday' => $this->monday,
            'tuesday' => $this->tuesday,
            'wednesday' =>$this->wednesday,
            'thursday' =>$this->thursday,
            'friday' =>$this->friday,
            'saturday' =>$this->saturday,
            'sunday' =>$this->sunday
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Post(){
        $query = "INSERT Into ".$this->table."(user_id,monday,tuesday,wednesday,thursday,friday,saturday,sunday) VALUES(:user_id,:monday,:tuesday,:wednesday,:thursday,:friday,:saturday,:sunday)";
        $data = [
            'user_id' =>$this->user_id,
            'monday' => $this->monday,
            'tuesday' => $this->tuesday,
            'wednesday' =>$this->wednesday,
            'thursday' =>$this->thursday,
            'friday' =>$this->friday,
            'saturday' =>$this->saturday,
            'sunday' =>$this->sunday
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;

    }

}