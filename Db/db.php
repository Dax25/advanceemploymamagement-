<?php

    class dbConnection{
        private string $host = 'global-db';
        private string $db_name = 'ems_trialfire_net';
        private string $username= 'ems.trialfire.net-unv7k4';
        private string $password = 'an3AGnqzVIlk';
        private  $conn;

        public function connect(){
            $this->conn = null;
            try{
                $this->conn = new PDO('mysql:host='.$this->host.';dbname='.$this->db_name,$this->username,$this->password);
                $this->conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
            }
            catch(PDOException $p){

            }
            return $this->conn;
        }
       
    }
?>
