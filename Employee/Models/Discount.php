<?php

class Discount{
    private $conn;
    private $table = "discounts";

    public $id;
    public $discount;
    public $promo_code;


    public function __construct($db)
    {
        $this->conn = $db;
    }

    public function Get(){
        $query = "Select * from ".$this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

}