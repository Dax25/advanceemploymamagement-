
//Personal Information
const Address=document.querySelector('#Update-Address');
const Phone=document.querySelector('#Update-Phone');
const Email=document.querySelector('#Update-Email');
const Availability=document.querySelector('#Update-Availability');
//My Pay
const EditBank = document.querySelector('#Edit-Bank');
const Payroll = document.querySelector('#Payroll');
//My Benifits
const CompanyBenifits = document.querySelector('#Company-Benifits');
const ExternalBenifits = document.querySelector('#External-Benifits');
//Employees/HR
const EmpLeaveRequest = document.querySelector('#EmpLeaveRequest');
const IncrementEmpPay = document.querySelector('#IncrementEmpPay');
const EmpPayChange = document.querySelector('#EmpPayChange');
const HRTargets = document.querySelector('#HRTargets');
const PostAJob = document.querySelector('#PostAJob');
//Contact
const HR = document.querySelector('#HR');
const Employee = document.querySelector('#Employee');
const ResolveQueries = document.querySelector('#ResolveQueries');

//Team Lead Management
const AssignTeamLead = document.querySelector("#AssignTeamLead");
const ChangeTeamLead = document.querySelector('#ChangeTeamLead');
const HiringDetail = document.querySelector('#HiringDetails');
const LeaveRequestDetails = document.querySelector('#LeaveRequestDetails');

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

//Employee/Hr

    //Assign target to HR
        const task = document.querySelector('#Task');
        task.addEventListener("input",(e)=>{
            e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
            e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
        });
    //Post a job
        const jobTitle = document.querySelector('#JobTitle');
        const jobDesc = document.querySelector('#JobDesc');
        jobTitle.addEventListener("input",(e)=>{
            e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
            e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
        });
        jobDesc.addEventListener("input",(e)=>{
            e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
            e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
        });
//Contact
        const HRcontact = document.querySelector('#HRContact');
        const Empcontact = document.querySelector('#EmpContact');
        // HRcontact.addEventListener("input",(e)=>{
        //     e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
        //     e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
        // });
        // Empcontact.addEventListener("input",(e)=>{
        //     e.target.value = e.target.value.replace(/[^\0-9a-z]/ig, ""); 
        //     e.target.value = e.target.value.replace(/[$&+:;,\./=?#|'<>^*()%!0-9-]/ig,"");
        // });
//Popup Function

