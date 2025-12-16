function togglePassword() {
  const passwordInput = document.getElementById("password");
  const eyeButton = document.getElementById("eye");

  if (passwordInput.type == "password") {
    passwordInput.type = "text"; // hiện mật khẩu
    eyeButton.textContent = "😴";
  } else {
    passwordInput.type = "password"; // ẩn lại
    eyeButton.textContent = "😀";
  }
}
