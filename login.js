// filepath: c:\Users\Admin\Desktop\koora\src\js\login.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('errorMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === '' || password === '') {
            errorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        // Simulate a login process
        if (username === 'admin' && password === 'password') {
            alert('Login successful!');
            // Redirect to another page or perform another action
        } else {
            errorMessage.textContent = 'Invalid username or password.';
        }
    });
});