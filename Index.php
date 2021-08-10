<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="icon" href="https://ems.trialfire.net/favicon.jpeg">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap" rel="stylesheet">
    <title>Home</title>
</head>
<body>
    <?php 
       session_start();
        if(isset($_SESSION['role'])){
            if($_SESSION["role"] == "Employee"){
                header("location:./Employee/Index.php");
            }
            if($_SESSION["role"] == "HR"){
                header("location:./HR/Index.php");
            }
            if($_SESSION["role"] == "Admin"){
                header("location:./Admin/Index.php");
            }
        }
        
     ?>
    <section>
        <img src="./Logo.jpeg" style="height: 94vh;
    width: 111vw;
    /* position: relative; */
    top: 36px;
    left: -300px;
    border-radius: 31px;" alt="">
        
        <div class="main">
        <h2 style="margin: 13vh 0px 12vh 0px;
    font-size: 3rem;
    color: #252525;">Login</h2>
            <?php
                $Email = "";
                $password = "";
                $wrongPOU = "";
                if(isset($_POST["submit"])){
                    if(isset($_POST["Email"]) && $_POST["Email"] == ""){
                        $Email = "Enter Email";
                    }
                    if(isset($_POST["Password"]) && $_POST["Password"] == ""){
                        $password = "Enter Password";
                    }
                     
                     $conn = new PDO('mysql:host=global-db;dbname=ems_trialfire_net',"ems.trialfire.net-unv7k4","an3AGnqzVIlk");
                     try{
                        $conn = new PDO('mysql:host=global-db;dbname=ems_trialfire_net',"ems.trialfire.net-unv7k4","an3AGnqzVIlk");
                        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
                    }
                    catch(PDOException $p){
                        
                        echo $p;
                        
                    }
                    $query = 'Select * from users where email = "'.$_POST["Email"].'" and password = "'.$_POST["Password"].'"';
                    $stmt =$conn->prepare($query);
                    $result = $stmt->execute();
                    if($stmt->rowCount() > 0){
                        if(!isset($_SESSION["role"]) && !isset($_SESSION["email"])){
                            foreach($stmt as $row){
                                $_SESSION["id"] = $row["Id"];
                                $_SESSION["email"] = $row["email"];
                                $_SESSION["role"] = $row["typeofuser"];
                                if($_SESSION["role"] == "Employee"){
                                    header("location:./Employee/Index.php");
                                }
                                if($_SESSION["role"] == "HR"){
                                    header("location:./HR/Index.php");
                                }
                                if($_SESSION["role"] == "Admin"){
                                    header("location:./Admin/Index.php");
                                }
                            }    
                        }
                        
                    }
                    else{
                        if((isset($_POST["Email"]) && isset($_POST["Password"])) && ($_POST["Email"] != "" && $_POST["Password"] != "")){
                            $wrongPOU = "You have Entered wrong email or password";
                        }
                         
                    }
                    
                    
                }
            ?>
            <form action="" method="Post" >
                <span><?php echo $wrongPOU ?></span>
                <div class="form-group">
                        <label for="" >Email</label>
                        <input type="email" name="Email" id="Email" class="form-control" value="<?php echo isset($_POST['Email']) ? $_POST['Email']:"" ?>" >
                        <span style=" margin: 0px 8rem;"><?php echo $Email ?></span>
                </div>
                <div class="form-group">
                    <label for="">Password</label>
                    <input type="password" name="Password" class="form-control">
                    <span style=" margin: 0px 8rem;"><?php echo $password ?></span>
                </div>
                <button type="submit" name="submit" class="btn">Submit</button>
            </form>
        </div>
    </section>
    <script>
       var email = document.getElementById("Email");
        email.addEventListener("input",(e)=>{
                //e.target.value = e.target.value.substr(0,e.target.value.length-1)
                e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
                
        });
    </script>
</body>
</html>
