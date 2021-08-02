
//Personal Information

const Address=document.querySelector('#Update-Address');
const Phone=document.querySelector('#Update-Phone');
const Email=document.querySelector('#Update-Email');
const Availability=document.querySelector('#Update-Availability');
//My Time
const MarkPresence=document.querySelector('#Mark-Presence');
const PreviousAttendance= document.querySelector('#Previous-Attendance');
const LeaveApplication = document.querySelector('#Leave-Application');
//My Pay
const EditBank = document.querySelector('#Edit-Bank');
const Payroll = document.querySelector('#Payroll');
//My Time
const CurrentMonthTarget =document.querySelector('#Current-Month-Target');
const PreviousTarget = document.querySelector('#Previous-Target')
//My Benifits
const CompanyBenifits = document.querySelector('#Company-Benifits');
const ExternalBenifits = document.querySelector('#External-Benifits');
//Contact
const Admin = document.querySelector('#Admin');
const Employee = document.querySelector('#Employee');
//Employees
const AddEditDelete = document.querySelector('#AddEditDelete');
const AddUser = document.querySelector('#AddUser');
const NewAddress = document.querySelector('#NewAddress');
const NewAvailability = document.querySelector('#NewAvailability');
const UpdateUsers = document.querySelector('#UpdateUser');
const EmployeeCredentials = document.querySelector('#EmployeeCredentials');
const LoginInfo = document.querySelector('#LoginInfo');
const EmployeePaystub = document.querySelector('#EmployeePaystub');
const EmployeeTarget = document.querySelector('#EmployeeTarget');
const EmployeeAttendance = document.querySelector('#EmployeeAttendance');
const EmployeeAvailability = document.querySelector('#EmployeeAvailability');
const ResolveQueries = document.querySelector('#ResolveQueries');


//For validation
const zipcode = document.querySelector('#ZipCode');
const newZipcode = document.querySelector('#NewZipCode');
const phoneNo = document.querySelector('#Phone');
const email = document.getElementById("Email");
const transitNumber = document.querySelector('#TransitNumber');
const institudeNumber = document.querySelector("#InstitudeNumber");
const accountNumber = document.querySelector("#AccountNumber");
const newPhone = document.querySelector("#NewPhone");
const newIdNumber= document.querySelector('#NewIdNumber');
const newEmail = document.querySelector('#NewEmail');
const loginEmail = document.querySelector('#LoginEmail');
zipcode.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
newZipcode.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});


phoneNo.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
newPhone.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
email.addEventListener("input",(e)=>{
        //e.target.value = e.target.value.substr(0,e.target.value.length-1)
        e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
        
});
newEmail.addEventListener("input",(e)=>{
        //e.target.value = e.target.value.substr(0,e.target.value.length-1)
        e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
        
});
loginEmail.addEventListener("input",(e)=>{
        //e.target.value = e.target.value.substr(0,e.target.value.length-1)
        e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
        
});
transitNumber.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
institudeNumber.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
accountNumber.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
newIdNumber.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});

//For the Popups

