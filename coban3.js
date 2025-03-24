let form = document.querySelector("#form");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#password");
let signUp = document.querySelector(".signUp");

// Xử lý khi submit form
form.addEventListener("submit", function (e) {
  e.preventDefault();

  let email = inputEmail.value.trim();
  let password = inputPassword.value.trim();

  if (!email || !password) {
    alert("Email và mật khẩu không được để trống!");
    return;
  }

  if (email === password) {
    alert("Email và mật khẩu không được trùng nhau!");
    return;
  }

  let userData = JSON.parse(localStorage.getItem("user"));

  if (!userData || userData.email !== email || userData.password !== password) {
    alert("Email hoặc mật khẩu không đúng!");
    return;
  }

  // Hiển thị màn hình chúc mừng đăng nhập thành công
  document.body.innerHTML = `
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh; flex-direction: column; font-family: Arial;">
      <h1 style="color: green;">🎉 Đăng nhập thành công! 🎉</h1>
    </div>
  `;
});

// Xử lý khi nhấn "SignUp"
signUp.addEventListener("click", function () {
  window.location.href = "register.html"; // Chuyển hướng đến trang đăng ký
});