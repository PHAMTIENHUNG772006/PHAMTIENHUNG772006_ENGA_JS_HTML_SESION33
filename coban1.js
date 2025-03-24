let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let confirmPass =document.querySelector("#confirmPassword");
let btnButtonElement = document.querySelector("#btnSubmit")

btnButtonElement.addEventListener("click" ,function(){
    let email = inputEmail.value;
    let password = inputPassword.value;
    let confirm = confirmPass.value
    if(!password || !email || !confirm){
        alert("dữ liệu không được để trống");
    }
    if(password !== confirm){
        alert("password và pass confirm không trùng..!");
    }
    let user = {
        email,password
    }
    localStorage.setItem("user", JSON.stringify(user));
});