var popup = function(){
    if(Address.checked)
    {
        document.querySelector('.popup-address').setAttribute("style","opacity:1;visibility: visible;height:fit-content;top:10%;");
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
        
        }
    if(Phone.checked)
    {
        document.querySelector('.popup-phone').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
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
        
    }
    if(EditBank.checked)
    {
        document.querySelector('.popup-editbank').setAttribute("style","opacity:1;visibility: visible;height:fit-content; height:fit-content;top:10%;");
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
        document.querySelector('.popup-editbank').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;top:10%;");  
        
    }
    if(Payroll.checked)
    {
        document.querySelector('.popup-payroll').setAttribute("style","opacity:1;visibility: visible;height:fit-content;");
        $.ajax({
            url:'https://ems.trialfire.net/api/Employees/Payroll.php',
            method:'GET',
            success: function (data){
                $('#RequestPay').attr('disabled',false);
                $('#RequestPay').removeClass('disbled');
                var totalhours = 0;
                document.querySelector('#PayBankName').textContent = data[0].bank_name;
                document.querySelector('#PayAccNo').textContent = data[0].account_no;
                document.querySelector('#PayHourlyWage').textContent = data[1].hourlywage +"$";
                // document.querySelector('#PayTOW').textContent = data[1].worktype;
                
                
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
    if(CompanyBenifits.checked)
    {
        document.querySelector('.popup-companybenifits').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
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
    if(EmpLeaveRequest.checked)
    {
        document.querySelector('.popup-empleavereq').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'https://ems.trialfire.net/api/Admin/GetLeaveRequest.php',
            method:'GET',
            success: function (data){
                console.log(data);
                $('.LeaveRequestList').remove();
                data.forEach(element=>{
                    var span = `<div style="display: flex;
                    align-items: center;
                    border: 1px solid black;
                    color: #0F2A5F;
                    
                    overflow: hidden;
                    padding: 12px 21px;
                    justify-content: space-between;" class="LeaveRequestList">
                                    <span style="font-size: 1rem;
                                    width: 75%;
                                    font-weight:900;
                                    text-align: start;">${element.username} has requested a leave from ${element.dateofleave_from} to ${element.dateofleave_to}</span><button class="btn" style="font-size: 0.6rem;margin-top:0%;" onclick="LeaveReqDetails('${element.id}','${element.username}','${element.dateofleave_from}','${element.dateofleave_to}','${element.user_id}','${element.reasonforleave}')" >View details</button></div>`;
                                    
                        
                        $('#EmpLeaveReq').append(span);
                })
                
            },
            error:function(e){
                console.log(e)
                $('#GetSupportAdmin').attr('disabled',true);
                $('#GetSupportAdmin').addClass('disbled');
            }
        });
        
        
    }
    else{
        document.querySelector('.popup-empleavereq').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(IncrementEmpPay.checked)
    {
        document.querySelector('.popup-incrementemppay').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
        $.ajax({
            url:'https://ems.trialfire.net/api/Admin/GetEmpPay.php',
            method:'GET',
            success: function (data){
                    $('.emppaytbl').remove();
                    var tablehr = `<table class="emppaytbl" style="width: 100%;
                    font-size: 17px;
                    margin: 2px 0px;
                    color:#0F2A5F;
                    text-align: center;
                    border-spacing: unset;
                    border: 1px solid;" >
                    <tr>
                    <th style="border: 1px solid;font-weight:900">Name</th>
                    <th style="border: 1px solid;font-weight:900">Hourly Wage</th>
                    <th style="border: 1px solid;font-weight:900">Action</th>
                    </tr>
                    `;
                    data.forEach(element => {
                        var btn=`<button class="btn" style="margin-top:0%;font-size:11px;"  onclick="ChangeWage('${element.id}','${element.username}','${element.hourlywage}')">Change</button>`;
                        tablehr +=`
                        <tr>
                        <td style="border: 1px solid;font-weight:900">${element.username}</td>
                        <td style="border: 1px solid;font-weight:900">${element.hourlywage}</td>
                        <td style="border: 1px solid;">${btn}</td>
                        </tr>`;
                    });
                    tablehr +=`</table>`;
                    $('#EmpPayList').append(tablehr);
                   
            }
        });
    }
    else{
        document.querySelector('.popup-incrementemppay').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(HRTargets.checked)
    {
        document.querySelector('.popup-hrtargets').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-hrtargets').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(PostAJob.checked)
    {
        document.querySelector('.popup-postajob').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-postajob').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(HR.checked)
    {
        document.querySelector('.popup-hr').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-hr').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(Employee.checked)
    {
        document.querySelector('.popup-employee').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-employee').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(AssignTeamLead.checked)
    {
        document.querySelector('.popup-assignteamlead').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-assignteamlead').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(ChangeTeamLead.checked)
    {
        document.querySelector('.popup-changeteamlead').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;");
       
    }
    else{
        document.querySelector('.popup-changeteamlead').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;");   
    }
    if(HiringDetail.checked)
    {
        document.querySelector('.popup-hiringdetails').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;margin-top: -4%;");
       
    }
    else{
        document.querySelector('.popup-hiringdetails').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;margin-top: -4%;");   
    }
    if(LeaveRequestDetails.checked)
    {
        document.querySelector('.popup-leaverequestdetails').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;margin-top: 0%;");
       
    }
    else{
        document.querySelector('.popup-leaverequestdetails').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;margin-top: 0%;");   
    }
    if(EmpPayChange.checked)
    {
        document.querySelector('.popup-emppaychange').setAttribute("style","opacity:1;visibility: visible;height:fit-content;height:fit-content;margin-top: 0%;");
       
    }
    else{
        document.querySelector('.popup-emppaychange').setAttribute("style","opacity:0;visibility: hidden;height:fit-content;margin-top: 0%;");   
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
        EditBank.checked||
        Payroll.checked||
        CompanyBenifits.checked||
        ExternalBenifits.checked||
        EmpLeaveRequest.checked||
        IncrementEmpPay.checked||
        HRTargets.checked||
        HR.checked ||
        Employee.checked||
        AssignTeamLead.checked||
        ChangeTeamLead.checked||
        PostAJob.checked||
        HiringDetail.checked||
        LeaveRequestDetails.checked||
        EmpPayChange.checked||
        ResolveQueries.checked
        )
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
    EditBank.checked = false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
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
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
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
    EditBank.checked = false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
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
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
                
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
    EditBank.checked = false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
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
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
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


EditBank.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
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
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
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
    EditBank.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});


CompanyBenifits.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    
    popup();
});
ExternalBenifits.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});
HR.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    Employee.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});
$('#ContactHR').click(()=>{
    document.querySelector('#HRMessageError').style.visibility = "hidden";
    if($('#HRContact').val() != ""){
        var obj ={
            message:$('#HRContact').val(),
            for:"HR"
        };
        $.ajax({
            url:'https://ems.trialfire.net/api/Admin/SendMessage.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
                popup();
            },
            error:function(e){
                console.error(e);
            }
        });
    }
    else{
        if($('#HRContact').val() == ""){
            document.querySelector('#HRMessageError').style.visibility = "visible";
        }
    }
});
Employee.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    HR.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});
$.ajax({
    url:'https://ems.trialfire.net/api/HR/GetEmps.php',
    method:'GET',
    success: function (data){
    
        data.forEach(element =>{
            var option = document.createElement('option');
            option.textContent = element.username;
            option.value = element.id;

            $('#CompEmplist').append(option);
        });
    },
    error:function(e){
        
    }
});
$('#ContactEmp').click(()=>{
    document.querySelector('#EmpMessageError').style.visibility = "hidden";
    if($('#EmpContact').val() != ""){
        var obj ={
            message:$('#EmpContact').val(),
            from:"Admin",
            user_id:$('#CompEmplist').val()
        };
        $.ajax({
            url:'https://ems.trialfire.net/api/Admin/SendMessages.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
                popup();
                var noti ={
                    notification :`You have new message`,
                    user_id:$('#CompEmplist').val(),
                    notification_type:"Good"
                }
                $.ajax({
                    url:'https://ems.trialfire.net/api/Admin/PushNotification.php',
                    method:'POST',
                    data:JSON.stringify(noti),
                    success: function (data){
    
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            },
            error:function(e){
                console.error(e);
            }
        });
    }
    else{
        if($('#EmpContact').val() == ""){
            document.querySelector('#EmpMessageError').style.visibility = "visible";
        }
    }
    $('#EmpContact').val("");
    $('#CompEmplist').val($("#CompEmplist").prop("selectedIndex", 0).val());
});
EmpLeaveRequest.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    IncrementEmpPay.checked = false;
    HRTargets.checked = false;
    Employee.checked = false;
    HR.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});
