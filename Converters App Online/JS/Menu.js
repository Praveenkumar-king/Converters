// Toggle the menu visibility
function toggleMenu() {
    const menuOptions = document.getElementById('menu-options');
    if (menuOptions.classList.contains('hidden')) {
        menuOptions.classList.remove('hidden');
    } else {
        menuOptions.classList.add('hidden');
    }
}
