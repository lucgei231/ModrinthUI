// Main JavaScript file for Modrinth Web Application

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    // setupNavigation(); // Disabled since we're using server-side navigation
    loadSettings();
});

// Function to set up navigation between pages
function setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetPage = link.getAttribute('href');
            loadPage(targetPage);
        });
    });
}

// Function to load a specific page
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Function to load settings from localStorage
function loadSettings() {
    const pat = localStorage.getItem('personalAccessToken');
    if (pat) {
        // Logic to pre-fill the PAT in the settings page if needed
    }
}