IncrementEmpPay.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    HRTargets.checked = false;
    Employee.checked = false;
    HR.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});
EmpPayChange.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    HRTargets.checked = false;
    Employee.checked = false;
    HR.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    IncrementEmpPay.checked = false;
    ResolveQueries.checked = false;
    popup();
});
function ChangeWage(id,name,wage){
    EmpPayChange.click();
    $('#PayChangeId').val(id);
    $('#PayChangeName').text(name);
    $('#PayChangeWage').val(wage);
    
}
$('#ChangePayBtn').click(()=>{
    var obj ={
        id:$('#PayChangeId').val(),
        wage:$('#PayChangeWage').val()
    };
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/ChangeWage.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
});
HRTargets.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    AssignTeamLead.checked=false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
});
$.ajax({
    url:'https://ems.trialfire.net/api/Admin/GetHr.php',
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

$('#AssignTarget').click(()=>{
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
            url:'https://ems.trialfire.net/api/HR/AddTask.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
                popup();
                var noti ={
                    notification :`Task "${obj.target_desc}" was assigned to you.Open your active targets to view the details"`,
                    user_id:$('#Emplist').val(),
                    notification_type:"Good"
                }
                $.ajax({
                    url:'https://ems.trialfire.net/api/Admin/PushNotification.php',
                    method:'POST',
                    data:JSON.stringify(noti),
                    success: function (data){
    
                    },
                    error:function(e){
                        console.log(e);
                    }
                })
            },
            error:function(e){
                console.error(e);
            }
        });
        $('#Emplist').val($("#Emplist").prop("selectedIndex", 0).val());
        $('#Task').val("");
    }
});

