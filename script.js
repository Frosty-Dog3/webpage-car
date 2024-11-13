// Dark Mode Toggle
document.getElementById('toggle-dark-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.navbar').classList.toggle('dark-mode');

    var icon = document.getElementById('toggle-dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    }
});

// Apply the saved theme on page load
window.addEventListener('load', function() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
        document.querySelector('.navbar').classList.add('dark-mode');
        document.getElementById('toggle-dark-mode').classList.add('fa-moon');
    } else {
        document.getElementById('toggle-dark-mode').classList.add('fa-sun');
    }
});

// Search Function
function searchFunction() {
    var input = document.querySelector('.srch').value.toLowerCase();
    var links = document.querySelectorAll('.navbar ul li a');
    var found = false;

    links.forEach(function(link) {
        if (link.innerHTML.toLowerCase().includes(input)) {
            link.style.backgroundColor = 'transpalent';
            found = true;
        } else {
            link.style.backgroundColor = '';
        }
    });

    if (!found) {
        alert("No matching links found.");
    }
}
