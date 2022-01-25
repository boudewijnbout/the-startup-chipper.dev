// Define header elements
const navbar = document.querySelector('header');
const svg = document.querySelector('header svg');

// On scroll change navbar background
window.onscroll = function () {

    // If window scroll is more then 0px
    if (window.pageYOffset > 0) {

        // Add classes
        navbar.classList.add('scrolled');
        svg.classList.add('toggle');
    } else {

        // Remove classes
        navbar.classList.remove('scrolled');
        svg.classList.remove('toggle');
    }
}

// Define elements for scroll animations
const aboutImg = document.querySelector('.about-us img');
const customerCards = document.querySelectorAll('.customers-cards-wrapper-sticky li');
const serviceCards = document.querySelectorAll('.services-cards-wrapper li');

// Create a new intersection function
function handleIntersection(entries) {

    // Map all the entries to 1 entry
    entries.map((entry) => {

        // Check if the entry is visible
        if (entry.isIntersecting) {

            // Add the visible class for the animation
            entry.target.classList.add('visible');
        } else {

            // Remove the visible class for the animation
            entry.target.classList.remove('visible');
        }
    })
}

// Register a new observer instance
const observer = new IntersectionObserver(handleIntersection);

// Observe the aboutImg
observer.observe(aboutImg);

// Loop all the customerCards to 1 single item
customerCards.forEach(customerCard => {
    observer.observe(customerCard)
});

// Loop all the serviceCards to 1 single item
serviceCards.forEach(serviceCard => {
    observer.observe(serviceCard)
});

// Define animated menu elements
const menuToggle = document.querySelector('header span');
const menu = document.querySelector('.animated-menu');

// Create a click listener to toggle states
menuToggle.addEventListener('click', function () {

    // Add the classes needed for animating the menu
    menu.classList.toggle('open');
    navbar.classList.add('scrolled');

    // Add scrolling-disabled class for the body to prevent vertical scrolling
    document.body.classList.toggle('scrolling-disabled');
})

const navLinks = document.querySelectorAll('.animated-wrapper-left ul li');

console.log(navLinks);

navLinks.forEach((navLink, index) => {
    navLink.addEventListener('click', (e) => {
        menu.classList.remove('open');

        // Active body scrolling again
        document.body.classList.toggle('scrolling-disabled');
    })
})