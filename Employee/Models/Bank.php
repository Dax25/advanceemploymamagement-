<?php
 if(!isset($_SESSION)) 
 { 
     session_start(); 
 } 
class Bank{
    private $conn;
    private $table="bank";

    public int $id;
    public string $bank_name;
    public string $typeofaccount;
    public string $transit_number;
    public string $institude_number;
    public string $account_no;
    public int $user_id ;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Get()
    {
        $query = "Select * from ".$this->table." where user_id = ".$_SESSION["id"];
        $stmt= $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function Update()
    {
        $query = "UPDATE ".$this->table." Set bank_name = :bank_name,typeofaccount = :typeofaccount ,
         transit_number=:transit_number,institude_number=:institude_number,account_no = :account_no where user_id = ".$_SESSION["id"];
        $data = [
            "bank_name"=>$this->bank_name,
            "typeofaccount"=>$this->typeofaccount,
            "transit_number" => $this->transit_number,
            "institude_number" => $this->institude_number,
            "account_no" => $this->account_no
        ];
        $stmt= $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }

}