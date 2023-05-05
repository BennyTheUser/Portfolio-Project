let slideIndex = 1;
    showSlides(slideIndex);

function nextSlide(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
  }

