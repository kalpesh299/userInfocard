// console.log("linked");
if(localStorage.getItem("firstname")==null && localStorage.getItem("lastname")==null&& localStorage.getItem("country")==null&&localStorage.getItem("phno")==null&&localStorage.getItem("state")==null&&localStorage.getItem("city")==null&&localStorage.getItem("village")==null){

    let firstname=prompt("Type Your First Name");
localStorage.setItem("firstname",firstname);
let lastname=prompt("Type Your Last Name");
localStorage.setItem("lastname",lastname);
let country=prompt("Type Your country");
localStorage.setItem("country",country);
let phno=prompt("Type Your phone Nno");
localStorage.setItem("phno",phno);
let state=prompt("Type Your state");
localStorage.setItem("state",state);
let city=prompt("Type Your city");
localStorage.setItem("city",city);
let village=prompt("Type Your village");
localStorage.setItem("village",village);

}




document.getElementById("fname").innerText=localStorage.getItem("firstname");
document.getElementById("lname").innerText=localStorage.getItem("lastname");
document.getElementById("country").innerText=localStorage.getItem("country");
document.getElementById("ph").innerText=localStorage.getItem("phno");
document.getElementById("state").innerText=localStorage.getItem("state");
document.getElementById("city").innerText=localStorage.getItem("city");
document.getElementById("village").innerText=localStorage.getItem("village");

document.querySelector(".btn").addEventListener("click",()=>{
    let element = document.body;
    element.classList.toggle("dark");
    document.querySelector(".main").classList.toggle("main_dark");

})