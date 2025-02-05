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

  document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  });

  document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });

  function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}vw)`;
    updateDots(); // Ajout ici pour synchroniser les indicateurs
  }

  function updateDots() {
    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
    });
  }

  // Mise à jour initiale des indicateurs
  updateDots();
});
