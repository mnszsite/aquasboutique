// menu toggle / hamburger menu
// Function to toggle the navigation menu
function toggleMenu() {
    const navMenu = document.getElementById("nav-menu");
    navMenu.classList.toggle("active");
}

// Function to close the navigation menu if clicked outside
function closeMenu(event) {
    const navMenu = document.getElementById("nav-menu");
    const hamburger = document.querySelector('.hamburger');
    
    // Check if the click is outside the nav menu and hamburger icon
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
        navMenu.classList.remove("active");
    }
}

// Event listeners
document.addEventListener('click', closeMenu);

// caousel for the home page 

// Initialize current indices for each carousel
let currentIndexNew = 0;
let currentIndexTrending = 0;

// Function to update the carousel display based on the current index
function updateCarousel(index, carouselClass) {
    const items = document.querySelectorAll(`.${carouselClass} .carousel-item`);
    const indicators = document.querySelectorAll(`.${carouselClass} .carousel-indicators span`);
    
    // Move items based on the current index
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`; // Slide effect
        indicators[i].classList.remove('active'); // Remove active class from all indicators
    });
    
    // Add active class to the current indicator
    indicators[index].classList.add('active');
}

// Add event listeners to indicators for the New Arrivals carousel
document.querySelectorAll('.new-arrivals .carousel-indicators span').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexNew = index; // Update the current index for New Arrivals
        updateCarousel(currentIndexNew, 'new-arrivals'); // Update the carousel display
    });
});

// Add event listeners to indicators for the Trending Now carousel
document.querySelectorAll('.trending .carousel-indicators span').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexTrending = index; // Update the current index for Trending Now
        updateCarousel(currentIndexTrending, 'trending'); // Update the carousel display
    });
});

// Automatic transition for New Arrivals carousel (optional)
setInterval(() => {
    const newArrivalsItems = document.querySelectorAll('.new-arrivals .carousel-item');
    currentIndexNew = (currentIndexNew + 1) % newArrivalsItems.length; // Use the length of the items array
    updateCarousel(currentIndexNew, 'new-arrivals'); // Update display
}, 5000); // Change slide every 5 seconds

// Automatic transition for Trending Now carousel (optional)
setInterval(() => {
    const trendingItems = document.querySelectorAll('.trending .carousel-item');
    currentIndexTrending = (currentIndexTrending + 1) % trendingItems.length; // Use the length of the items array
    updateCarousel(currentIndexTrending, 'trending'); // Update display
}, 5000); // Change slide every 5 seconds




// testimonials
// Initialize current index for testimonials carousel
let currentIndexTestimonials = 0;

// Function to update the testimonials display based on the current index
function updateTestimonialsCarousel(index) {
    const testimonials = document.querySelectorAll('.testimonials .testimonial-item');
    const indicators = document.querySelectorAll('.testimonials .carousel-indicators span');

    // Move items based on the current index
    testimonials.forEach((testimonial, i) => {
        testimonial.style.transform = `translateX(-${index * 100}%)`; // Slide effect
        indicators[i].classList.remove('active'); // Remove active class from all indicators
    });

    // Add active class to the current indicator
    indicators[index].classList.add('active');
}

// Add event listeners to indicators for testimonials carousel
document.querySelectorAll('.testimonials .testimony-carousel-indicators span').forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndexTestimonials = index; // Update the current index for testimonials
        updateTestimonialsCarousel(currentIndexTestimonials); // Update the display
    });
});

// Automatic transition for testimonials carousel
setInterval(() => {
    currentIndexTestimonials = (currentIndexTestimonials + 1) % document.querySelectorAll('.testimonial-item').length;
    updateTestimonialsCarousel(currentIndexTestimonials); // Update display
}, 5000); // Change slide every 5 seconds
