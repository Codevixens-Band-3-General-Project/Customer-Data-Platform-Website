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
        logoImg.src = "/Assets/nav-logo/logo-white.webp";
    }else {
        navbar.classList.remove("fixed");
        navbar.classList.remove("scrol");
        logoImg.src = "/Assets/nav-logologo/logo-white.webp"
    }
})
// navbar ends