//It will check which option is selected then it will open the container for that option
var popup = function(){
    if(Address.checked)
    {
        document.querySelector('.popup-address').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:10%;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/GetAddress.php',
            method:'GET',
            success: function (data){
                $('#StreetName').val(data[0].street_name);
                $('#Unit').val(data[0].unit);
                $('#City').val(data[0].city);
                $('#Province').val(data[0].province);
                $('#ZipCode').val(data[0].zipcode);
            },
            error: function(e){
                
            }
        });
    }
    else{
        document.querySelector('.popup-address').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:10%;");
        
    }
    if(NewAddress.checked)
    {
        document.querySelector('.popup-newaddress').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:10%;");
        
    }
    else{
        document.querySelector('.popup-newaddress').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:10%;");
        
    }
    if(Phone.checked)
    {
        document.querySelector('.popup-phone').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/GetEmp.php',
            method:'GET',
            success: function (data){
                $('#Phone').val(data[0].phone_no);
            },
            error:function(e){
                console.log(e);
            }
        });
    }
    else{
        document.querySelector('.popup-phone').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    
    if(Email.checked)
    {
        document.querySelector('.popup-email').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/GetEmp.php',
            method:'GET',
            success: function (data){
            
                $('#Email').val(data[0].email);
            },
            error:function(e){
                console.log(e);
            }
        });
        
    }
    else{
        document.querySelector('.popup-email').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");
        
    }
    if(Availability.checked)
    {
        document.querySelector('.popup-availability').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:9%;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetAvailability.php',
            method:'GET',
            success: function (data){
                $("#MondayFrom").val(data[0].monday.substr(0,4));
                $("#MondayTo").val(data[0].monday.substr(8,10));
                $("#TuesdayFrom").val(data[0].tuesday.substr(0,4));
                $("#TuesdayTo").val(data[0].tuesday.substr(8,10));
                $("#WednesdayFrom").val(data[0].wednesday.substr(0,4));
                $("#WednesdayTo").val(data[0].wednesday.substr(8,10));
                $("#ThursdayFrom").val(data[0].thursday.substr(0,4));
                $("#ThursdayTo").val(data[0].thursday.substr(8,10));
                $("#FridayFrom").val(data[0].friday.substr(0,4));
                $("#FridayTo").val(data[0].friday.substr(8,10));
                $("#SaturdayFrom").val(data[0].saturday.substr(0,4));
                $("#SaturdayTo").val(data[0].saturday.substr(8,10));
                $("#SundayFrom").val(data[0].sunday.substr(0,4));
                $("#SundayTo").val(data[0].sunday.substr(8,10));
            },
            error:function(e){
                console.log(e);
            }
        });
    }
    else{
        document.querySelector('.popup-availability').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(MarkPresence.checked)
    {
        document.querySelector('.popup-Marktime').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-Marktime').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(NewAvailability.checked)
    {
        document.querySelector('.popup-newavailability').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-newavailability').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(PreviousAttendance.checked)
    {
        document.querySelector('.popup-previousattendance').setAttribute("style","opacity: 1;visibility: visible;min-height: 185px;height: fit-content;");
       
    }
    else{
        document.querySelector('.popup-previousattendance').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(LeaveApplication.checked)
    {
        document.querySelector('.popup-leaveapplication').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-leaveapplication').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(AddUser.checked)
    {
        document.querySelector('.popup-adduser').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:11%;");
       
    }
    else{
        document.querySelector('.popup-adduser').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:11%;");   
    }
    if(EditBank.checked)
    {
        document.querySelector('.popup-editbank').setAttribute("style","opacity:1;visibility: visible;height:fit-content; height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/GetBank.php',
            method:'GET',
            success: function (data){
                
                $('#BankId').val(data[0].id);
                $('#BankName').val(data[0].bank_name);
                $('#TypeOfAccount').val(data[0].typeofaccount);
                $('#TransitNumber').val(data[0].transit_number);
                $('#InstitudeNumber').val(data[0].institude_number);
                $('#AccountNumber').val(data[0].account_no);
                $('#RequestPay').removeClass('disbled');
            },
            error:function (e){
                
               
            }
        });
        
    }
    else{ 
        document.querySelector('.popup-editbank').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");  
        
    }
    if(Payroll.checked)
    {
        document.querySelector('.popup-payroll').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/Payroll.php',
            method:'GET',
            success: function (data){
                $('#RequestPay').attr('disabled',false);
                $('#RequestPay').removeClass('disbled');
                var totalhours = 0;
                document.querySelector('#PayBankName').textContent = data[0].bank_name;
                document.querySelector('#PayAccNo').textContent = data[0].account_no;
                document.querySelector('#PayHourlyWage').textContent = data[1].hourlywage;
                document.querySelector('#PayTOW').textContent = data[1].worktype;
                if(data[1].worktype == "Full")
                {
                    document.querySelector('#PayTax').textContent = "30%";
                }
                else{
                    document.querySelector('#PayTax').textContent = "18%";
                }
                
               
                data[2].forEach(e =>{
                    totalhours += parseInt(e.clock_out.split(':')[0].substr(11,13)) - parseInt(e.clock_in.split(':')[0].substr(11,13));
                });
                document.querySelector('#PayCH').textContent = totalhours;
                if(data[1].worktype == "Full")
                {
                    document.querySelector('#PayTotal').textContent =(parseFloat(data[1].hourlywage) * parseFloat(totalhours) ) -  (parseFloat(data[1].hourlywage) * parseFloat(totalhours))* 0.30 + "$";
                
                }
                else{
                    document.querySelector('#PayTotal').textContent = (parseFloat(data[1].hourlywage) * parseFloat(totalhours) ) - (parseFloat(data[1].hourlywage) * parseFloat(totalhours))* 0.18 + "$";
                
                }
                console.log(totalhours);
            },
            error:function(e){
                $('#RequestPay').attr('disabled',true);
                $('#RequestPay').addClass('disbled');
            }
        });
    }
    else{
        document.querySelector('.popup-payroll').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(CurrentMonthTarget.checked)
    {
        document.querySelector('.popup-monthtarget').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-monthtarget').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(PreviousTarget.checked)
    {
        document.querySelector('.popup-previoustarget').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        $('#PreTaskTbl').remove();
        $('#NoPreTarget').remove();
        var count = 0 ;
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetCompletedTask.php',
            method:'GET',
            success: function (data){
                console.log(data);
                if(data.lenght != 0){
                    var tablehr = `<table style="    width: 100%;
                    font-size: 17px;
                    margin: 29px 0px;
                    text-align: center;
                    color:#0F2A5F;
                    border-spacing: unset;
                    border: 1px solid;transition: .3s ease-in;" id="PreTaskTbl">
                <tr>
                <th style="border: 1px solid;font-weight:550">Target</th>
                
                </tr>
                `;
            data.forEach(element => {
                
                tablehr +=`
                <tr>
                <td style="border: 1px solid;font-weight:550">${element.target_desc}</td>
                </tr>`;

                count++;
            });
            tablehr +=`</table>`;
            if(count != 0){
                $('#PreTargettbl').append(tablehr);
            }
            else{
                var span = document.createElement('span');
                span.textContent = "No Previous Target Available";
                span.id="NoPreTarget";
                $('#PreTargettbl').append(span);
            }
        }
        else{
            var span = document.createElement('span');
            span.textContent = "No Previous Target Available";
            $('#PreTargettbl').append(span);
        }
        
    
                
            },
            error: function (error) {
                console.log(error);
                var span = document.createElement('span');
                span.textContent = "No Previous Target Available";
                $('#PreTargettbl').append(span);
            }
        });
   
   

    }
    else{
        document.querySelector('.popup-previoustarget').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(CompanyBenifits.checked)
    {
        document.querySelector('.popup-companybenifits').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/GetDiscounts.php',
            method:'GET',
            success: function (data){
                var count = 0;
                
                
                $('#NoDis').remove();
                if(data.lenght != 0){
                data.forEach(element=>{
                    if(element.type == "Company"){
                    var div = `<div style="display: flex;
                    justify-content: space-between;
                    width: 100%;
                    border-bottom: 1px solid #0F2A5F;
                    margin: 0px auto;
                    color:#0F2A5F;
                    padding: 0px 25px;
                    align-items: center;" class="TargetItems"><h1 style="font-size: 2rem;">${element.promo_code}</h1><span>${element.discount}</span></div>`;
                    $('#Discounts').append(div);
                    count++;
                } 
                   
                });
            }
            else{
                var span = document.createElement('span');
                span.textContent = "No discount available";
                span.id = "NoDis";
                $('#Discounts').append(span);
            }
            
            if(count == 0){
                var span = document.createElement('span');
                span.textContent = "No discount available";
                span.id = "NoDis";
                $('#Discounts').append(span);
            }
                
            },
            error:function (e){
                console.log(e);
                $("#NoDis").remove();
                var span = document.createElement('span');
                span.textContent = "No discount available";
                span.id = "NoDis";
                $('#Discounts').append(span);
            }
        });
    }
    else{
        document.querySelector('.popup-companybenifits').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(ExternalBenifits.checked)
    {
        document.querySelector('.popup-externalbenifits').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/GetDiscounts.php',
            method:'GET',
            success: function (data){
                var count = 0;
                
               
                $('#NoDis').remove();
                if(data.lenght != 0){
                data.forEach(element=>{
                    if(element.type == "External"){
                    var div = `<div style="display: flex;
                    justify-content: space-between;
                    width: 100%;
                    border-bottom: 1px solid #0F2A5F;
                    margin: 0px auto;
                    color:#0F2A5F;
                    padding: 0px 25px;
                    align-items: center;" class="TargetItems"><h1 style="font-size: 2rem;">${element.promo_code}</h1><span>${element.discount}</span></div>`;
                    $('#ExDiscounts').append(div);
                    count++;
                } 
                   
                });
            }
            else{
                var span = document.createElement('span');
                span.textContent = "No discount available";
                span.id = "NoDis";
                $('#ExDiscounts').append(span);
            }
            
            if(count == 0){
                var span = document.createElement('span');
                span.textContent = "No discount available";
                span.id = "NoDis";
                $('#ExDiscounts').append(span);
            }
                
            },
            error:function (e){
                console.log(e);
                $("#NoDis").remove();
                var span = document.createElement('span');
                span.textContent = "No discount available";
                span.id = "NoDis";
                $('#ExDiscounts').append(span);
            }
        });
    }
    else{
        document.querySelector('.popup-externalbenifits').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(Admin.checked)
    {
        document.querySelector('.popup-admin').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-admin').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(Employee.checked)
    {
        document.querySelector('.popup-employee').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-employee').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(AddEditDelete.checked)
    {
        document.querySelector('.popup-addemp').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetEmps.php',
            method:'GET',
            success: function (data){
                $('#EmpTbl').remove();
                if(data.lenght != 0){
                    var tablehr = `<table style="width: 100%;
                    font-size: 17px;
                    margin: 29px 0px;
                    text-align: center;
                    border-spacing: unset;
                    color:#0F2A5F;
                    border: 1px solid;" id="EmpTbl">
                <tr>
                  <th style="border: 1px solid;">Username</th>
                  <th style="border: 1px solid;">Actions</th>
                </tr>
                `;
            data.forEach(element => {
                var delbtn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background:#0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="DeleteUsers(${element.id})">Delete</button>`;

                var updatebtn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background:#0F2A5F;
                margin-right:8px;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="UpdateUser(${element.id})">Update</button>`;
                tablehr +=`
                <tr>
                  <td style="border: 1px solid;font-weight:550;">${element.username}</td>
                  <td style="border: 1px solid;font-weight:550;">${updatebtn}${delbtn}</td>
                </tr>`;
            });
            tablehr +=`</table>`;
            $('#Employeetbl').append(tablehr);
            }
       
        }
    });
    }
    else{
        document.querySelector('.popup-addemp').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(UpdateUsers.checked)
    {
        document.querySelector('.popup-updateuser').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;top:10%;");
       
    }
    else{
        document.querySelector('.popup-updateuser').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:10%;");   
    }
    if(EmployeeCredentials.checked)
    {
        document.querySelector('.popup-credentials').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetEmps.php',
            method:'GET',
            success: function (data){
                $('#LoginEmptbl').remove();
                if(data.lenght != 0){
                    var tablehr = `<table style="width: 100%;
                    font-size: 17px;
                    margin: 29px 0px;
                    color:#0F2A5F;
                    text-align: center;
                    border-spacing: unset;
                    border: 1px solid;" id="LoginEmptbl">
                <tr>
                  <th style="border: 1px solid;">Email</th>
                  <th style="border: 1px solid;">Password</th>
                  <th style="border: 1px solid;">Actions</th>
                </tr>
                `;
            data.forEach(element => {
            
                var btn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background:#0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="ChangeCredentials(${element.id})">Change</button>`;
                tablehr +=`
                <tr>
                  <td style="border: 1px solid;font-weight:550;">${element.email}</td>
                  <td style="border: 1px solid;font-weight:550;">${element.password}</td>
                  <td style="border: 1px solid;font-weight:550;">${btn}</td>
                </tr>`;
            });
            tablehr +=`</table>`;
            $('#LoginEmpTbl').append(tablehr);
            }
       
        }
    });
    }
    else{
        document.querySelector('.popup-credentials').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(LoginInfo.checked)
    {
        document.querySelector('.popup-logininfo').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-logininfo').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   

    }
    if(EmployeePaystub.checked)
    {
        document.querySelector('.popup-paystub').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-paystub').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(EmployeeTarget.checked)
    {
        document.querySelector('.popup-emptarget').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-emptarget').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(EmployeeAttendance.checked)
    {
        document.querySelector('.popup-empattendance').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetAttendance.php',
            method:'GET',
            success: function (data){
                console.log(data);
                $('#attendancetbl').remove();
                if(data.lenght != 0){
                    var tablehr = `<table style="width: 100%;
                    font-size: 17px;
                    margin: 29px 0px;
                    text-align: center;
                    color:#0F2A5F;
                    border-spacing: unset;
                    border: 1px solid;" id="attendancetbl">
                <tr>
                  <th style="border: 1px solid;">Username</th>
                  <th style="border: 1px solid;">Clock in</th>
                  <th style="border: 1px solid;">Clock out</th>
                  <th style="border: 1px solid;">Action</th>
                </tr>
                `;
            data.forEach(element => {
            
                var btn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background:#0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="ApproveAttendance(${element.id})">Approve</button>`;
                tablehr +=`
                <tr>
                  <td style="border: 1px solid;font-weight:550;">${element.username}</td>
                  <td style="border: 1px solid;font-weight:550;">${element.clock_in}</td>
                  <td style="border: 1px solid;font-weight:550;">${element.clock_out}</td>
                  <td style="border: 1px solid;">${btn}</td>
                </tr>`;
            });
            tablehr +=`</table>`;
            $('#AttendanceList').append(tablehr);
            }
            },
            error:function(e){
                console.log(e);
            }
    });
    }
    else{
        document.querySelector('.popup-empattendance').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(EmployeeAvailability.checked)
    {
        document.querySelector('.popup-empavailability').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-empavailability').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(ResolveQueries.checked)
    {
        document.querySelector('.popup-resolvequeries').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-resolvequeries').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(Address.checked || 
        Phone.checked || 
        Email.checked || 
        Availability.checked || 
        MarkPresence.checked ||
        NewAvailability.checked|| 
        PreviousAttendance.checked || 
        LeaveApplication.checked ||
        EditBank.checked||
        Payroll.checked||
        CurrentMonthTarget.checked||
        PreviousTarget.checked||
        CompanyBenifits.checked||
        ExternalBenifits.checked||
        Admin.checked ||
        Employee.checked||
        AddEditDelete.checked||
        EmployeeCredentials.checked||
        EmployeePaystub.checked||
        EmployeeTarget.checked||
        EmployeeAttendance.checked||
        EmployeeAvailability.checked||
        ResolveQueries.checked||
        UpdateUsers.checked||
        LoginInfo.checked||
        AddUser.checked||
        NewAddress.checked)
    {
        document.querySelector('.dark-background').setAttribute("style","opacity:0.5;visibility: visible;");
    }
    else{
        document.querySelector('.dark-background').setAttribute("style","opacity:0;visibility: hidden;");
    }
}

//Personal Information
Address.addEventListener('click',()=>{
    Phone.checked=false;
    Email.checked=false;
    Availability.checked=false;
    NewAvailability.checked = false;
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
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();

});
$('#UpdateAddress').click(()=>{
    var obj = {
        street_name: document.querySelector('#StreetName').value,
        unit: document.querySelector('#Unit').value,
        city: document.querySelector('#City').value,
        province: document.querySelector('#Province').value,
        zipcode: document.querySelector('#ZipCode').value,
    };
    console.log(obj);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/UpdateAddress.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
})
Phone.addEventListener('click',()=>{
    Address.checked = false;
    Email.checked = false;
    Availability.checked = false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    popup();

});
$('#Phonebtn').click(()=>{
    var obj = {
        phone_no: document.querySelector('#Phone').value
    };
    console.log(obj);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/UpdatePhone.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
})
Email.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Availability.checked = false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$('#Emailbtn').click(()=>{
    var obj = {
        email: document.querySelector('#Email').value
    };
    console.log(obj);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/UpdateEmail.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
})
Availability.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$('#Availabilitybtn').click(()=>{
    var obj = {
        monday: `${document.querySelector('#MondayFrom').value} to ${document.querySelector('#MondayTo').value}`,
        tuesday: `${document.querySelector('#TuesdayFrom').value} to ${document.querySelector('#TuesdayTo').value}`,
        wednesday: `${document.querySelector('#WednesdayFrom').value} to ${document.querySelector('#WednesdayTo').value}`,
        thursday: `${document.querySelector('#ThursdayFrom').value} to ${document.querySelector('#ThursdayTo').value}`,
        friday: `${document.querySelector('#FridayFrom').value} to ${document.querySelector('#FridayTo').value}`,
        saturday: `${document.querySelector('#SaturdayFrom').value} to ${document.querySelector('#SaturdayTo').value}`,
        sunday: `${document.querySelector('#SundayFrom').value} to ${document.querySelector('#SundayTo').value}`
    };
    console.log(obj);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/UpdateAvailability.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
})
//My Time
MarkPresence.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
PreviousAttendance.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$.ajax({
    url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/PreviousAttendance.php',
       method:'GET',
       success: function (data){
           if(data.lenght != 0){
               var tablehr = `<table style="width: 100%;
               font-size: 17px;
               margin: 29px 0px;
               color:#0F2A5F;
               text-align: center;
               border-spacing: unset;
               border: 1px solid;">
           <tr>
             <th style="border: 1px solid;">Clock In</th>
             <th style="border: 1px solid;">Clock Out</th>
           </tr>
           `;
       data.forEach(element => {
           
           tablehr +=`
           <tr>
             <td style="border: 1px solid;font-weight:550;">${element.clock_in}</td>
             <td style="border: 1px solid;font-weight:550;">${element.clock_out}</td>
           </tr>`;
       });
       tablehr +=`</table>`;
       $('#PreviousAttendancetbl').append(tablehr);
   }
   else{
       var span = document.createElement('span');
       span.textContent = "No Presence available";
       $('#PreviousAttendancetbl').append(span);
   }
},
error:function(e){
    var span = document.createElement('span');
    span.textContent = "No Presence available";
    $('#PreviousAttendancetbl').append(span);
}
});

LeaveApplication.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$('#LeaveApplicationbtn').click(()=>{
    
    var obj = {
        dateofleave_from: document.querySelector('#DateOfLeave_from').value,
        dateofleave_to: document.querySelector('#DateOfLeave_to').value
        
    };
    console.log(obj);
    
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/LeaveOfApplication.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            UpdateUsers.checked = false;
            ResolveQueries.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
})
EditBank.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});

$('#Bankbtn').click(()=>{
    var obj = {
        bank_name: document.querySelector('#BankName').value,
        transit_number: document.querySelector('#TransitNumber').value,
        typeofaccount: document.querySelector('#TypeOfAccount').value,
        institude_number: document.querySelector('#InstitudeNumber').value,
        account_no: document.querySelector('#AccountNumber').value,
    };
    console.log(obj);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/UpdateBank.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
});

CurrentMonthTarget.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
PreviousTarget.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    CurrentMonthTarget.checked=false;
    Payroll.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
Payroll.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});


