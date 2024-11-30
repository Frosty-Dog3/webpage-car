// Function to toggle the menu
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
}

// Function to add 'scrolled' class to navbar
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Adjust this value based on when you want the effect to take place
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
