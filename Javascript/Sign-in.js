// Password
const passwordInput = document.getElementById("passwordInput");
const eyeIcon = document.getElementById("eyeIcon");
const passwordLabel = document.querySelector(".password-label")

const togglePasswordVisibility = ()=>{
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        eyeIcon.className = " las la-eye";
        passwordLabel.style.display = "none"
    }else{
        passwordInput.type = "password";
        eyeIcon.className = "las la-low-vision";
    }
}
// side bar
let times = document.querySelector(".times");
let show =  document.querySelector(".show");
let hamburger =  document.querySelector(".hamburger");
let myLinks = document.querySelectorAll(".loop-links")
const myOpacity = document.querySelector('.blue');

times.addEventListener("click",function(){
    show.classList.toggle("active")
    setTimeout(()=>{
        hamburger.style.display = "block"
    },300)
})

hamburger.addEventListener("click",function(){
    show.classList.toggle("active")
    hamburger.style.display = "none"
   
})



myLinks.forEach((items)=>{
    let myAccordion = items.querySelector(".accordion");
    let accordionContent = items.querySelector(".accordion-content")
    myAccordion.addEventListener("click",()=>{
        accordionContent.classList.toggle("active")
        myAccordion.classList.toggle("active")
    })
})

