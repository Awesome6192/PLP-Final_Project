document.addEventListener('DOMContentLoaded', () => {
    // Login Form Handling
    const loginForm = document.getElementById('login-form');

    // Check if the login form exists on the page
    if (loginForm) {
        // Add an event listener for the form's submit event
        loginForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Retrieve the values from the login form inputs
            const emailOrUsername = document.getElementById('identifier').value;
            const password = document.getElementById('password').value;

            try {
                // Send a POST request to the login endpoint with the form data
                const response = await fetch('/api/user/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ identifier: emailOrUsername, password })
                });

                if (response.ok) {
                    // Redirect to the home page on successful login
                    window.location.href = '/home.html';
                } else {
                    // Handle errors if login fails
                    const data = await response.json();
                    alert(data.errors[0]?.msg || 'Unknown error');
                }
            } catch (error) {
                // Handle network or unexpected errors
                console.error('Error during login:', error);
                alert('An error occurred while logging in.');
            }
        });
    }

    // Registration Form Handling
    const registerForm = document.getElementById('register-form');

    // Check if the registration form exists on the page
    if (registerForm) {
        // Add an event listener for the form's submit event
        registerForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Retrieve the values from the registration form inputs
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;

            // Check if the passwords match
            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return; // Stop form submission
            }

            try {
                // Send a POST request to the registration endpoint with the form data
                const response = await fetch('/api/user/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({ email, username, password })
                });

                if (response.ok) {
                    // Redirect to the home page on successful registration
                    window.location.href = '/home.html';
                } else {
                    // Handle errors if registration fails
                    const data = await response.json();
                    alert(data.errors[0]?.msg || 'Unknown error');
                }
            } catch (error) {
                // Handle network or unexpected errors
                console.error('Error during registration:', error);
                alert('An error occurred while registering.');
            }
        });
    }
});