<!DOCTYPE html>
<html lang="en">
<?php

    if(!isset($_SESSION)) 
    { 
        
        session_start();
        if(!isset($_SESSION["role"])){
           
            session_destroy();
            header("location:../Index.php");
        }
        if(isset($_POST['logout']) ){
            unset($_POST['logout']);
            session_destroy();
            header("location:../Index.php"); 
        }
        if(isset($_SESSION['role'])){
           
            if($_SESSION['role'] == "HR")
            {
                header("location:../Index.php");
            }
            if($_SESSION['role'] == "Admin"){
                header("location:../Index.php");
            }
        } 
    }
  
    
?>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="icon" href="https://ems.trialfire.net/favicon.jpeg">	
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@700&display=swap" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700&display=swap" rel="stylesheet">
    <title>Employee</title>
</head>

<body>
    <section class="header">
        <h3 style="display: flex;align-items: center;justify-content: space-between;width: 12.3rem;">
        <img src="../Logo.jpeg" style="height: 39px;" alt="Logo">
        <span>Employee Portal </span>
    </h3>
        <nav>
            <ul class="navbar-main-ul">
                <li class="navbar-main-li">Personal Info
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Update-Address">
                            <input type="checkbox" id="Update-Phone">
                            <input type="checkbox" id="Update-Email">
                            <input type="checkbox" id="Update-Availability">
                            <li class="navbar-sub-li"><label for="Update-Address">Update Address</label></li>
                            <li class="navbar-sub-li"><label for="Update-Phone"> Update Phone No.</label></li>
                            <li class="navbar-sub-li"><label for="Update-Email">Update Email Id</label></li>
                            <li class="navbar-sub-li"><label for="Update-Availability">Update Availability</label></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-main-li">My Time
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Mark-Presence">
                            <input type="checkbox" id="Previous-Attendance">
                            <input type="checkbox" id="Leave-Application">
                            <li class="navbar-sub-li"><label for="Mark-Presence">Mark Your Presence</label></li>
                            <li class="navbar-sub-li"><label for="Previous-Attendance">Previous Attendance</label></li>
                            <li class="navbar-sub-li"><label for="Leave-Application">Application Of Leave</label></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-main-li">My Pay
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Edit-Bank">
                            <input type="checkbox" id="Payroll">
                            <li class="navbar-sub-li"><label for="Edit-Bank">Edit Bank Info</label></li>
                            <li class="navbar-sub-li"><label for="Payroll">Payroll Information</label></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-main-li">My Target
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Current-Month-Target">
                            <input type="checkbox" id="Previous-Target">
                            <li class="navbar-sub-li"><label for="Current-Month-Target">Current Month Target</label></li>
                            <li class="navbar-sub-li"><label for="Previous-Target">Previous Target</label></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-main-li">My Benefits
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Company-Benifits">
                            <input type="checkbox" id="External-Benifits">
                            <li class="navbar-sub-li"><label for="Company-Benifits">Company Benifits</label></li>
                            <li class="navbar-sub-li"><label for="External-Benifits">External Benifits</label></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-main-li">Get Support
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Admin">
                            <input type="checkbox" id="HR">
                            <input type="checkbox" id="ViewMessages">
                            <input type="checkbox" id="Job">
                            <li class="navbar-sub-li"><label for="Admin">Admin</label></li>
                            <li class="navbar-sub-li"><label for="HR">HR</label></li>
                            <li class="navbar-sub-li"><label for="ViewMessages">View Message</label></li>
                            <li class="navbar-sub-li"><label for="Job">Apply For A Job</label></li>
                        </ul>
                    </div>
                </li>
                <li>
                   
                    <form action="" method="POST">
                    <input type="submit" name="logout" value="logout" class="btn" style="margin-top: 5%;padding: 0.3em 1em;background:transparent;border:none; font-weight: 400;">
                    </form>
                </li>
            </ul>
        </nav>
    </section>
    <div class="popup-address">
        <label for="Update-Address" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 2rem;height: fit-content;margin: 8vh;">
        <span class="formname">Update Address</span>
        <form action="" id="">
                <div class="form-div-popup" style="margin: 4px 0px;justify-content: space-between;">
                    <label for="" class="form-label-popup">Street Name</label>
                    <input type="text" id="StreetName" class="form-control-popup">
                    
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="StreetError">Street Name is required</span>
                <div class="form-div-popup" style="margin: 4px 0px;justify-content: space-between;">
                    <label for="" class="form-label-popup">Unit</label>
                    <input type="text" id="Unit" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="UnitError">Unit is required</span>
                <div class="form-div-popup" style="margin: 4px 0px;justify-content: space-between;">
                    <label for="" class="form-label-popup">City</label>
                    <input type="text" id="City" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="CityError">City is required</span>
                <div class="form-div-popup"  style="margin: 4px 0px;justify-content: space-between;">
                    <label for="" class="form-label-popup">Province</label>
                    <input type="text" id="Province" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="ProvinceError">Province is required</span>
                <div class="form-div-popup"  style="margin: 4px 0px;justify-content: space-between;">
                    <label for="" class="form-label-popup">Zip code</label>
                    <input type="text" id="ZipCode" class="form-control-popup" maxlength="6">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="ZipCodeError" >Zip code is required</span>
                <div style="margin: 4px 0px;">
                    <button class="btn" style="margin-top: 8%;" type="button" id="UpdateAddress">Update</button>
                </div>
            </form>
        </div>
        
    </div>
    
    <div class="popup-phone">
        <label for="Update-Phone" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Update Phone</span>
        <form action="">
            <div class="form-div-popup" style="margin: 4px 0px;justify-content: space-between;">
                <label class="form-label-popup"  for="">Phone</label>
                <input class="form-control-popup" id="Phone" type="text" maxlength="10">
            </div>
            <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="PhoneError" >Phone no. is required</span>
            <button class="btn" type="button" style="margin-top: 4%;" id="Phonebtn">Update</button>
        </form>
        </div>
        <div>
        </div>
    </div>
    <div class="popup-email">
        <label for="Update-Email" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Update Email</span>    
        <form action="">
                <div class="form-div-popup" style="margin: 4px 0px;">
                    <label class="form-label-popup" for="">Email</label>
                    <input class="form-control-popup" id="Email" type="Email">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="EmailError" >Email is required</span>
                <button class="btn" type="button" style="margin-top: 4%;" id="Emailbtn">Update</button>
            </form>
        </div>
        
    </div>
        
    <div class="popup-availability">
        <label for="Update-Availability" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 4vh;">
        <span class="formname" style="top:1px;">Update Availability</span>
        <form action="">
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Monday</label>
                <select name="" id="MondayFrom" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="MondayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Tuesday</label>
                <select name="" id="TuesdayFrom" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="TuesdayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Wednesday</label>
                <select name="" id="WednesdayFrom" style="width:8rem;margin-left: -31px;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="WednesdayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Thursday</label>
                <select name="" id="ThursdayFrom" style="width:8rem;margin-left:-5px;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="ThursdayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Friday</label>
                <select name="" id="FridayFrom" style="width:8rem;margin-left:23px;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="FridayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Saturday</label>
                <select name="" id="SaturdayFrom" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="SaturdayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <div class="form-div-popup" style="margin: 26px 0px;width:116%;">
                <label class="form-label-popup" for="">Sunday</label>
                <select name="" id="SundayFrom" style="width:8rem;margin-left:15px;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
                <span style="color: white;font-size:24px;">To</span>
                <select name="" id="SundayTo" style="width:8rem;" class="form-control-popup">
                <option value="12AM">12AM</option>
                <option value="01AM">01AM</option>
                <option value="02AM">02AM</option>
                <option value="03AM">03AM</option>
                <option value="04AM">04AM</option>
                <option value="05AM">05AM</option>
                <option value="06AM">06AM</option>
                <option value="07AM">07AM</option>
                <option value="08AM">08AM</option>
                <option value="09AM">09AM</option>
                <option value="10AM">10AM</option>
                <option value="11AM">11AM</option>
                <option value="12PM">12PM</option>
                
                <option value="01PM">01PM</option>
                <option value="02PM">02PM</option>
                <option value="03PM">03PM</option>
                <option value="04PM">04PM</option>
                <option value="05PM">05PM</option>
                <option value="06PM">06PM</option>
                <option value="07PM">07PM</option>
                <option value="08PM">08PM</option>
                <option value="09PM">09PM</option>
                <option value="10PM">10PM</option>
                <option value="11PM">11PM</option>
                </select>
            </div>
            <button class="btn" type="button" style="margin-top: 1%;" id="Availabilitybtn">Update</button>
        </form>
        </div>
    </div>
    <div class="popup-Marktime">
        <label for="Mark-Presence" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Mark Presence</span>
            <form action="">

                <button type="button" class="btn" id="ClockIn" style="margin-top: 1%;margin-bottom:2%;">Clock in</button>
                <button type="button" class="btn" id="ClockOut" style="margin-top: 1%;margin-bottom:2%;">Clock out</button>
            </form>
        </div>

    </div>
    <div class="popup-previousattendance" style="min-height: 185px; height: fit-content;">
        <label for="Previous-Attendance" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname" style="left:-215px">Update Previous Attendance</span>
            <div class="Notifications" id="PreviousAttendancetbl" style="padding-top:0px;color:white;margin: 55px;">
            
               
            </div>
        </div>
    </div>
    <div class="popup-leaveapplication">
        <label for="Leave-Application" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Apply For A Leave</span>
            <form action="">
            <div class="form-div-popup" style="margin: 4px 0px;">
                <label class="form-label-popup" for="">Date of leave from</label>
                <input class="form-control-popup" id="DateOfLeave_from" style="text-align:center;" type="date">
            </div>
            <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="DOLFError" >Date is required</span>

            <div class="form-div-popup" style="margin: 4px 0px;">
                <label class="form-label-popup" for="">Date of leave to</label>
                <input class="form-control-popup" id="DateOfLeave_to" style="text-align:center;" type="date">
            </div>
            <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="DOLTError" >Date is required</span>

            <div class="form-div-popup" style="margin: 4px 0px;">
                <label class="form-label-popup" for="">Date of leave to</label>
                <input class="form-control-popup" id="ReasonForLeave"  type="text" placeholder="Enter reason for leave">
            </div>
            <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="RFLError" >Reason is required</span>

                <button class="btn" type="button" id="LeaveApplicationbtn">Send Application</button>
            </form>
        </div>
        <div>
        </div>
    </div>
    <div class="popup-editbank" style="height:fit-content;">
        <label for="Edit-Bank" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Update Bank Details</span>    
        <form action="" id="Bank_Form">
                <input type="hidden" id="BankId">
                <div class="form-div-popup" style="margin: 0px 0px;">
                    <label for="" class="form-label-popup">Name of bank</label>
                    <input type="text" id="BankName" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="BankNameError" >Bank name is required</span>
                <div class="form-div-popup" style="margin-bottom:44px">
                    <label for="" class="form-label-popup">Type of account</label>
                    <select name="" id="TypeOfAccount" class="form-control-popup">
                        <option value="Savings">Savings</option>
                        <option value="Chequing">Chequing</option>
                    </select>
                </div>
                <div class="form-div-popup" style="margin: 0px 0px;">
                    <label for="" class="form-label-popup">Transit Number</label>
                    <input type="text" id="TransitNumber" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="TransitNumberError" >Transit number is required</span>
                <div class="form-div-popup" style="margin: 0px 0px;">
                    <label for="" class="form-label-popup">Institute number</label>
                    <input type="text" id="InstitudeNumber" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="InstituteNumberError" >Institute number is required</span>
                <div class="form-div-popup"  style="margin: -4px 0px;">
                    <label for="" class="form-label-popup">Account number</label>
                    <input type="text" id="AccountNumber" class="form-control-popup">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="AccountNumberError" >Account number is required</span>
                <div style="margin: 4px 0px;">
                    <button class="btn" type="button" style="margin-top: -1%;" id="Bankbtn">Update</button>
                </div>
            </form>
        </div>
    </div>
    <div class="popup-payroll">
        <label for="Payroll" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Bank details</span>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Bank Name:</label>
                <span class="form-label-popup" id="PayBankName">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Account no:</label>
                <span class="form-label-popup" id="PayAccNo">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Hourly wage:</label>
                <span class="form-label-popup" id="PayHourlyWage">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Type of work:</label>
                <span class="form-label-popup" id="PayTOW">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Current Hours:</label>
                <span class="form-label-popup" id="PayCH">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Tax:</label>
                <span class="form-label-popup" id="PayTax">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Total(Tax inc.):</label>
                <span class="form-label-popup" id="PayTotal">--</span>
            </div>
            <button type="button" class="btn" id="RequestPay">Request Paycheck</button>
        </div>
    </div>
    <div class="popup-monthtarget">
        <label for="Current-Month-Target" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Current Targets</span>
            <div class="Notifications" id="Targettbl" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-viewmessage">
        <label for="ViewMessages" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">View Messages</span>
            <div class="Notifications" id="Messagetbl" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-previoustarget">
        <label for="Previous-Target" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Previous Targets</span>
            <div class="Notifications" id="PreTargettbl" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-companybenifits">
        <label for="Company-Benifits" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
            <span class="formname">Company Discounts</span>
            <div class="Notifications" id="Discounts" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-externalbenifits">
        <label for="External-Benifits" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">External Discounts</span>
            <div class="Notifications" id="ExDiscounts"  style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-admin" style="height:fit-content;">
        <label for="Admin" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
            <span class="formname">Sent Complain</span>
            <form action="">
            <input type="hidden" id="TypeOfAdmin" value="Admin">
                <div class="form-div-popup"  style="margin: 4px 0px;">
                    <label for="" class="form-label-popup">Enter Complain</label>
                    <input type="text" name="" id="AdminComplain" class="form-control-popup" placeholder="Enter Message">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="AdminComplainError" >Message is required</span>
                <button type="button" class="btn" id="GetSupportAdmin">Send feedback</button>
            </form>
        </div>
    </div>
    <div class="popup-hr">
        <label for="HR" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
            <span class="formname">Sent Complain</span>
            <form action="">
                <input type="hidden" id="TypeOfHR" value="HR">
                <div class="form-div-popup"  style="margin: 4px 0px;">
                    <label for="" class="form-label-popup">Enter Complain</label>
                    <input type="text" name="" id="HRComplain" class="form-control-popup" placeholder="Enter Message">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="HRComplainError" >Message is required</span>

                <button type="button" class="btn" id="GetSupportHR">Send feedback</button>
            </form>
        </div>
    </div>
    <div class="popup-job">
        <label for="Job" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
            <span class="formname">Apply For A Job</span>
            <form action="">
               
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Select Job</label>
                    <select name="" id="JobList" class="form-control-popup">
            
                    </select>
                    
                </div>
                <div class="form-div-popup"  style="margin: 4px 0px;">
                    <label for="" class="form-label-popup">Description</label>
                    <span id="JobDescription" style="text-align: left;
    overflow: auto;
    border: 1px solid;
    line-height: 1.6rem;
    border-radius: 0.6rem;
    max-height: 9rem;
    color: #0F2A5F;
    font-weight: 550;
    width: 56%;"></span>
                </div>
                <button type="button" class="btn" id="ApplyJob">Apply</button>
            </form>
        </div>
    </div>
    <div class="dark-background">

    </div>
    <section class="main-section">
        <div class="sidebar">
            <h3 class="Notification-title">Notifications</h3>
            <div class="Notifications" id="Notifications">
               
            </div>
        </div>
        <div class="Target">
            <h3 class="Targets-title">Active Targets</h3>
            <div class="Targets" id="ActiveTargets">
            
            </div>
        </div>
        <div class="Popup-Noti">
            <span id="Notification_Popup">No new notification</span>
            
        </div>
    </section>
    <footer>
        Employee
    </footer>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="./main.js"></script>
    <script>
        
        if(sessionStorage.getItem("presence") == null)
        {
            sessionStorage.setItem("presence", "Clock Out");
            var presence = sessionStorage.getItem("presence");
        }
        else{
            var presence = sessionStorage.getItem("presence");
        }
        
        function Presence(){
            if(presence == 'Clock Out'){
            $('#ClockOut').attr('disabled',true);
            $('#ClockOut').addClass('disbled');
            $('#ClockIn').removeClass('disbled');
        }
            else{
                $('#ClockIn').attr('disabled',true);
                $('#ClockIn').addClass('disbled');
                $('#ClockOut').removeClass('disbled');
            }
            console.log(presence);
        }
        Presence();
        
        $('#ClockIn').click(()=>{
            console.log("CI");
            $('#ClockIn').attr('disabled',true);
            $('#ClockOut').attr('disabled',false);
            $('#ClockIn').addClass('disbled');
            $('#ClockOut').removeClass('disbled');
            $.ajax({
        url:'https://ems.trialfire.net/api/Employees/ClockIn.php',
        method:'POST',
        success: function (data){
            console.log(data);
            sessionStorage.setItem("presenceId", data[0].id);
            Phone.checked=false;
            Address.checked = false;
            Email.checked=false;
            Availability.checked=false;
            MarkPresence.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            HR.checked=false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
            sessionStorage.setItem("presence", "Clock In");
            presence = sessionStorage.getItem("presence");
            
            Presence();
        });
        $('#ClockOut').click(()=>{
            console.log("CO");
            
            $('#ClockOut').attr('disabled',true);
            $('#ClockIn').attr('disabled',false);
            $('#ClockOut').addClass('disbled');
            $('#ClockIn').removeClass('disbled');
            
            sessionStorage.setItem("presence", "Clock Out");
            presence = sessionStorage.getItem("presence");
            var obj = {
        Id: sessionStorage.getItem("presenceId")
    };
    console.log(obj);
    $.ajax({
        url:'https://ems.trialfire.net/api/Employees/ClockOut.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            console.log(data);
            Phone.checked=false;
            Address.checked = false;
            Email.checked=false;
            Availability.checked=false;
            MarkPresence.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            HR.checked=false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
            Presence();
        });

    </script>
</body>

</html>
