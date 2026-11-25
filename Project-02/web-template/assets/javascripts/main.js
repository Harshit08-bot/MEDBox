let password = document.querySelector("#passwrd")
let crenditial = document.querySelector("#crenditial")
let loginbtn = document.querySelector("#lgn-btn")
let fullName = document.querySelector("#FullName")
let email = document.querySelector("#Email")
let gender = document.querySelector("#sex")
let newPassword = document.querySelector("#newPswrd")
let confirmPassword = document.querySelector("#Confirm-Pswrd")


const  signUpBtn = document.querySelector("#sign-up")
const loginCrend = document.querySelector(".login-crend")
const loginBtnTop = document.querySelector("#login-btn-top")
const SignUpCard = document.querySelector(".signUp-Card")
const signUp = document.querySelector(".signUpBottom")

const signUpBottom = document.querySelector(".signup")
const LoginBottom = document.querySelector(".Login")





loginbtn.addEventListener("click", (e) =>{
    e.preventDefault()

    if(crenditial.value == "S25CSEU0005@bennett.edu.in" && password.value == "Alpha.a@#0005"){
         window.location.href = "page2.html"

    }else{
        alert("Invalid Crenditials")
        crenditial.value = "";
        password.value = "";
    }
})

// signUpBtn.addEventListener("click", (e)=>{
   
//     signUpBtn.classList.add("active");
//     loginBtnTop.classList.remove("active")
//     loginCrend.classList.add("hidden")
//     SignUpCard.classList.remove("hidden")

// })

// loginBtnTop.addEventListener("click", (e)=>{
//    signUpBtn.classList.remove("active");
//     loginBtnTop.classList.add("active")
//     loginCrend.classList.remove("hidden")
//     SignUpCard.classList.add("hidden")

// })

// signUpBottom.addEventListener("click", (e)=>{
   
//     signUpBtn.classList.add("active");
//     loginBtnTop.classList.remove("active")
//     loginCrend.classList.add("hidden")
//     SignUpCard.classList.remove("hidden")

// })

// LoginBottom.addEventListener("click", (e)=>{
//    signUpBtn.classList.remove("active");
//     loginBtnTop.classList.add("active")
//     loginCrend.classList.remove("hidden")
//     SignUpCard.classList.add("hidden")

// })

function openSignUp() {
    signUpBtn.classList.add("active");
    loginBtnTop.classList.remove("active");
    loginCrend.classList.add("hidden");
    SignUpCard.classList.remove("hidden");
}

function openLogin(){
    signUpBtn.classList.remove("active");
    loginBtnTop.classList.add("active");
    loginCrend.classList.remove("hidden");
    SignUpCard.classList.add("hidden");
}

signUpBtn.addEventListener("click", openSignUp);
signUpBottom.addEventListener("click", openSignUp);

loginBtnTop.addEventListener("click", openLogin);
LoginBottom.addEventListener("click", openLogin);

signUp.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Heyy")

    if(fullName.value === "Harshit Gupta" && (email.value === "harshit82007@gmail.com" || email.value === "9818158640") && gender.value === "Male" && newPassword.value === "Harshit123" && confirmPassword.value === newPassword.value){
        window.location.href = "page2.html"
    }else{
        alert("Invalid Crendential")

    }
})


const eyeButtons = document.querySelectorAll(".eye");

eyeButtons.forEach((eyeBtn) => {
    eyeBtn.addEventListener("click", () => {

        const passwordInput = eyeBtn.parentElement.querySelector("input");
        const icon = eyeBtn.querySelector("i");

       
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            icon.classList.remove("fa-eye");
            icon.classList.add("fa-eye-slash");
        } else {
            passwordInput.type = "password";
            icon.classList.remove("fa-eye-slash");
            icon.classList.add("fa-eye"); 
        }
    });
});
