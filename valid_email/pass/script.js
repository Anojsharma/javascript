const form = document.getElementById("form"); 
const email = document.getElementById("email"); 
const password = document.getElementById("password"); 
const message = document.getElementById("message");

form.addEventListener('submit',()=>{
    if(email.value==='' || password.value===''){
        event.preventDefault();
        message.textContent = " please fill in all field";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        event.preventDefault();
        message.textContent = "Please enter a valid email address";
    }
    if(password.value.length < 6){
        event.preventDefault();
        message.textContent = "pass much be gretter then 6"
    }
})