CompanyBenifits.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
ExternalBenifits.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    Admin.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
Admin.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Employee.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$('#ContactAdmin').click(()=>{
    var obj ={
        message:$('#AdminContact').val(),
        for:"Admin"
    };
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Admin/SendMessage.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    
});
Employee.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    AddEditDelete.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$('#ContactEmp').click(()=>{
    var obj ={
        message:$('#EmpContact').val(),
        for:"Employee"
    };
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Admin/SendMessage.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    
});
AddEditDelete.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
UpdateUsers.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    AddEditDelete.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
function UpdateUser(id){
    UpdateUsers.click();
    console.log(id);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetEmps.php',
        method:'GET',
        success: function (data){
            data.forEach(element=>{
                if(element.id == id){
                    $('#UserID').val(element.id);
                    $('#FirstName').val(element.firstname);
                    $('#LastName').val(element.lastname);
                    $('#Username').val(element.username);
                }
            })
        }
    })
}
$('#UpdateUserInfo').click(()=>{
    var obj = {
        id:$('#UserID').val(),
        firstname:$('#FirstName').val(),
        lastname:$('#LastName').val(),
        username:$('#Username').val()
    }
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/UpdateUser.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    console.log(obj);
});
function DeleteUsers(id){
    var obj = {
        id:id
    }
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/DeleteUser.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    console.log(id);
}
EmployeeCredentials.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
LoginInfo.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    EmployeeCredentials.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
function ChangeCredentials(id){
    LoginInfo.click();
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetEmps.php',
        method:'GET',
        success: function (data){
            data.forEach(element=>{
                if(element.id == id){
                    $('#LoginID').val(element.id);
                    $('#LoginEmail').val(element.email);
                    $('#LoginPass').val(element.password);
                    
                }
            })
        }
    })
    console.log(id);
}
$('#UpdateLoginInfo').click(()=>{
    var obj = {
        id: $('#LoginID').val(),
        email:$('#LoginEmail').val(),
        password:$('#LoginPass').val()
    }
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/UpdateCredentials.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked = false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked = false;
            Employee.checked=false;
            AddEditDelete.checked =false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAttendance.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    console.log(obj);
});
EmployeePaystub.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
EmployeeTarget.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
$.ajax({
    url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetEmps.php',
    method:'GET',
    success: function (data){
        $('#GetSupportAdmin').attr('disabled',false);
        $('#GetSupportAdmin').removeClass('disbled');
        data.forEach(element =>{
            var option = document.createElement('option');
            option.textContent = element.username;
            option.value = element.id;

            $('#Emplist').append(option);
        });
    },
    error:function(e){
        $('#GetSupportAdmin').attr('disabled',true);
        $('#GetSupportAdmin').addClass('disbled');
    }
});
$('#GetSupportAdmin').click(()=>{
    
    if($('#Task').val() == ""){
        
        $('#TaskErr').text("No task was entered");
    }
    else{
        $('#TaskErr').text("");
        
        var obj = {
            target_desc : $('#Task').val(),
            assigned_id : $('#Emplist').val()
        };
        $.ajax({
            url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/AddTask.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                Availability.checked=false;
                MarkPresence.checked = false;
                NewAvailability.checked = false;
                PreviousAttendance.checked = false;
                LeaveApplication.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CurrentMonthTarget.checked=false;
                PreviousTarget.checked = false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                Admin.checked=false;
                Employee.checked =false;
                AddEditDelete.checked = false;
                EmployeeCredentials.checked = false;
                EmployeePaystub.checked = false;
                EmployeeTarget.checked = false;
                EmployeeAvailability.checked = false;
                ResolveQueries.checked = false;
                EmployeeAttendance.checked =false;
                UpdateUsers.checked = false;
                LoginInfo.checked = false;
                AddUser.checked = false;
                NewAddress.checked = false;
                popup();
            },
            error:function(e){
                console.error(e);
            }
        });
        $('#Emplist').val($("#Emplist").prop("selectedIndex", 0).val());
        $('#Task').val("");
    }
});
EmployeeAttendance.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
function ApproveAttendance(id){
    var obj = {
        id:id
    }
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/UpdateAttendance.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    console.log(id);
}
EmployeeAvailability.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    ResolveQueries.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});
ResolveQueries.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
    popup();
});

