const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuBars = document.getElementById('menu-bars');

let isOpen = false;

menuToggle.addEventListener('click', () => {
    isOpen = !isOpen;

    // Toggle mobile menu
    if (isOpen) {
        mobileMenu.classList.remove('hidden');
    } else {
        mobileMenu.classList.add('hidden');
    }

    // You can also toggle icon paths here (hamburger vs close icon)
    // For now, you can keep one icon — or use two icons and toggle visibility
});