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
//
// const target = document.querySelector('.animated-text');
//
// function handleIntersection(entries) {
//     entries.map((entry) => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//         }
//
//         else {
//             entry.target.classList.remove('visible');
//         }
//     })
// }
//
// const observer = new IntersectionObserver(handleIntersection);
//
// observer.observe(target);

// Menu
const menuToggle = document.querySelector('header span');
const menu = document.querySelector('.animated-menu');

menuToggle.addEventListener('click', function() {
    menu.classList.toggle('open');
})