$.ajax({
    url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetQueries.php',
       method:'GET',
       success: function (data){
           if(data.lenght != 0){
               var tablehr = `<table style=" width: 100%;
               font-size: 17px;
               margin: 29px 0px;
               color:#0F2A5F;
               text-align: center;
               border-spacing: unset;
               border: 1px solid;">
           <tr>
             <th style="border: 1px solid;">Queries</th>
           </tr>
           `;
       data.forEach(element => {
           
           tablehr +=`
           <tr>
             <td style="border: 1px solid;font-weight:550">${element.complain}</td>
           </tr>`;
       });
       tablehr +=`</table>`;
       $('#ResolveQueriestbl').append(tablehr);
   }
   else{
       var span = document.createElement('span');
       span.textContent = "No queries available";
       $('#ResolveQueriestbl').append(span);
   }
},
error:function(e){
   var span = document.createElement('span');
       span.textContent = "No queries available";
       $('#ResolveQueriestbl').append(span);
}
});
function GetNotification(){
$.ajax({
    url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Admin/GetNotification.php',
    method:'GET',
    success: function (data){
        data.forEach(element=>{
            var div = `<div style="display: flex;
                    justify-content: space-between;
                    width: 100%;
                    border-bottom: 1px solid black;
                    margin: 0px auto;
                    align-items: center;" class="TargetItems"><h1 style="font-size: 1rem;color:#0F2A5F;text-align:left;width:100%;padding-left:10px;
                    margin: 20px auto;
                ">${element.notification}</h1></div>`;
                    $('#Notifications').append(div);
        });
        
        console.log(data);
    },
    error:function(e){
        console.log(e);
        
    }
});
}


