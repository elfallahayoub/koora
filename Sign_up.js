document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    alert("Passwords do not match ❌");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters long 🔒");
    return;
  }

  alert(`✅ Welcome ${name}! Your account has been created successfully.`);
  document.getElementById("signup-form").reset();
});