AssignTeamLead.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    HRTargets.checked = false;
    ChangeTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
})
function GetHrPos(){
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/GetHrPos.php',
        method:'GET',
        success: function (data){
            if(data.lenght != 0){
                $('#NoTeamLeads').remove();
                document.querySelector('#TeamLeads').style = "padding-top:0%";
                $('.teamleadstbl').remove();
                var tablehr = `<table class="teamleadstbl" style="width: 100%;
                font-size: 17px;
                margin: 0px 0px;
                color: #0F2A5F;
                text-align: center;
                border-spacing: unset;
                border: 1px solid #0F2A5F;" >
                <tr>
                <th style="border: 1px solid #0F2A5F;padding: 13px 0px;border-left: none;">Name</th>
                <th style="border: 1px solid #0F2A5F;padding: 13px 0px;">Position</th>
                <th style="border: 1px solid #0F2A5F;padding: 13px 0px;border-right: none;">Action</th>
                </tr>
                `;
                data.forEach(element => {
                    var btn ="";
                    if(element.position == "Not Assigned"){
                        btn = `<button type='button' style='border: 1px solid white;
                        margin: 10px 0px;
                        padding: 0.5em 2em;
                        border-radius: 0.5rem;
                        background:#0F2A5F;
                        border:1px solid #0F2A5F;
                        color: white;
                        font-size: 13px;
                        width: fit-content;' onclick="Assign(${element.user_id},'${element.name}');">Assign</button>`;
                    }
                    else{
                        btn = `<button type='button' style='border: 1px solid white;
                        margin: 10px 0px;
                        padding: 0.5em 2em;
                        border-radius: 0.5rem;
                        background: #0F2A5F;
                        color: white;
                        border:1px solid #0F2A5F;
                        font-size: 13px;
                        width: fit-content;' onClick="Change(${element.id},'${element.name}','${element.position}')">Change</button>`;
                    }
                    tablehr +=`
                    <tr>
                    <td style="border: 1px solid;border-left: none;">${element.name}</td>
                    <td style="border: 1px solid;">${element.position}</td>
                    <td style="border: 1px solid;border-right: none;">${btn}</td>
                    </tr>`;
                });
                tablehr +=`</table>`;
                $('#TeamLeads').append(tablehr);
               
            }
            else{
                var span = document.createElement('span');
                span.textContent = "No Team Lead available";
                $('#TeamLeads').append(span);
            }
        },
        error:function(e){
            var span = document.createElement('span');
            document.querySelector('#TeamLeads').style = "padding-top:30%";
            span.id="NoTeamLeads";
            span.textContent = "No Team Lead available";
            $('#TeamLeads').append(span);
        }
    });
}
GetHrPos();
function Assign(id,name){
    AssignTeamLead.click();
    $('#TeamleadPosId').val(id);
    $('#TeamLeadName').text(name);
    
}
$('#AssignPosition').click(()=>{
    var obj = {
        user_id : $('#TeamleadPosId').val(),
        position : $('#PositionList').val()
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/AssignPos.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    setTimeout(() => {
        GetHrPos();
    }, 500);
    
    
});

ChangeTeamLead.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    HRTargets.checked = false;
    AssignTeamLead.checked= false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
})

function Change(id,name,pos){
    ChangeTeamLead.click();
    $('#TeamleadPosIdChange').val(id);
    $('#TeamLeadNameChange').text(name);
    $('#PositionListChange').val(pos);
    
}