function GetTask(){
    var targetCount =0;
    var count = 0 ;
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/GetTask.php',
        method:'GET',
        success: function (data){
            $('#NoActiveTarget').remove();
            if(data.lenght != 0){
                var tablehr = `<table style="    width: 100%;
                font-size: 17px;
                margin: 29px 0px;
                color:#0F2A5F;
                text-align: center;
                border-spacing: unset;
                border: 1px solid ;transition: .3s ease-in;" id="TaskTbl">
            <tr>
              <th style="border: 1px solid;">Target</th>
              <th style="border: 1px solid;">Status</th>
              <th style="border: 1px solid;">Action</th>
            </tr>
            `;
        data.forEach(element => {
            var btn = "";
            var combtn = "";
            if(element.active == "InActive"){
                btn = `<button type='button' style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background:#0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;'  onClick="ActivateTarget(${element.id})">Activate</button>`;
            }
            else{
                btn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background:#0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="DeactivateTarget(${element.id})">Deactivate</button>`;

                combtn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                margin-right:10px;
                border-radius: 0.5rem;
                background:#0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="CompleteTarget(${element.id})">Complete</button>`;

                var div = `<div style="display: flex;
                justify-content: space-between;
                width: 100%;
                border-bottom: 1px solid black;
                margin: 0px auto;
                color:#0F2A5F;
                padding: 0px 25px;
                align-items: center;" class="TargetItems"><h1 style="width:100%;text-align:left;">${element.target_desc}</h1><span style="width:30%;">${combtn}${btn}</span></div>`;
                $('#ActiveTargets').append(div);
                targetCount++;
            }
            tablehr +=`
            <tr>
              <td style="border: 1px solid;font-weight:550;">${element.target_desc}</td>
              <td style="border: 1px solid;font-weight:550;">${element.active}</td>
              <td style="border: 1px solid;font-weight:550;" >${btn}</td>
            </tr>`;

            count++;
        });
        tablehr +=`</table>`;
        if(count != 0){
            $('#Targettbl').append(tablehr);
        }
        else{
            var span = document.createElement('span');
            span.textContent = "No Target Available";
            $('#Targettbl').append(span);
        }
        GetNotification();
    }
    else{
        var span = document.createElement('span');
        span.textContent = "No Target Available";
        $('#Targettbl').append(span);
    }
    
    
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAvailability.checked = false;
    ResolveQueries.checked = false;
    EmployeeAttendance.checked =false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    AddUser.checked = false;
    NewAddress.checked = false;
            popup();
            
            if(targetCount == 0){
            
                var span = document.createElement('h1');
                span.style = "padding-top:20%;color:#0F2A5F;";
                span.id="NoActiveTarget";
                span.textContent = "No Active Target";
                $('#ActiveTargets').append(span);
            }
        },
        error: function (error) {
            var span = document.createElement('span');
            span.textContent = "No Target Available";
            $('#Targettbl').append(span);
        }
    });
   
   


}

