function formValidation() {

    
            




    /************************* Student Login ID *************************/
    
    var reg=/^[a-zA-Z]+$/;
    var name=document.fnamel.loginid.value;
    
    if (name=="") {
        document.getElementById('error_field').innerHTML="Type Your ID";
        document.fnamel.loginid.focus();
    }
    else if(reg.test(name)!=true) {
        document.getElementById('error_field').innerHTML="Only Characters";
        document.fnamel.loginid.focus();
    }
    else {
        document.getElementById('error_field').innerHTML="ok";
    } 



    
            /*************************password*************************/

            var pattern1=/[0-9]/;
            var pattern2=/[a-z]/;
            var pattern3=/[A-Z]/;
            var pattern4=/.*[!@#$%^&*() =+_-]/;
            var pwd=document.fnamel.password.value;
            if(pwd=="") {
            document.getElementById("error_pass").innerHTML="Enter your password";
                document.fnamel.password.focus();
            }
            else if(pwd.length<6) {
                document.getElementById('error_pass').innerHTML="mimum 6";
            }
            else if(pattern1.test(pwd)!=true) {
                document.getElementById("error_pass").innerHTML="atleast one no";
            }
            else if(pattern2.test(pwd)!=true) {
                document.getElementById("error_pass").innerHTML="atleast one lowercase";
            }
            else if(pattern3.test(pwd)!=true) {
                document.getElementById("error_pass").innerHTML="atleast one uppercase";
            }
            else if(pattern4.test(pwd)!=true) {
                document.getElementById("error_pass").innerHTML="atleast one Special";
            }
            else {
                document.getElementById('error_pass').innerHTML="ok";
            }          
            }


