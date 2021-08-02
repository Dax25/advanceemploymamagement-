<?php
     if(!isset($_SESSION)) 
     { 
         session_start(); 
     } 
    class Users{

        private $conn;
        private string $table = 'users';

        public int $id;
        public string $username;
        public string $password;
        public string $phone_no;
        public string $email;
        public string $availablity;
        public string $typeofuser;
        public string $firstname;
        public string $lastname;
        public $dateofbirth;
        public string $typeofid;
        public string $idnumber;
        public string $worktype;
        public int $hourlywage;


        public string $street_name;
        public string $unit;
        public string $city;
        public string $province;
        public string $zipcode;
        public int $user_id;
        
        public function __construct($db)
        {
            $this->conn = $db;
        }
        public function Get(){
            $query = 'Select * from '.$this->table.' where id='.$_SESSION["id"];
            $stmt =$this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
        public function GetAddress(){
            $query = 'Select * from address where user_id='.$_SESSION["id"];
            $stmt =$this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
        public function GetAll(){
            $query = 'Select * from '.$this->table.' where typeofuser = "Employee"';
            $stmt =$this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
        public function GetAllUsers(){
            $query = 'Select * from '.$this->table;
            $stmt =$this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
        public function GetAllHr(){
            $query = 'Select * from '.$this->table.' where typeofuser = "HR"';
            $stmt =$this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
        public function Post(){
            $query = 'INSERT into users(username,password,phone_no,email,availability,typeofuser,firstname,lastname,dateofbirth,typeofid,idnumber,worktype,hourlywage) VALUES(:username,:password,:phone_no,:email,:availability,:typeofuser,:firstname,:lastname,:dateofbirth,:typeofid,:idnumber,:worktype,:hourlywage)';
            $data = [
                'username' => $this->username,
                'password' => $this->password,
                'phone_no' =>$this->phone_no,
                'email' => $this->email,
                'availability'=>$this->availablity,
                'typeofuser'=>$this->typeofuser,
                'firstname'=>$this->firstname,
                'lastname'=>$this->lastname,
                'dateofbirth'=>$this->dateofbirth,
                'typeofid'=>$this->typeofid,
                'idnumber'=>$this->idnumber,
                'worktype'=>$this->worktype,
                'hourlywage'=>$this->hourlywage
            ] ;
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $this->conn->lastInsertId();
        }
        public function UpdateUser(){
            $query = 'UPDATE '.$this->table.' SET firstname = :firstname,lastname = :lastname,username = :username where Id = :id';
            $data = [
                "firstname"=>$this->firstname,
                "lastname"=>$this->lastname,
                "username"=>$this->username,
                "id"=>$this->id
            ];
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $stmt;
        }
        public function UpdateCredential(){
            $query = 'UPDATE '.$this->table.' SET email = :email,password = :password where Id = :id';
            $data = [
                "email"=>$this->email,
                "password"=>$this->password,
                "id"=>$this->id
            ];
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $stmt;
        }
        public function DeleteUser(){
            $query = "DELETE from ".$this->table." where Id = :id";
            $data = [
                "id"=>$this->id
            ];
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);

            $query = "DELETE from availability where user_id = :id";
            $data = [
                "id"=>$this->id
            ];
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);

            $query = "DELETE from address where user_id = :id";
            $data = [
                "id"=>$this->id
            ];
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $stmt;
        }
        public function UpdateAddress()
        {
            $query = 'UPDATE address set street_name = :street_name,unit = :unit,city = :city,province = :province , zipcode = :zipcode where user_id = '.$_SESSION["id"];
            $data = [
                'street_name' => $this->street_name,
                'unit' => $this->unit,
                'city' => $this->city,
                'province'=> $this->province,
                'zipcode'=> $this->zipcode
            ];
            $stmt = $this->conn->prepare($query);
            return $stmt->execute($data);
        }
        public function AddAddress()
        {
            $query = 'Insert into address(street_name,unit,city,province,zipcode,user_id) values(:street_name,:unit,:city,:province,:zipcode,:user_id)';
            $data = [
                'street_name' => $this->street_name,
                'unit' => $this->unit,
                'city' => $this->city,
                'province'=> $this->province,
                'zipcode'=> $this->zipcode,
                'user_id'=>$this->user_id
            ];
            $stmt = $this->conn->prepare($query);
            return $stmt->execute($data);
        }
        public function UpdateEmail()
        {
            $query = 'UPDATE users set email = :email where id ='.$_SESSION["id"];
            $data = [
                'email' => $this->email
            ];
            $stmt = $this->conn->prepare($query);
            return $stmt->execute($data);
        }
        public function UpdateAvailability()
        {
            $query = 'UPDATE users set availability = :availability where id ='.$_SESSION["id"];
            $data = [
                'availability' => $this->availablity
            ];
            $stmt = $this->conn->prepare($query);
            return $stmt->execute($data);
        }
        public function UpdatePhone_no()
        {
            $query = 'UPDATE users set phone_no = :phone_no where id = '.$_SESSION["id"];
            $data = [
                'phone_no' => $this->phone_no
            ];
            $stmt = $this->conn->prepare($query);
            return $stmt->execute($data);
        }
        public function ChangeWage(){
            $query = 'UPDATE '.$this->table.' set hourlywage = :hourlywage where id = :id';
            $data = [
                "hourlywage" => $this->hourlywage,
                "id"=>$this->id
            ];
            $stmt = $this->conn->prepare($query);
            $stmt->execute($data);
            return $stmt;
        }
    }
    