GetTask();
function ActivateTarget(id){
    var obj = {
        Id : id
    };
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/ActivateTask.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
            
        },
        error:function(e){
            console.error(e);
        }
    });

    

}
function DeactivateTarget(id){
    
    var obj = {
        Id : id
    };
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/DeactivateTask.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
            
        },
        error:function(e){
            console.error(e);
        }
    });

   

}
function CompleteTarget(id){

    var obj = {
        Id : id
    };
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/CompleteTask.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
            
        },
        error:function(e){
            console.error(e);
        }
    });
}
AddUser.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    ResolveQueries.checked = false;
    NewAddress.checked = false;
    popup();
});
NewAddress.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAvailability.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    ResolveQueries.checked = false;
    AddUser.checked = false;
    popup();
});
NewAvailability.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    NewAddress.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    Employee.checked =false;
    AddEditDelete.checked = false;
    EmployeeCredentials.checked = false;
    EmployeePaystub.checked = false;
    EmployeeTarget.checked = false;
    EmployeeAttendance.checked = false;
    EmployeeAvailability.checked = false;
    UpdateUsers.checked = false;
    LoginInfo.checked = false;
    ResolveQueries.checked = false;
    AddUser.checked = false;
    popup();
});
function AddUsers(){
    AddUser.click();
    
}

