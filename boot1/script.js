// script.js

let slideIndex = 1;

// Open the lightbox
function openLightbox() {
    document.getElementById("lightbox").style.display = "block";
}

// Close the lightbox
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Change slide
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Show the current slide
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Display the selected slide and hide the others
function showSlides(n) {
    let slides = document.getElementsByClassName("lightbox-slide");

    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Display the selected slide
    slides[slideIndex - 1].style.display = "block";
}
