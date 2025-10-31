document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirm = document.getElementById("confirm-password").value;

  if (password !== confirm) {
    // show inline error
    showTemporaryMessage('Les mots de passe ne correspondent pas ❌', true);
    return;
  }

  if (password.length < 6) {
    showTemporaryMessage('Le mot de passe doit contenir au moins 6 caractères 🔒', true);
    return;
  }
  // show success message in the page
  const success = document.getElementById('success-msg');
  if(success){
    success.hidden = false;
    success.textContent = `✅ ${name}, votre compte a été créé !`;
  } else {
    alert(`✅ Welcome ${name}! Your account has been created successfully.`);
  }
  document.getElementById("signup-form").reset();
  // after showing the success message, redirect to the home page (index.html)
  // change the target if your home page uses a different filename (e.g. home.html)
  const redirectTo = 'homepage.html';
  setTimeout(()=>{
    // attempt an in-site redirect
    try {
      window.location.href = redirectTo;
    } catch (err) {
      // fallback to opening in same window
      location.assign(redirectTo);
    }
  }, 1500);
});

function showTemporaryMessage(text, isError){
  // create a small banner at top of signup container
  let container = document.querySelector('.signup-container');
  if(!container) { alert(text); return; }
  let banner = document.createElement('div');
  banner.className = 'temp-msg' + (isError ? ' error' : '');
  banner.textContent = text;
  container.insertBefore(banner, container.firstChild);
  setTimeout(()=>{ banner.classList.add('visible'); }, 10);
  setTimeout(()=>{ banner.classList.remove('visible'); setTimeout(()=>banner.remove(),300); }, 3500);
}