$('#AddNewUser').click(()=>{
    var obj = {
        firstname :$('#NewFirstName').val(),
        lastname:$('#NewLastName').val(),
        username:$('#NewUserName').val(),
        password:$('#NewPassword').val(),
        email:$('#NewEmail').val(),
        dateofbirth:$('#NewDOB').val(),
        phone:$('#NewPhone').val(),
        worktype:$('#NewWorkType').val(),
        typeofid:$('#NewTypeId').val(),
        idnumber:$('#NewIdNumber').val(),
        hourlywage:$('#NewHourlyWage').val()
    }
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/AddEmp.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
          
            console.log(data);
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
            NewAddress.click();
            $('#NewAddressId').val(data.id)
            $('#NewAvailabilityId').val(data.id)
        },
        error:function(e){
            console.error(e);
        }
    });
    console.log(obj);
})
$('#AddAddress').click(()=>{
    var obj={
        user_id :$('#NewAddressId').val(),
        street_name :$('#NewStreetName').val(),
        unit :$('#NewUnit').val(),
        city :$('#NewCity').val(),
        province :$('#NewProvince').val(),
        zipcode :$('#NewZipCode').val(),
    }
    console.log(obj)
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/HR/AddAddress.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
          
            console.log(data);
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
            NewAvailability.click();
        },
        error:function(e){
            console.error(e);
        }
    });

})
$("#NewAvailabilitybtn").click(()=>{
    var obj = {
        user_id: $('#NewAvailabilityId').val(),
        monday: `${document.querySelector('#NewMondayFrom').value} to ${document.querySelector('#NewMondayTo').value}`,
        tuesday: `${document.querySelector('#NewTuesdayFrom').value} to ${document.querySelector('#NewTuesdayTo').value}`,
        wednesday: `${document.querySelector('#NewWednesdayFrom').value} to ${document.querySelector('#NewWednesdayTo').value}`,
        thursday: `${document.querySelector('#NewThursdayFrom').value} to ${document.querySelector('#NewThursdayTo').value}`,
        friday: `${document.querySelector('#NewFridayFrom').value} to ${document.querySelector('#NewFridayTo').value}`,
        saturday: `${document.querySelector('#NewSaturdayFrom').value} to ${document.querySelector('#NewSaturdayTo').value}`,
        sunday: `${document.querySelector('#NewSundayFrom').value} to ${document.querySelector('#NewSundayTo').value}`
    };
    console.log(obj);
    $.ajax({
        url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Employees/AddAvailability.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            Availability.checked=false;
            MarkPresence.checked = false;
            NewAvailability.checked = false;
            PreviousAttendance.checked = false;
            LeaveApplication.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CurrentMonthTarget.checked=false;
            PreviousTarget.checked = false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            Admin.checked=false;
            Employee.checked =false;
            AddEditDelete.checked = false;
            EmployeeCredentials.checked = false;
            EmployeePaystub.checked = false;
            EmployeeTarget.checked = false;
            EmployeeAvailability.checked = false;
            ResolveQueries.checked = false;
            EmployeeAttendance.checked =false;
            UpdateUsers.checked = false;
            LoginInfo.checked = false;
            AddUser.checked = false;
            NewAddress.checked = false;
            popup();
        },
        error: function (error) {
           console.error(error);
        }
    });
});


