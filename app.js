// Slider 1: Fade Slider
let fadeIndex = 0;
function showNextFadeSlide() {
    const slides = document.querySelectorAll(".fade-slide");
    slides[fadeIndex].classList.remove("active");
    fadeIndex = (fadeIndex + 1) % slides.length;
    slides[fadeIndex].classList.add("active");
}
setInterval(showNextFadeSlide, 2000); // Change image every 2 seconds

// Slider 2: Horizontal Image Slider
const horizontalSlides = document.querySelector(".slides");
const horizontalSlideImages = document.querySelectorAll(".slide");
let horizontalIndex = 0;

document.getElementById("nextBtn").addEventListener("click", () => {
    horizontalIndex = (horizontalIndex + 1) % horizontalSlideImages.length;
    updateHorizontalSlide();
});

document.getElementById("prevBtn").addEventListener("click", () => {
    horizontalIndex = (horizontalIndex - 1 + horizontalSlideImages.length) % horizontalSlideImages.length;
    updateHorizontalSlide();
});

function updateHorizontalSlide() {
    horizontalSlides.style.transform = `translateX(-${horizontalIndex * 100}%)`;
}

// Slider 3: Number Carousel
const carouselTrack = document.querySelector(".carousel-track");
const carouselSlides = document.querySelectorAll(".carousel-slide");
let carouselIndex = 0;

setInterval(() => {
    carouselIndex = (carouselIndex + 1) % carouselSlides.length;
    carouselTrack.style.transform = `translateX(-${carouselIndex * 100}%)`;
}, 2000); // Carousel slides every 2 seconds

// Slider 4: Auto-Scroll Image Slider
const autoScrollSlides = document.querySelectorAll('.auto-slide');
let autoScrollIndex = 0;

function autoScroll() {
    autoScrollIndex = (autoScrollIndex + 1) % autoScrollSlides.length; // Loop back to the start
    const offset = -autoScrollIndex * (100 / 3); // Calculate offset
    document.querySelector('.auto-track').style.transform = `translateX(${offset}%)`;
}

setInterval(autoScroll, 3000); // Change slide every 3 seconds

// Slider 5: Vertical Slider
const verticalTrack = document.getElementById("verticalTrack");
const verticalSlides = document.querySelectorAll(".vertical-slide");
let verticalIndex = 0;

function nextVerticalSlide() {
    verticalIndex = (verticalIndex + 1) % verticalSlides.length;
    updateVerticalSlide();
}

function prevVerticalSlide() {
    verticalIndex = (verticalIndex - 1 + verticalSlides.length) % verticalSlides.length;
    updateVerticalSlide();
}

function updateVerticalSlide() {
    verticalTrack.style.transform = `translateY(-${verticalIndex * 100}px)`;
}

// Progress Slider (if applicable)
const progressSlider = document.getElementById("progressSlider");
const progressFill = document.getElementById("progressFill");

if (progressSlider) {
    progressSlider.addEventListener("input", () => {
        progressFill.style.width = `${progressSlider.value}%`;
    });
}
