const themeSelector =  document.querySelector('#theme-selector');
const logo = document.querySelector('#logo');
const body = document.body;

// Function to do theme change
function changeTheme() {
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo_white.png';
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.webp';
    }
}

themeSelector.addEventListener('change', changeTheme);