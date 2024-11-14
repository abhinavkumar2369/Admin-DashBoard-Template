document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    if (!email) {
        showError('emailError', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email address');
        isValid = false;
    }

    if (!password) {
        showError('passwordError', 'Password is required');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }

    if (isValid) {
        const button = document.querySelector('.login-button');
        button.disabled = true;
        button.textContent = 'Signing in...';

        setTimeout(() => {
            button.disabled = false;
            button.textContent = 'Sign in';
            alert('Login successful!');
        }, 1500);
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}