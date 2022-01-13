const navbar = document.querySelector('header');
const svg = document.querySelector('header svg');

window.onscroll = function () {
    if (window.pageYOffset > 0) {
        navbar.classList.add('scrolled');
        svg.classList.add('toggle');
    } else {
        navbar.classList.remove('scrolled');
        svg.classList.remove('toggle');
    }
}

const darkmodeToggle = document.querySelector('.darkmode-switch');

darkmodeToggle.addEventListener('click', function () {

    // Header
    document.querySelector('header .btn-secondary').classList.toggle('dark');

    // Banner
    document.querySelector('.banner').classList.toggle('dark');
    document.querySelector('.banner h1').classList.toggle('dark');
    document.querySelector('.test').classList.toggle('dark');
    document.querySelector('.banner a').classList.toggle('dark');
});