


let nav = document.querySelector(".navigation");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

let navbar =document.querySelectorAll('.nav-link');
let collase = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function(a){
    a.addEventListener("click",function(){
        collase.classList.remove("show");
    })
})





// document.addEventListener("DOMContentLoaded", ()=>{
//     function counter(id,start,end,duration){
//         let obj1= document.getElementById(id),
//         current = start,
//         range = end-start,
//         incremnt = end > start ? 1: -1,
//         step=Math.abs(Math.floor(duration/range)),
//         timer=setInterval(()=>{
//             current+=incremnt;
//               obj1.textContent=current;
//             if(current==end){
//                 clearInterval(timer);
//             }
//         },step);

//     }
//     counter("count1",0,145,33);
//     counter("count2",0,900,34);
//     counter("count3",0,444,35);
//     counter("count4",0,34,33);
// })






function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 4 ){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 11){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 10){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }