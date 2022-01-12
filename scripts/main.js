const navbar = document.querySelector('header');
const svg  = document.querySelector('header svg');

window.onscroll = function() {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
        svg.classList.add('toggle');
    } else {
        navbar.classList.remove('scrolled');
        svg.classList.remove('toggle');
    }
}