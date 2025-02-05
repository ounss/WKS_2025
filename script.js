// FONCTION POUR LE BURGER
function toggleMenu() {
  const responsive = document.querySelector(".responsive");
  const burgerMenu = document.querySelector(".burger-menu");
  burgerMenu.classList.toggle("active");
  responsive.classList.toggle("active");
}


// FONCTION POUR LE DEFILEMENT DE L'HERO
document.addEventListener("DOMContentLoaded", function () {
  let index = 0;
  const slides = document.querySelectorAll(".slide");
  const carousel = document.querySelector(".carousel");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = slides.length;
  let interval;

  // Clone first and last slides for infinite effect
  const firstClone = slides[0].cloneNode(true);
  const lastClone = slides[totalSlides - 1].cloneNode(true);

  carousel.appendChild(firstClone);
  carousel.insertBefore(lastClone, slides[0]);

  const allSlides = document.querySelectorAll(".slide");
  const adjustedTotalSlides = allSlides.length;
  let currentIndex = 1;

  // Ensure proper alignment at the start
  carousel.style.transition = "none";
  carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
  setTimeout(() => {
    carousel.style.transition = "transform 1s ease-in-out";
  }, 50);

  function updateCarousel() {
    carousel.style.transition = "transform 1s ease-in-out";
    carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
  }

  function nextSlide() {
    currentIndex++;
    updateCarousel();
  }

  function prevSlide() {
    currentIndex--;
    updateCarousel();
  }

  function resetPosition() {
    if (currentIndex === adjustedTotalSlides - 1) {
      setTimeout(() => {
        carousel.style.transition = "none";
        currentIndex = 1;
        carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
        setTimeout(() => carousel.style.transition = "transform 1s ease-in-out", 50);
      }, 1000);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        carousel.style.transition = "none";
        currentIndex = adjustedTotalSlides - 2;
        carousel.style.transform = `translateX(-${currentIndex * 100}vw)`;
        setTimeout(() => carousel.style.transition = "transform 1s ease-in-out", 50);
      }, 1000);
    }
    updateDots();
  }

  function updateDots() {
    let visibleIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === visibleIndex);
    });
  }

  document.querySelector(".next").addEventListener("click", () => {
    nextSlide();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    prevSlide();
  });

  function startAutoSlide() {
    interval = setInterval(() => {
      nextSlide();
    }, 3000);
  }

  carousel.addEventListener("transitionend", resetPosition);

  startAutoSlide();
});

