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