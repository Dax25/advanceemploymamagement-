
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
//My Target
const CurrentMonthTarget =document.querySelector('#Current-Month-Target');
const PreviousTarget = document.querySelector('#Previous-Target')
//My Benifits
const CompanyBenifits = document.querySelector('#Company-Benifits');
const ExternalBenifits = document.querySelector('#External-Benifits');
//Get Support
const Admin = document.querySelector('#Admin');
const HR = document.querySelector('#HR');
const ViewMessages = document.querySelector('#ViewMessages');
const Job = document.querySelector('#Job');
//For validation
//Address
const streetName = document.querySelector('#StreetName');
const unit = document.querySelector('#Unit');
const city = document.querySelector('#City');
const province = document.querySelector('#Province');
const zipcode = document.querySelector('#ZipCode');

streetName.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+:;=?#|'<>^*()%!-]/ig,"");
});
unit.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+:;=?#|'<>^*()%!-]/ig,"");
});
city.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
});
province.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
});
zipcode.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});

//Phone No
const phoneNo = document.querySelector('#Phone');

phoneNo.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
});
//Email
const email = document.getElementById("Email");

email.addEventListener("input",(e)=>{
    //e.target.value = e.target.value.substr(0,e.target.value.length-1)
    e.target.value = e.target.value.replace(/[$&+,:;=?#|'<>^*()%!-]/ig,"");
    
});
//Bank Info
const bankName = document.querySelector('#BankName');
const transitNumber = document.querySelector('#TransitNumber');
const institudeNumber = document.querySelector("#InstitudeNumber");
const accountNumber = document.querySelector("#AccountNumber");

bankName.addEventListener("input",(e)=>{
    e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
    e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
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
//For the Popups

    document.getElementById('JobList').addEventListener('change',()=>{
        console.log(document.getElementById('JobList').value);
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetJobs.php',
            method:'GET',
            success: function (data){
            
                data.forEach(element=>{
                    if(element.id == document.getElementById('JobList').value){
                        $('#JobDescription').text(element.job_desc);
                    }
                });
                
            }
        });
    })
    
//It will check which option is selected then it will open the container for that option
var popup = function(){
    if(Address.checked)
    {
        document.querySelector('.popup-address').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:10%;");
        
        //This will get the address from the db 

        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetAddress.php',
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
        
        document.querySelector('.dark-background').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");
    }
    if(Phone.checked)
    {
        document.querySelector('.popup-phone').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        document.querySelector('.dark-background').setAttribute("style","opacity:0.5;visibility: visible;");
        
        //This ajax call is used to Get Employee's phone no

        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetEmp.php',
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
        
        document.querySelector('.dark-background').setAttribute("style","opacity:0.5;visibility: visible;");
        
        //This ajax call is used to Get Employee's email

        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetEmp.php',
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
        
        document.querySelector('.dark-background').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");
    }
    if(Availability.checked)
    {
        document.querySelector('.popup-availability').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:9%;");
        document.querySelector('.dark-background').setAttribute("style","opacity:0.5;visibility: visible;");
        
        //This ajax call is used to Get Employee's availability

        $.ajax({
            url:'https://ems.trialfire.net/api/HR/GetAvailability.php',
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
        document.querySelector('.popup-availability').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:9%;");   
    }
    if(MarkPresence.checked)
    {
        document.querySelector('.popup-Marktime').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-Marktime').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
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
    if(EditBank.checked)
    {
        document.querySelector('.popup-editbank').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:10%;");
        document.querySelector('#Bank_Form').setAttribute('style','opacity:1;visibility:visible');
       
        //This ajax call is used to Get Employee's bank info

        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetBank.php',
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
        document.querySelector('#Bank_Form').setAttribute('style','opacity:0;visibility:hidden'); 
        document.querySelector('.popup-editbank').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:10%;");  
        
    }
    if(Payroll.checked)
    {
        document.querySelector('.popup-payroll').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        
        //This ajax call is used to Get Employee's payroll info

        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/Payroll.php',
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
        var count = 0 ;
        $.ajax({
            url:'https://ems.trialfire.net/api/HR/GetCompletedTask.php',
            method:'GET',
            success: function (data){
                console.log(data);
                if(data.lenght != 0){
                    var tablehr = `<table style="    width: 100%;
                    font-size: 17px;
                    margin: 29px 0px;
                    color:#0F2A5F;
                    text-align: center;
                    border-spacing: unset;
                    border: 1px solid;transition: .3s ease-in;" id="PreTaskTbl">
                <tr>
                <th style="border: 1px solid;font-weight:900;font-size:1.5rem">Target</th>
                <th style="border: 1px solid;font-weight:900;font-size:1.5rem">Assigned date</th>
                <th style="border: 1px solid;font-weight:900;font-size:1.5rem">Completion date</th>
                
                </tr>
                `;
            data.forEach(element => {
                
                tablehr +=`
                <tr>
                <td style="border: 1px solid;font-weight:550">${element.target_desc}</td>
                <td style="border: 1px solid;font-weight:550">${element.assigneddate}</td>
                <td style="border: 1px solid;font-weight:550">${element.completiondate}</td>
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
    if(ViewMessages.checked)
    {
        document.querySelector('.popup-viewmessage').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        $('#MessagesTbl').remove();
        var count = 0 ;
        $.ajax({
            url:'https://ems.trialfire.net/api/Admin/GetMessages.php',
            method:'GET',
            success: function (data){
                console.log(data);
                if(data.lenght != 0){
                    var tablehr = `<table style="    width: 100%;
                    font-size: 17px;
                    margin: 29px 0px;
                    color:#0F2A5F;
                    text-align: center;
                    border-spacing: unset;
                    border: 1px solid;transition: .3s ease-in;" id="MessagesTbl">
                <tr>
                <th style="border: 1px solid;font-weight:900;font-size:1.5rem">Message From</th>
                <th style="border: 1px solid;font-weight:900;font-size:1.5rem">Message</th>
              
                </tr>
                `;
            data.forEach(element => {
                
                tablehr +=`
                <tr>
                <td style="border: 1px solid;font-weight:550">${element.message_from}</td>
                <td style="border: 1px solid;font-weight:550">${element.message}</td>
                
                </tr>`;

                count++;
            });
            tablehr +=`</table>`;
            if(count != 0){
                $('#Messagetbl').append(tablehr);
            }
            else{
                var span = document.createElement('span');
                span.textContent = "No Previous Target Available";
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
        document.querySelector('.popup-viewmessage').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(CompanyBenifits.checked)
    {
        document.querySelector('.popup-companybenifits').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
    
        //This ajax call is used to Get Discounts for employee
        
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetDiscounts.php',
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
                    color:#0F2A5F;
                    border-bottom: 1px solid #0F2A5F;
                    margin: 0px auto;
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
            url:'https://ems.trialfire.net/api/Employees/GetDiscounts.php',
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
                    color:#0F2A5F;
                    border-bottom: 1px solid #0F2A5F;
                    margin: 0px auto;
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
    if(HR.checked)
    {
        document.querySelector('.popup-hr').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-hr').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(Job.checked)
    {
        document.querySelector('.popup-job').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $('.JobElements').remove();
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/GetJobs.php',
            method:'GET',
            success: function (data){
                console.log(data);
                var i = 0;
                data.forEach(element=>{
                    var option = `<option value="${element.id}" class="JobElements">${element.job_title}</option>`;
                    $('#JobList').append(option);
                    if(i==0){
                        $('#JobDescription').text(element.job_desc);
                        i++;
                    }
                });
                
            }
        });
    }
    else{
        document.querySelector('.popup-job').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(Address.checked || 
        Phone.checked || 
        Email.checked || 
        Availability.checked || 
        MarkPresence.checked || 
        PreviousAttendance.checked || 
        LeaveApplication.checked ||
        EditBank.checked||
        Payroll.checked||
        CurrentMonthTarget.checked||
        PreviousTarget.checked||
        CompanyBenifits.checked||
        ExternalBenifits.checked||
        Admin.checked ||
        HR.checked||
        ViewMessages.checked||
        Job.checked)
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
    ViewMessages.checked = false;
    Job.checked = false;
    popup();

});

$('#UpdateAddress').click(()=>{
    document.querySelector('#StreetError').style.visibility = "hidden";
    document.querySelector('#UnitError').style.visibility = "hidden";
    document.querySelector('#CityError').style.visibility = "hidden";
    document.querySelector('#ProvinceError').style.visibility = "hidden";
    document.querySelector('#ZipCodeError').style.visibility = "hidden";
    if(document.querySelector('#StreetName').value != "" && 
       document.querySelector('#Unit').value != "" &&
       document.querySelector('#City').value != "" &&
       document.querySelector('#Province').value != "" &&
       document.querySelector('#ZipCode').value != ""
       )
    {
        var obj = {
            street_name: document.querySelector('#StreetName').value,
            unit: document.querySelector('#Unit').value,
            city: document.querySelector('#City').value,
            province: document.querySelector('#Province').value,
            zipcode: document.querySelector('#ZipCode').value,
        };
        
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/UpdateAddress.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        if(document.querySelector('#StreetName').value == ""){
            document.querySelector('#StreetError').style.visibility = "visible";
        }
        if(document.querySelector('#Unit').value == ""){
            document.querySelector('#UnitError').style.visibility = "visible";
        }
        if(document.querySelector('#City').value == ""){
            document.querySelector('#CityError').style.visibility = "visible";
        }
        if(document.querySelector('#Province').value == ""){
            document.querySelector('#ProvinceError').style.visibility = "visible";
        }
        if(document.querySelector('#ZipCode').value == ""){
            document.querySelector('#ZipCodeError').style.visibility = "visible";
        }
        
    }
})



Phone.addEventListener('click',()=>{
    Address.checked = false;
    Email.checked = false;
    Availability.checked = false;
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
    ViewMessages.checked = false;
    Job.checked = false;
    popup();

});
$('#Phonebtn').click(()=>{
    
    document.querySelector('#PhoneError').style.visibility = "hidden";
    if(document.querySelector('#Phone').value != ""){
        var obj = {
            phone_no: document.querySelector('#Phone').value
        };
        
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/UpdatePhone.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        if(document.querySelector('#Phone').value == ""){
            document.querySelector('#PhoneError').style.visibility = "visible";
        }
    }
})
Email.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Availability.checked = false;
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
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
$('#Emailbtn').click(()=>{
    
    document.querySelector('#EmailError').style.visibility = "hidden";
    if(document.querySelector('#Email').value != ""){
 
        var obj = {
            email: document.querySelector('#Email').value
        };
        
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/UpdateEmail.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        if(document.querySelector('#Email').value == ""){
            document.querySelector('#EmailError').style.visibility = "visible";
        }
    }
})


Availability.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
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
    ViewMessages.checked = false;
    Job.checked = false;
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
        url:'https://ems.trialfire.net/api/Employees/UpdateAvailability.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
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
            ViewMessages.checked = false;
            Job.checked = false;
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
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
PreviousAttendance.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
$.ajax({
    url:'https://ems.trialfire.net/api/Employees/PreviousAttendance.php',
       method:'GET',
       success: function (data){
           if(data.lenght != 0){
               var tablehr = `<table style="width: 100%;
               font-size: 17px;
               margin: -34px 0px;
               text-align: center;
               color:#0F2A5F;
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
             <td style="border: 1px solid;font-weight:550">${element.clock_out}</td>
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
    PreviousAttendance.checked = false;
    EditBank.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
$('#LeaveApplicationbtn').click(()=>{

    document.querySelector('#DOLFError').style.visibility = "hidden";
    document.querySelector('#DOLTError').style.visibility = "hidden";
    document.querySelector('#RFLError').style.visibility = "hidden";


    if(document.querySelector('#DateOfLeave_from').value != "" &&
       document.querySelector('#DateOfLeave_to').value != "" &&
       document.querySelector('#ReasonForLeave').value != ""){
        var obj = {
            dateofleave_from: document.querySelector('#DateOfLeave_from').value,
            dateofleave_to: document.querySelector('#DateOfLeave_to').value,
            reasonforleave:document.querySelector('#ReasonForLeave').value
            
        };
        console.log(obj);
        
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/LeaveOfApplication.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        
        if( document.querySelector('#DateOfLeave_from').value == ""){
            document.querySelector('#DOLFError').style.visibility = "visible";
            
        }
        if(document.querySelector('#DateOfLeave_to').value == ""){
            document.querySelector('#DOLTError').style.visibility = "visible";

        }
        if(document.querySelector('#ReasonForLeave').value == ""){
            document.querySelector('#RFLError').style.visibility = "visible";

        }
    }
})
EditBank.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    Payroll.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});

$('#Bankbtn').click(()=>{
    document.querySelector('#BankNameError').style.visibility = "hidden";
    document.querySelector('#TransitNumberError').style.visibility = "hidden";
    document.querySelector('#InstituteNumberError').style.visibility = "hidden";
    document.querySelector('#AccountNumberError').style.visibility = "hidden";
   


    
    if(document.querySelector('#BankName').value != "" &&
       document.querySelector('#TransitNumber').value != "" &&
       document.querySelector('#InstitudeNumber').value != "" &&
       document.querySelector('#AccountNumber').value != ""){
        var obj = {
            bank_name: document.querySelector('#BankName').value,
            transit_number: document.querySelector('#TransitNumber').value,
            typeofaccount: document.querySelector('#TypeOfAccount').value,
            institude_number: document.querySelector('#InstitudeNumber').value,
            account_no: document.querySelector('#AccountNumber').value,
        };
        
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/UpdateBank.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        
        if(document.querySelector('#BankName').value == ""){
            
            document.querySelector('#BankNameError').style.visibility = "visible";
        }
        if(document.querySelector('#TransitNumber').value == ""){
            document.querySelector('#TransitNumberError').style.visibility = "visible";
        }
        if(document.querySelector('#InstitudeNumber').value == ""){
            document.querySelector('#InstituteNumberError').style.visibility = "visible";
        }
        if(document.querySelector('#AccountNumber').value == ""){
            document.querySelector('#AccountNumberError').style.visibility = "visible";
        }
    }
});


Payroll.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    CurrentMonthTarget.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
$('#RequestPay').click(()=>{
   
    
    $.ajax({
        url:'https://ems.trialfire.net/api/Employees/Paycheck.php',
        method:'POST',
        success: function (data){
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
            ViewMessages.checked = false;
            Job.checked = false;
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
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
PreviousTarget.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
CompanyBenifits.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    PreviousTarget.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;

    popup();
});
ExternalBenifits.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    Admin.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
Admin.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    HR.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
$('#GetSupportAdmin').click(()=>{
    document.querySelector('#AdminComplainError').style.visibility = "hidden";
    if(document.querySelector('#AdminComplain').value != ""){
        var obj = {
            complain : document.querySelector('#AdminComplain').value,
            complain_for : document.querySelector('#TypeOfAdmin').value
        }
        console.log(obj);
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/Complain.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        if(document.querySelector('#AdminComplain').value == ""){
            document.querySelector('#AdminComplainError').style.visibility = "visible";
        }
    }
});
HR.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    ViewMessages.checked = false;
    Job.checked = false;
    popup();
});
ViewMessages.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    HR.checked = false;
    Job.checked = false;
    popup();
});
$('#GetSupportHR').click(()=>{
    document.querySelector('#HRComplainError').style.visibility = "hidden";

    if(document.querySelector('#HRComplain').value != ""){
        var obj = {
            complain : document.querySelector('#HRComplain').value,
            complain_for : document.querySelector('#TypeOfHR').value
        }
        console.log(obj);
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/Complain.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
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
                ViewMessages.checked = false;
                Job.checked = false;
                popup();
            },
            error: function (error) {
            console.error(error);
            }
        });
    }
    else{
        if(document.querySelector('#HRComplain').value == ""){
            document.querySelector('#HRComplainError').style.visibility = "visible";
        }
    }
});

function GetNotifications(){

    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/GetNotification.php',
        method:'GET',
        success: function (data){
            data.forEach(element=>{
                var div = `<div style="display: flex;
                        justify-content: space-between;
                        width: 100%;
                        border-bottom: 3px solid black;
                        margin: 0px auto;
                        align-items: center; color:black;" class="TargetItems"><h1 style="font-size: 1rem;
                        margin: 20px 3px;
                        padding-left: 0.3rem;
                        text-align: left;
                        color: #0F2A5F;
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
        url:'https://ems.trialfire.net/api/HR/GetTask.php',
        method:'GET',
        success: function (data){
            console.log(data);
            $('#NoActiveTarget').remove();
            if(data.lenght != 0){
                var tablehr = `<table style="width: 100%;
                font-size: 17px;
                margin: 29px 0px;
                text-align: center;
                color:#0F2A5F;
                border-spacing: unset;
                border: 1px solid;transition: .3s ease-in;" id="TaskTbl">
            <tr>
              <th style="border: 1px solid;font-weight:550;">Target</th>
              <th style="border: 1px solid;font-weight:550;">Assigned Date</th>
              <th style="border: 1px solid;font-weight:550;">Status</th>
              <th style="border: 1px solid;font-weight:550;">Action</th>
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
                background-color: #0F2A5F;
                color: white;
                border:1px solid #0F2A5F;
                font-size: 13px;
                width: fit-content;'  onClick="ActivateTarget(${element.id})">Activate</button>`;
            }
            else{
                btn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background-color: #0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="DeactivateTarget(${element.id})">Deactivate</button>`;

                combtn = `<button type='button'  style='border: 1px solid white;
                margin-top: 0%;
                margin-right:10px;
                padding: 0.5em 1em;
                border-radius: 0.5rem;
                background-color: #0F2A5F;
                border:1px solid #0F2A5F;
                color: white;
                font-size: 13px;
                width: fit-content;' onClick="CompleteTarget(${element.id})">Complete</button>`;

                var div = `<div style="display: flex;
                justify-content: space-between;
                width: 100%;
                border-bottom: 3px solid #0F2A5F;
                margin: 0px auto;
                padding: 0px 25px;
                align-items: center;" class="TargetItems"><h1 style="    width: 100%;
                text-align: left;
                font-size: 1.9rem;">${element.target_desc}</h1><span style="width:30%">${combtn}${btn}</span></div>`;
                $('#ActiveTargets').append(div);
                targetCount++;
            }
            tablehr +=`
            <tr>
              <td style="border: 1px solid;font-weight:550;">${element.target_desc}</td>
              <td style="border: 1px solid;font-weight:550;">${element.assigneddate}</td>
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
    }
    else{
        var span = document.createElement('span');
        span.textContent = "No Target Available";
        $('#Targettbl').append(span);
    }
    
    
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
            ViewMessages.checked = false;
            Job.checked = false;
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
            console.log(error);
            var span = document.createElement('span');
            span.textContent = "No Target Available";
            $('#Targettbl').append(span);
        }
    });
   

}

GetTask();
GetNotifications();
function ActivateTarget(id){
    var obj = {
        Id : id
    };
    $.ajax({
        url:'https://ems.trialfire.net/api/Employees/ActivateTask.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
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
            ViewMessages.checked = false;
            Job.checked = false;
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
        url:'https://ems.trialfire.net/api/Employees/DeactivateTask.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
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
            ViewMessages.checked = false;
            Job.checked = false;
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
        url:'https://ems.trialfire.net/api/Employees/CompleteTask.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
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
            ViewMessages.checked = false;
            Job.checked = false;
            popup();
            
        },
        error:function(e){
            console.error(e);
        }
    });
}
Job.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Availability.checked=false;
    MarkPresence.checked = false;
    PreviousAttendance.checked = false;
    LeaveApplication.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CurrentMonthTarget.checked = false;
    PreviousTarget.checked = false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    Admin.checked=false;
    ViewMessages.checked = false;
    HR.checked = false;
    popup();
});

$('#ApplyJob').click(()=>{
    var obj = {
        job_id : $('#JobList').val()
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Employees/ApplyForJob.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            setTimeout(() => {
                $('#TaskTbl').remove();
                $('.TargetItems').remove();
                GetTask();
            }, 300);
            
            
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
            ViewMessages.checked = false;
            Job.checked = false;
            popup();
            
        },
        error:function(e){
            console.error(e);
        }
    });
    
});

$.ajax({
    url:'https://ems.trialfire.net/api/Admin/GetNotificationNew.php',
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
                    url:'https://ems.trialfire.net/api/Admin/SetOldNotification.php',
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

