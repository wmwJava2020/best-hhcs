// script.js

// Function to handle menu click events
function handleMenuClick(event) {
    const activeMenu = document.querySelector('.active');
    if (activeMenu) {
        activeMenu.classList.remove('active');
    }
    event.currentTarget.classList.add('active');
    const targetPage = event.currentTarget.getAttribute('data-target');
    loadPage(targetPage);
}

// Function to load the desired page
function loadPage(page) {
    const contentArea = document.getElementById('content');
    contentArea.innerHTML = `Loading ${page}...`;
    setTimeout(() => {
        // Simulating page load with setTimeout
        contentArea.innerHTML = `<h1>${page.charAt(0).toUpperCase() + page.slice(1)} Page</h1>`;
    }, 1000);
}

// Event listeners for menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', handleMenuClick);
});