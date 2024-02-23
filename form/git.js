
function validate()
{
let name1,pass,pass1,email,num;
name1=document.getElementById("user").value
pass=document.getElementById("password").value
pass1=document.getElementById("password1").value
email=document.getElementById("email").value
num=document.getElementById("number").value

if(name1==""){
  
  document.getElementById("userr").innerHTML="**Please Inter Username in box**"
  return false
}
if(name1.length<2){
  document.getElementById("userr").innerHTML="**Please Inter atleat one character in box**"
  return false
}
if(!isNaN(name1)){
  document.getElementById("userr").innerHTML="**Please number not allowed atleat one character in box**"
  return false
}
else(
  document.getElementById("userr").innerHTML="")

if(pass==""){
document.getElementById("passs").innerHTML="**Please Inter Password in box**"
return false}
if(pass!==pass1){
  document.getElementById("passs").innerHTML="**Confirm password must must be same"
  return false
}
else(
  document.getElementById("passs").innerHTML=""
)
if(pass1==""){
  document.getElementById("passs1").innerHTML="**Please Inter Confirm Password in box**"
  return false

}
if(email==""){
  document.getElementById("emaill").innerHTML="**please Inter Email in box**"
  return false
}
else(document.getElementById("emaill").innerHTML="")
if(num==""){
  document.getElementById("numberr").innerHTML="**Please Inter Mobile Number in box**"
  return false

}
if(isNaN(num)){
  document.getElementById("numberr").innerHTML="**only Number allowed in box**"
  return false
}
if(num.length<10){
  document.getElementById("numberr").innerHTML="**minimum 10 digit mobile number**"
  return false
  
}
if(num.length>10){
  document.getElementById("numberr").innerHTML="**maxmimum 10 digit mobile number**"
  return false
}
}
for(let i=1; i<=5; i++){
  
}
//function showmodal(){
 // document.querySelector("form").classList.add("show")
//}