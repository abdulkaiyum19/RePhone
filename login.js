document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const togglePassword = document.querySelector('.toggle-password');

    // Function to show error message
    function showError(input, message) {
        const errorText = input.nextElementSibling;
        input.classList.add('error');
        errorText.textContent = message;
        input.classList.add('shake'); // Add shake animation
        setTimeout(() => input.classList.remove('shake'), 300);
    }

    // Function to clear error
    function clearError(input) {
        input.classList.remove('error');
        input.nextElementSibling.textContent = '';
    }

    // Toggle Password Visibility
    togglePassword.addEventListener('click', function () {
        if (password.type === 'password') {
            password.type = 'text';
            togglePassword.classList.replace('fa-eye', 'fa-eye-slash');
        } else {
            password.type = 'password';
            togglePassword.classList.replace('fa-eye-slash', 'fa-eye');
        }
    });

    // Login Form Submission
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        let isValid = true;

        // Validate Email
        if (email.value.trim() === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else {
            clearError(email);
        }

        // Validate Password
        if (password.value.length < 6) {
            showError(password, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            clearError(password);
        }

        // If form is valid, proceed with login
        if (isValid) {
            alert(`🎉 Login successful! Welcome back.`);
            loginForm.reset();
        }
    });
});
