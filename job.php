<?php

class Job{
    private $conn;
    private $table = "jobs";


    public int $id;
    public string $job_title;
    public string $job_desc;


    public function __construct($db)
    {
        $this->conn = $db;
    }
    public function Post()
    {
        $query = "INSERT into ".$this->table."(job_title,job_desc) VALUES (:job_title,:job_desc)";
        $data = [
            "job_title"=>$this->job_title,
            "job_desc"=>$this->job_desc
        ];
        $stmt = $this->conn->prepare($query);
        $stmt->execute($data);
        return $stmt;
    }
    public function Get(){
        $query = "SELECT * from ".$this->table;
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;

    }
}