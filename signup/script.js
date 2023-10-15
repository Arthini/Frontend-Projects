const signUpBtn = document.querySelector(".signup_btn");
const signInBtn = document.querySelector(".signin_btn");
const formWrapper = document.querySelector(".form_wrapper");

signUpBtn.addEventListener('click',(e) => {
    e.preventDefault();
    formWrapper.classList.add("change");
});
signInBtn.addEventListener("click",(e)=> {
    e.preventDefault();
    formWrapper.classList.remove("change");
});