function formValidation() 
{

   






    /*************************Namme*************************/

    var reg=/^[a-zA-Z]+$/;
    var name=document.fname.name.value;
    
    if (name=="") {
        document.getElementById('error_name').innerHTML="Plz Enter Your Name";
        document.fname.name.focus();
    }
    else if(reg.test(name)!=true) {
        document.getElementById('error_name').innerHTML="Only Characters";
        document.fname.name.focus();
    }
    else {
        document.getElementById('error_name').innerHTML="ok";
    }











    /************************* Student ID *************************/
    
        var reg=/^[a-zA-Z]+$/;
        var name=document.fname.id.value;
        
        if (name=="") {
            document.getElementById('error_field').innerHTML="Type Your ID";
            document.fname.id.focus();
        }
        else if(reg.test(name)!=true) {
            document.id('error_field').innerHTML="Only Characters";
            document.fname.firstname.focus();
        }
        else {
            document.getElementById('error_field').innerHTML="ok";
        } 












        /************************* Semester *************************/

            var reg=/^[a-zA-Z]+$/;
            var name=document.fname.smester.value;
            
            if (name=="") {
                document.getElementById('error_smester').innerHTML="Semester Name";
                document.fname.smester.focus();
            }
            else if(reg.test(name)!=true) {
                document.getElementById('error_smester').innerHTML="Only Characters";
                document.fname.smester.focus();
            }
            else {
                document.getElementById('error_smester').innerHTML="ok";
            }











        
            /************************* Batch *************************/

            var reg=/^[a-zA-Z]+$/;
            var name=document.fname.batch.value;
            
            if (name=="") {
                document.getElementById('error_batch').innerHTML="Batch Name";
                document.fname.batch.focus();
            }
            else if(reg.test(name)!=true) {
                document.getElementById('error_batch').innerHTML="Only Characters";
                document.fname.batch.focus();
            }
            else {
                document.getElementById('error_batch').innerHTML="ok";
            }
      
 








      
               /************************* Department *************************/

               var reg=/^[a-zA-Z]+$/;
               var name=document.fname.department.value;
               
               if (name=="") {
                   document.getElementById('error_department').innerHTML="Department Name";
                   document.fname.department.focus();
               }
               else if(reg.test(name)!=true) {
                   document.getElementById('error_department').innerHTML="Only Characters";
                   document.fname.department.focus();
               }
               else {
                   document.getElementById('error_department').innerHTML="ok";
               }












                /************************* Contact *************************/

              var reg=/^[a-zA-Z]+$/;
              var name=document.fname.contact.value;
              
              if (name=="") {
                  document.getElementById('error_contact').innerHTML="Contact Address";
                  document.fname.contact.focus();
              }
              else if(reg.test(name)!=true) {
                  document.getElementById('error_contact').innerHTML="Only Characters";
                  document.fname.contact.focus();
              }
              else {
                  document.getElementById('error_contact').innerHTML="ok";
              }
      










            /*************************password*************************/

                var pattern1=/[0-9]/;
                var pattern2=/[a-z]/;
                var pattern3=/[A-Z]/;
                var pattern4=/.*[!@#$%^&*() =+_-]/;
                var pwd=document.fname.password.value;
                if(pwd=="") {
                document.getElementById("error_pass").innerHTML="Enter your password";
                    document.fname.password.focus();
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











                /*************************con_password*************************/

                var pattern1 = /[0-9]/;
                var pattern2 = /[a-z]/;
                var pattern3 = /[A-Z]/;
                var pattern4 = /.*[!@#$%^&*() =+_-]/;

                var con_password = document.fname.con_password.value;

                if (con_password === "") {
                    document.getElementById("error_confirmPass").innerHTML = "Enter your confirm password";
                    document.fname.con_password.focus();
                } else if (con_password !== document.fname.password.value) {
                    document.getElementById('error_confirmPass').innerHTML = "Passwords do not match";
                } else if (con_password.length < 6) {
                    document.getElementById('error_confirmPass').innerHTML = "minimum 6";
                } else if (!pattern1.test(con_password)) {
                    document.getElementById("error_confirmPass").innerHTML = "at least one number";
                } else if (!pattern2.test(con_password)) {
                    document.getElementById("error_confirmPass").innerHTML = "at least one lowercase letter";
                } else if (!pattern3.test(con_password)) {
                    document.getElementById("error_confirmPass").innerHTML = "at least one uppercase letter";
                } else if (!pattern4.test(con_password)) {
                    document.getElementById("error_confirmPass").innerHTML = "at least one special character";
                } else {
                    document.getElementById('error_confirmPass').innerHTML = "ok";
                }













                /************************* Student Login ID *************************/
                
                var reg=/^[a-zA-Z]+$/;
                var name=document.fnamel.loginid.value;
                
                if (name=="")
                {
                    document.getElementById('error_field').innerHTML="Type Your ID";
                    document.fnamel.loginid.focus();
                }

                else if(reg.test(name)!=true) {
                    document.getElementById('error_field').innerHTML="Only Characters";
                    document.fnamel.loginid.focus();
                }

                else 
                {
                    document.getElementById('error_field').innerHTML="ok";
                } 



              
}




            