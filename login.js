
var lgoin=document.querySelector("#login");
var user=document.querySelector("#e-mail");
var password=document.querySelector("#password");

lgoin.addEventListener("click",loginSuccess);


function loginSuccess(){
   if(user.value==="admin@admin.com" && password.value==="123456"){
    alert("Login Successful");
   }
   else{
    alert("Incorrect e-mail or password");
   }
}


