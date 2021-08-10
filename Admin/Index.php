<!DOCTYPE html>
<html lang="en">

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
    <title>Admin</title>
</head>

<body>
<?php
    if(!isset($_SESSION)) 
    { 
        session_start();
        if(!isset($_SESSION["role"])){
            session_destroy();
            header("location:../Index.php");
        }
        if(isset($_POST['logout']) ){
            session_destroy();
            header("location:../Index.php"); 
           } 
           if(isset($_SESSION['role'])){
          
            if($_SESSION['role'] == "Employee")
            {
                header("location:../Index.php");
            }
            if($_SESSION['role'] == "HR"){
                header("location:../Index.php");
            }
        } 
    }
   
    ?>
   
    <section class="header">
    <h3 style="display: flex;align-items: center;justify-content: space-between;width: 11.3rem;">
        <img src="../Logo.jpeg" style="height: 39px;" alt="Logo">
        <span>Admin Portal </span>
    </h3>
        <nav>
            <ul class="navbar-main-ul">
                <li class="navbar-main-li">
                    <span>Personal info</span>
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="Update-Address">
                            <input type="checkbox" id="Update-Phone">
                            <input type="checkbox" id="Update-Email">
                            <li class="navbar-sub-li"><label for="Update-Address">Update Address</label></li>
                            <li class="navbar-sub-li"><label for="Update-Phone"> Update Phone No.</label></li>
                            <li class="navbar-sub-li"><label for="Update-Email">Update Email Id</label></li>
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
                
                <li class="navbar-main-li">Employees/HR
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="EmpLeaveRequest">
                            <input type="checkbox" id="IncrementEmpPay">
                            <input type="checkbox" id="HRTargets">
                            <input type="checkbox" id="PostAJob">
                            <li class="navbar-sub-li"><label for="EmpLeaveRequest">Approve Leave Request</label></li>
                            <li class="navbar-sub-li"><label for="IncrementEmpPay">Increment Employee Pay</label></li>
                            <li class="navbar-sub-li"><label for="HRTargets">Assign Targets To HR</label></li>
                            <li class="navbar-sub-li"><label for="PostAJob">Post a Job</label></li>
                        </ul>
                    </div>
                </li>
                <li class="navbar-main-li">Contact
                    <div class="dropdown">
                        <ul class="navbar-sub-ul">
                            <input type="checkbox" id="HR">
                            <input type="checkbox" id="Employee">
                            <input type="checkbox" id="ResolveQueries">
                            <li class="navbar-sub-li"><label for="HR">HR</label></li>
                            <li class="navbar-sub-li"><label for="Employee">Employee</label></li>
                            <li class="navbar-sub-li"><label for="ResolveQueries">View Queries</label></li>
                        </ul>
                    </div>
                </li>
                <li>
                   
                    <form action="" method="POST">
                    <input type="submit" name="logout" value="logout" class="btn" style="margin-top: 5%;padding: 0.3em 1em;background:transparent;border:none;font-weight:400;">
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
        <span class="formname">Bank Details</span>    
        <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Bank Name:</label>
                <span class="form-label-popup" id="PayBankName">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Account no:</label>
                <span class="form-label-popup" id="PayAccNo">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;">
                <label for="" class="form-label-popup">Salary:</label>
                <span class="form-label-popup" id="PayHourlyWage">--</span>
            </div>
            
        </div>
    </div>
    <div class="popup-companybenifits">
        <label for="Company-Benifits" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Company Benefits</span>
            <div class="Notifications" id="Discounts" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-externalbenifits">
        <label for="External-Benifits" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
            <span class="formname">External Benefits</span>
            <div class="Notifications" id="ExDiscounts" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-hr" style="height:fit-content;">
        <label for="HR" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Send Message</span>    
        <form action="">
                <input type="hidden" id="MessageHR" value="HR">
                <div class="form-div-popup"  style="margin: 4px 0px;">
                    <label for="" class="form-label-popup">Message</label>
                    <input type="text" name="" id="HRContact" class="form-control-popup" placeholder="Enter Message">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="HRMessageError" >Message is required</span>
                <button type="button" class="btn" id="ContactHR">Send Message</button>
            </form>
        </div>
    </div>
    <div class="popup-employee">
        <label for="Employee" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Send Message</span>    
        <form action="">
                <input type="hidden" id="MessageEmp" value="Employee">
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Employees</label>
                    <select name="" id="CompEmplist" class="form-control-popup">
                        
                    </select>
                </div>
                <div class="form-div-popup"  style="margin: 4px 0px;">
                    <label for="" class="form-label-popup">Message</label>
                    <input type="text" name="" id="EmpContact" class="form-control-popup" placeholder="Enter Message">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden" id="EmpMessageError" >Message is required</span>
                <button type="button" class="btn" id="ContactEmp">Send Message</button>
            </form>
        </div>
    </div>
    <div class="popup-empleavereq">
        <label for="EmpLeaveRequest" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Employee leave request</span>    
        <div class="Notifications" id="EmpLeaveReq" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>
    <div class="popup-incrementemppay">
        <label for="IncrementEmpPay" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Increase Employee's Pay</span>    
        <div class="Notifications" id="EmpPayList" style="padding-top:0px;color:white;">
            
            </div>
        </div>
    </div>
    
    <div class="popup-hrtargets">
        <label for="HRTargets" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Assign Targets To HR</span>    
        <form action="">
                  
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Employees</label>
                    <select name="" id="Emplist" class="form-control-popup">
                        
                    </select>
                </div>
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Task</label>
                    <input type="text" name="" id="Task" class="form-control-popup" placeholder="Enter a task">
                </div>  
                <span style="font-weight: bolder;display: block;color: #0F2A5F;font-size: 1.4rem;" id="TaskErr"></span>
                <button type="button" class="btn" id="AssignTarget">Assign Task</button>
            </form>
        </div>
    </div>
    <div class="popup-postajob">
        <label for="PostAJob" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Post A Job</span>    
        <form action="">
                  
                <div class="form-div-popup"  style="margin: 4px 0px;width: 108%;display: flex;align-items: center;justify-content: space-between;">
                    <label for="" class="form-label-popup">Job Title</label>
                    <input type="text" id="JobTitle" class="form-control-popup" placeholder="Enter Job Title">
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="JobTitleError">Job title is required</span>
                <div class="form-div-popup"  style="margin: 4px 0px;width: 108%;display: flex;align-items: center;justify-content: space-between;">
                    <label for="" class="form-label-popup">Job Description</label>
                    <textarea type="text" name="" id="JobDesc" style="width: 16rem;
    padding-left: 10px;
    border-radius: 1rem;
    max-height: 211px;
    font-size: 1.3rem;
    outline: none;" rows="4" placeholder="Enter Job Description"></textarea>
                </div>
                <span style="margin-left: 13rem;color: #0F2A5F;font-weight: 550;visibility:hidden;" id="JobDescError">Job Description is required</span>
                
                <button type="button" class="btn" style="margin-top: 4%;" id="PostJob">Post Job</button>
            </form>
        </div>
    </div>
    <input type="checkbox" id="AssignTeamLead">
    <div class="popup-assignteamlead">
        <label for="AssignTeamLead" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Assign Position</span>
        <form action="">
                  
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Name</label>
                    <input type="hidden" id="TeamleadPosId">
                    <span style="color: white;
                                 width: 100%;
                                 font-size: 1.5rem;
                                 text-align: center;" id="TeamLeadName">User</span>
                </div>
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Position</label>
                    <select name="PositionList" id="PositionList" class="form-control-popup">
                        <option value="Sales Associate">Sales Associate</option>
                        <option value="Customer representative">Customer representative</option>
                        <option value="HR">HR</option>
                    </select>
                </div>  
                <span style="font-weight: bolder;display: block;color: #00ffdc;font-size: 1.4rem;" id="TaskErr"></span>
                <button type="button" class="btn" id="AssignPosition">Assign Position</button>
            </form>
        </div>
    </div>
    

    <input type="checkbox" id="ChangeTeamLead">
    <div class="popup-changeteamlead">
        <label for="ChangeTeamLead" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Change Position</span>    
        <form action="">
                  
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup">Name</label>
                    <input type="hidden" id="TeamleadPosIdChange">
                    <span style="color: white;
                                 width: 100%;
                                 font-size: 1.5rem;
                                 text-align: center;" id="TeamLeadNameChange">User</span>
                </div>
                <div class="form-div-popup"  style="margin: 26px 0px;">
                    <label for="" class="form-label-popup" style="width:100%;text-align:left">Position</label>
                    <select name="PositionList" id="PositionListChange" style="width: 100%;" class="form-control-popup">
                        <option value="Sales Associate">Sales Associate</option>
                        <option value="Customer representative">Customer representative</option>
                        <option value="HR">HR</option>
                    </select>
                </div>  
                <span style="font-weight: bolder;display: block;color: #00ffdc;font-size: 1.4rem;" id="TaskErr"></span>
                <button type="button" class="btn" id="ChangePosition">Change Position</button>
            </form>
        </div>
    </div>
    <input type="checkbox" id="HiringDetails">
    <div class="popup-hiringdetails">
        <label for="HiringDetails" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Hiring Details</span>    
        <input type="hidden" id="ApprovalId">
        <input type="hidden" id="ApprovalUserId">
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup" style="width: 100%;text-align:left">Applicant Name:</label>
                <span class="form-label-popup" style="width: 100%;text-align:left" id="ApplicantName">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup" style="width: 100%;text-align:left">Job Title:</label>
                <span class="form-label-popup" style="width: 100%;text-align:left" id="Jobtitle">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup" style="width: 100%;text-align: left">Job Description:</label>
                <span class="form-label-popup" id="Jobdesc" style="    width: 100%;
    text-align: left;
    overflow: auto;
    color: #0F2A5F;
    line-height: 1.6rem;
    max-height: 9rem;
    border-radius: 0.6rem;
    border: 1px solid #0F2A5F;">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <button type="button" class="btn" style="margin-top: 6%;" id="ApproveRequest">Accept</button>
                <button type="button" class="btn" style="margin-top: 6%;" id="RejectRequest">Reject</button>
            </div>
        </div>
    </div>

    <div class="popup-resolvequeries">
        <label for="ResolveQueries" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">View Queries</span>     
        <div class="Notifications" id="ResolveQueriestbl" style="padding-top:0px;color:white;">
                
            </div>
        </div>
    </div>

    <input type="checkbox" id="LeaveRequestDetails">
    <div class="popup-leaverequestdetails">
        <label for="LeaveRequestDetails" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
        <span class="formname">Leave Request Details</span>   
        <input type="hidden" id="LeaveRequestId">
            <input type="hidden" id="LeaveUserId">
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup">Employee Name:</label>
                <span class="form-label-popup" id="LeaveRequestName">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup">From : </label>
                <span class="form-label-popup" id="DOLF">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup">To : </label>
                <span class="form-label-popup" id="DOLT">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup">Reason : </label>
                <span class="form-label-popup" id="RFL">--</span>
            </div>
           
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <button type="button" class="btn" style="margin-top: 6%;" id="ApproveLeaveRequest">Accept</button>
                <button type="button" class="btn" style="margin-top: 6%;" id="RejectLeaveRequest">Reject</button>
            </div>
        </div>
    </div>
    <input type="checkbox" id="EmpPayChange">
    <div class="popup-emppaychange">
        <label for="EmpPayChange" class="close" style="top: 17px;position: absolute;right: 31px;min-height: 23px;height: fit-content;">X</label>
        <div class="form-group-popup" style="line-height: 3rem;height: fit-content;margin: 8vh;">
            <input type="hidden" id="PayChangeId">
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup">Employee Name:</label>
                <span class="form-label-popup" id="PayChangeName">--</span>
            </div>
            <div class="form-div-popup" style="justify-content: space-between;margin:20px 0px;">
                <label for="" class="form-label-popup">Hourly Wage : </label>
                <input type="number" id="PayChangeWage" class="form-control-popup">
            </div>
           
            <div class="form-div-popup" style="justify-content: center;margin:20px 0px;">
                <button type="button" class="btn" style="margin-top: 6%;" id="ChangePayBtn">Change</button>
            </div>
        </div>
    </div>
    <div class="dark-background">
    
    </div>
    <section class="main-section">
        <div class="sidebar">
            <h3 class="Notification-title">Employee Management</h3>
            <div class="Notifications" id="EmployeeRequest">
                
            </div>
        </div>
        <div class="Target">
            <h3 class="Targets-title">Team Lead Management</h3>
            <div class="Targets" id="TeamLeads" >
                <!-- <span>No Team Lead Available</span> -->

            </div>
        </div>
    </section>
    <footer>
        Admin Portal
    </footer>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <script src="./main.js"></script>
  
</body>

</html>