$("#ChangePosition").click(()=>{

    var obj = {
        id : $('#TeamleadPosIdChange').val(),
        position :  $('#PositionListChange').val()
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/ChangePos.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
        },
        error:function(e){
            console.error(e);
        }
    });
    setTimeout(() => {
        GetHrPos();
    }, 500);
    
     
});
PostAJob.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    HRTargets.checked = false;
    AssignTeamLead.checked= false;
    ChangeTeamLead.checked = false;
    HiringDetail.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
})
$('#PostJob').click(()=>{
    document.querySelector('#JobTitleError').style.visibility = "hidden";
    document.querySelector('#JobDescError').style.visibility = "hidden";
    if($("#JobTitle").val() != "" &&
       $('#JobDesc').val() != ""){
        var obj = {
            job_title : $("#JobTitle").val(),
            job_desc :$('#JobDesc').val()
        }
        $.ajax({
            url:'https://ems.trialfire.net/api/Admin/PostJob.php',
            method:'POST',
            data:JSON.stringify(obj),
            success: function (data){
                Address.checked = false;
                Phone.checked = false;
                Email.checked = false;
                EditBank.checked=false;
                Payroll.checked=false;
                CompanyBenifits.checked = false;
                ExternalBenifits.checked = false;
                EmpLeaveRequest.checked = false;
                IncrementEmpPay.checked = false;
                Employee.checked = false;
                HR.checked=false;
                HRTargets.checked = false;
                AssignTeamLead.checked=false;
                ChangeTeamLead.checked= false;
                PostAJob.checked = false;
                HiringDetail.checked = false;
                LeaveRequestDetails.checked = false;
                EmpPayChange.checked = false;
                ResolveQueries.checked = false;
                popup();
            },
            error:function(e){
                console.error(e);
            }
        });
    }
    else{
        
       
        if($("#JobTitle").val() == "" ){
            document.querySelector('#JobTitleError').style.visibility = "visible";
        }
        if($('#JobDesc').val() == ""){  
            document.querySelector('#JobDescError').style.visibility = "visible";
        }
    }
    
});

HiringDetail.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    HRTargets.checked = false;
    AssignTeamLead.checked= false;
    ChangeTeamLead.checked = false;
    PostAJob.checked = false;
    LeaveRequestDetails.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
})


function GetHiringList(){
    
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/EmployeeRequest.php',
        method:'GET',
        success: function (data){
            var count = 0;
            
            $('.ApproveRequestList').remove();
            $('#NoApproveRequest').remove();
            if(data.lenght != 0){
                
                data.forEach(element=>{
                    var span = `<div style="display: flex;
                    align-items: center;
                    border: 1px solid black;
                    color:#0F2A5F;
                    padding: 12px 21px;
                    justify-content: space-between;" class="ApproveRequestList">
                    <span style="font-size: 1rem;
                    width: 75%;
                    text-align: start;
                    font-weight:800">${element[1].username} has applied for the position of ${element[2].job_title}</span><button class="btn" style="font-size: 0.6rem;margin-top:0%;background:#0F2A5F;border:1px solid #0F2A5F;" onclick="HiringDetails('${element[0].id}','${element[1].username}','${element[2].job_title}','${element[2].job_desc}','${element[1].id}' )">View details</button></div>`;
                    $('#EmployeeRequest').append(span);

                    count++;
                });

            }
            if(count == 0){
                var span = document.createElement('span');
                document.querySelector('#EmployeeRequest').style = "padding-top:28%;color:black;";
                span.id="NoApproveRequest";
                span.textContent = "No Requests Available";
                $('#EmployeeRequest').append(span);
            }
        },
        error:function(e){
            var span = document.createElement('span');
            document.querySelector('#EmployeeRequest').style = "padding-top:28%;color:black;";
            span.id="NoApproveRequest";
            span.textContent = "No Requests Available";
            $('#EmployeeRequest').append(span);
        }
    });
}
GetHiringList();

function HiringDetails(id,names,title,desc,uid){
    HiringDetail.click();
    
    $('#ApprovalId').val(id);
    $('#ApprovalUserId').val(uid);
    document.querySelector('#ApplicantName').innerText = names;
    document.querySelector('#Jobtitle').textContent = title;
    document.querySelector('#Jobdesc').textContent = desc;
}
$('#ApproveRequest').click(()=>{
    var obj = {
        id: document.querySelector('#ApprovalId').value,
        
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/ApproveRequest.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
            var noti ={
                notification :`Your application for the position of ${document.querySelector('#Jobtitle').textContent} has been accepted`,
                user_id:$('#ApprovalUserId').val(),
                notification_type:"Good"
            }
            $.ajax({
                url:'https://ems.trialfire.net/api/Admin/PushNotification.php',
                method:'POST',
                data:JSON.stringify(noti),
                success: function (data){

                },
                error:function(e){
                    console.log(e);
                }
            })
        },
        error:function(e){
            console.error(e);
        }
    });
    setTimeout(() => {
        GetHiringList();
        
    }, 1000);
    
});
$('#RejectRequest').click(()=>{
    var obj = {
        id: document.querySelector('#ApprovalId').value,
        
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/RejectRequest.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
            var noti ={
                notification :`Your application for the position of ${document.querySelector('#Jobtitle').textContent} has been rejected`,
                user_id:$('#ApprovalUserId').val(),
                notification_type:"Bad"
            }
            $.ajax({
                url:'https://ems.trialfire.net/api/Admin/PushNotification.php',
                method:'POST',
                data:JSON.stringify(noti),
                success: function (data){

                },
                error:function(e){
                    console.log(e);
                }
            })
        },
        error:function(e){
            console.error(e);
        }
    });
    setTimeout(() => {
        GetHiringList();
        
    }, 1000);
    console.log(obj);
});


