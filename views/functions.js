// Navbar hide on scroll
let navbar = document.getElementById('navbar');
let lastScrollTop = 0;

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('navbar-hidden');
    } else {
        navbar.classList.remove('navbar-hidden');
    }
    lastScrollTop = scrollTop;
});