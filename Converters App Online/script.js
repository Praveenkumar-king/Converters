const toggleModeButton = document.getElementById('toggleMode');
const body = document.body;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    toggleModeButton.textContent = savedTheme === 'dark-mode' ? '☀️' : '🌙';
} else {
    body.classList.add('day-mode');
}

// Toggle between Day and Dark mode
toggleModeButton.addEventListener('click', () => {
    if (body.classList.contains('day-mode')) {
        body.classList.replace('day-mode', 'dark-mode');
        toggleModeButton.textContent = '☀️';
        localStorage.setItem('theme', 'dark-mode');
    } else {
        body.classList.replace('dark-mode', 'day-mode');
        toggleModeButton.textContent = '🌙';
        localStorage.setItem('theme', 'day-mode');
    }
});
