const settingsForm = document.getElementById('pat-form');
const patInput = document.getElementById('pat-input');
const messageBox = document.getElementById('message');

// Load the PAT from localStorage when the page loads
window.onload = function() {
    const savedPAT = localStorage.getItem('modrinth_pat');
    if (savedPAT) {
        patInput.value = savedPAT;
    }
};

// Save the PAT to localStorage when the form is submitted
settingsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const pat = patInput.value.trim();
    
    if (pat) {
        localStorage.setItem('modrinth_pat', pat);
        messageBox.textContent = 'Personal Access Token saved successfully!';
        messageBox.style.color = 'green';
    } else {
        messageBox.textContent = 'Please enter a valid Personal Access Token.';
        messageBox.style.color = 'red';
    }
});