$.ajax({
    url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Admin/GetNotificationNew.php',
    method:'GET',
    success: function (data){
        console.log(data)
        if(data.lenght != 0){
            let i = 0;
            var idlist = [];
            setTimeout(() => {
                document.querySelector('.Popup-Noti').setAttribute("style","opacity:0.9;visibility:visible;");    
            }, 2000);
            
            const notiInter = setInterval(() => {
                let Notifi="";
                if(i<data.length){
                    Notifi = data[i++];
                    idlist.push(Notifi.id)
                    if(Notifi.notification_type == "Good"){
                        document.querySelector('.Popup-Noti').setAttribute("style","opacity:0.9;visibility:visible;background: #7ac37a;");
                    }
                    else{
                        document.querySelector('.Popup-Noti').setAttribute("style","opacity:0.9;visibility:visible;background:#c83636");
                    }
                }
                $('#Notification_Popup').text(Notifi.notification);
                if(i == data.length){
                    clearInterval(notiInter);
                    setTimeout(() => {
                        document.querySelector('.Popup-Noti').setAttribute("style","opacity:0;visibility:hidden;");  
                    }, 2000);
                    
                }
            },2000);
        }
        setTimeout(() => {
            idlist.forEach((id)=>{
                var obj = {
                    id : id
                }
                $.ajax({
                    url:'http://localhost:8080/Advance%20Employee%20Management%20System/api/Admin/SetOldNotification.php',
                    method:'POST',
                    data:JSON.stringify(obj),
                    success: function (data){

                    }
                })
                  
            })
        },data.length*2000);
        
    },
    error:function(e){
        console.log(e);
        
    }
});