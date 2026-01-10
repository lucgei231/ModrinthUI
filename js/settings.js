const settingsForm = document.getElementById('settings-form');
const patInput = document.getElementById('pat-input');
const saveButton = document.getElementById('save-button');
const messageBox = document.getElementById('message-box');

// Load the PAT from localStorage when the page loads
window.onload = function() {
    const savedPAT = localStorage.getItem('modrinth_pat');
    if (savedPAT) {
        patInput.value = savedPAT;
    }
};

// Save the PAT to localStorage when the form is submitted
saveButton.addEventListener('click', function(event) {
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