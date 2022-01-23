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

const aboutImg = document.querySelector('.about-us img');
const customerCards = document.querySelectorAll('.customers-cards-wrapper-sticky li');
const serviceCards = document.querySelectorAll('.services-cards-wrapper li');

function handleIntersection(entries) {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    })
}

const observer = new IntersectionObserver(handleIntersection);

observer.observe(aboutImg);

customerCards.forEach(customerCard => {
    observer.observe(customerCard)
});

serviceCards.forEach(serviceCard => {
    observer.observe(serviceCard)
});

// Menu
const menuToggle = document.querySelector('header span');
const menu = document.querySelector('.animated-menu');

menuToggle.addEventListener('click', function () {
    menu.classList.toggle('open');
})