LeaveRequestDetails.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    HRTargets.checked = false;
    AssignTeamLead.checked= false;
    ChangeTeamLead.checked = false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    EmpPayChange.checked = false;
    ResolveQueries.checked = false;
    popup();
})

ResolveQueries.addEventListener('click',()=>{
    Address.checked = false;
    Phone.checked = false;
    Email.checked = false;
    EditBank.checked=false;
    Payroll.checked=false;
    CompanyBenifits.checked = false;
    ExternalBenifits.checked = false;
    EmpLeaveRequest.checked = false;
    IncrementEmpPay.checked = false;
    Employee.checked = false;
    HR.checked=false;
    HRTargets.checked = false;
    AssignTeamLead.checked= false;
    ChangeTeamLead.checked = false;
    PostAJob.checked = false;
    HiringDetail.checked = false;
    EmpPayChange.checked = false;
    LeaveRequestDetails.checked = false;
    popup();
    
})


$.ajax({
    url:'https://ems.trialfire.net/api/Admin/GetQueries.php',
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

function LeaveReqDetails(id,name,from,to,uid,reason){
   
    LeaveRequestDetails.click();
    $('#LeaveRequestId').val(id);
    $('#LeaveUserId').val(uid);
    $('#LeaveRequestName').text(name);
    $('#DOLF').text(from);
    $('#DOLT').text(to);
    $('#RFL').text(reason);
    
}

$('#ApproveLeaveRequest').click(()=>{

    var obj = {
        id:  $('#LeaveRequestId').val()
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/ApproveLeave.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
            var noti ={
                notification :`Your leave request from ${$('#DOLF').text()} to ${ $('#DOLT').text()} has been accepted`,
                user_id:$('#LeaveUserId').val(),
                notification_type:"Good"
            }
            $.ajax({
                url:'https://ems.trialfire.net/api/Admin/PushNotification.php',
                method:'POST',
                data:JSON.stringify(noti),
                success: function (data){

                },
                error:function(e){
                    console.log(e);
                }
            })
        },
        error:function(e){
            console.error(e);
        }
    });
    
    
});
$('#RejectLeaveRequest').click(()=>{

    var obj = {
        id:  $('#LeaveRequestId').val()
    }
    $.ajax({
        url:'https://ems.trialfire.net/api/Admin/RejectLeave.php',
        method:'POST',
        data:JSON.stringify(obj),
        success: function (data){
            Address.checked = false;
            Phone.checked = false;
            Email.checked = false;
            EditBank.checked=false;
            Payroll.checked=false;
            CompanyBenifits.checked = false;
            ExternalBenifits.checked = false;
            EmpLeaveRequest.checked = false;
            IncrementEmpPay.checked = false;
            Employee.checked = false;
            HR.checked=false;
            HRTargets.checked = false;
            AssignTeamLead.checked=false;
            ChangeTeamLead.checked= false;
            PostAJob.checked = false;
            HiringDetail.checked = false;
            LeaveRequestDetails.checked = false;
            EmpPayChange.checked = false;
            ResolveQueries.checked = false;
            popup();
            var noti ={
                notification :`Your leave request from ${$('#DOLF').text()} to ${ $('#DOLT').text()} has been rejected`,
                user_id:$('#LeaveUserId').val(),
                notification_type:"Bad"
            }
            $.ajax({
                url:'https://ems.trialfire.net/api/Admin/PushNotification.php',
                method:'POST',
                data:JSON.stringify(noti),
                success: function (data){

                },
                error:function(e){
                    console.log(e);
                }
            })
        },
        error:function(e){
            console.error(e);
        }
    });
    
    console.log(obj);
});

