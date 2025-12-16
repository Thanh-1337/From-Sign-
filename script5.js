function togglePassword(inputId, btn) {
  const passwordInput = document.getElementById(inputId);
  if (passwordInput.type == "password") {
    passwordInput.type = "text";
    btn.textContent = "😴";
  } else {
    passwordInput.type = "password";
    btn.textContent = "😀";
  }
}
