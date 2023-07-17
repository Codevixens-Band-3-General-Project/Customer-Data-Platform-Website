// navbar
window.addEventListener("scroll",()=>{
    let navbar =document.querySelector("nav");
    let scrollPosition = document.documentElement.scrollTop;
    let logoImg = document.querySelector(".logo img");


    if (scrollPosition > 100){
        navbar.classList.add("hide");
    } else {
        navbar.classList.remove("hide")
        
}
    if (scrollPosition > window.innerHeight/2 ){
        navbar.classList.add("fixed")
        navbar.classList.add("scrol");
        logoImg.src = "../Assets/img/logo/logo-black.webp";
    }else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("scrol");
        logoImg.src = "../Assets/img/logo/logo-white.webp"
    }
})
// navbar ends

// toggle button
myContent = document.querySelector(".my-content");
month = document.querySelector(".month");
year = document.querySelector(".year");
monthPage = document.querySelector(".month-page");
yearPage = document.querySelector(".year-page");

myContent.addEventListener("click", function(){
    year.classList.toggle("active")
    month.classList.toggle("active")
    if(month.classList.contains("active")){
        monthPage.style.display = "block"
        yearPage.style.display = "none";
    }else{
        yearPage.style.display = "block";
        monthPage.style.display = "none";

}
})
// toggle ends