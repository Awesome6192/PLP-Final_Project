document.addEventListener('DOMContentLoaded', () => {
    // Hamburger Menu JavaScript
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const sidebar = document.querySelector('.sidebar');
    const containerSettings = document.querySelector('#container-settings');

    // If the hamburger menu element exists, add a click event listener
    if (hamburgerMenu) {
        hamburgerMenu.addEventListener('click', () => {
            // Toggle the 'open' class on the sidebar to show or hide it
            sidebar.classList.toggle('open');
            // Toggle the 'sidebar-open' class on the settings container to adjust its visibility
            containerSettings.classList.toggle('sidebar-open');
        });
    }

    // Update Settings Form Handling
    const settingsForm = document.querySelector('.settings-form');

    // If the settings form exists, add a submit event listener
    if (settingsForm) {
        settingsForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Get form values
            const previousPassword = document.getElementById('previous-password').value;
            const newPassword = document.getElementById('new-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const username = document.getElementById('username').value;
            const email = document.getElementById('email').value;
            const language = document.getElementById('language').value;

            // Validate if new passwords match
            if (newPassword !== confirmPassword) {
                alert('New passwords do not match');
                return; // Stop form submission
            }

            // Prepare data to send in the request body
            const data = {
                previousPassword,
                newPassword,
                username,
                email,
                language
            };

            try {
                // Send the updated settings to the server
                const response = await fetch('/api/user/settings', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                // Check if the response is successful
                if (response.ok) {
                    alert('Settings updated successfully');
                    window.location.reload();
                } else {
                    // Parse the response JSON and display error message
                    const result = await response.json();
                    alert(result.errors[0]?.msg || 'Unknown error');
                }
            } catch (error) {
                // Log any errors and display an alert
                console.error('Error updating settings:', error);
                alert('An error occurred while updating settings.');
            }
        });
    }

    // Refresh Page Function
    function refreshPage() {
        window.location.reload();
    }

    // Add event listener to the home icon to refresh the page
    const homeIcon = document.getElementById('home-icon');
    if (homeIcon) {
        homeIcon.addEventListener('click', refreshPage);
    }

    // Logout Button Handling
    const logoutButton = document.getElementById('logout-button');

    // If the logout button exists, add a click event listener
    if (logoutButton) {
        logoutButton.addEventListener('click', async () => {
            try {
                // Send a request to log out the user
                const response = await fetch('/api/user/logout', {
                    method: 'POST',
                    credentials: 'include'
                });

                // Check if the response is successful
                if (response.ok) {
                    window.location.href = '/login.html';
                } else {
                    alert('Error logging out');
                }
            } catch (error) {
                // Log any errors and display an alert
                console.error('Error during logout:', error);
                alert('An error occurred while logging out.');
            }
        });
    }
});