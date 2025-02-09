// FONCTION POUR LE BURGER
function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("hidden");

  // Fade in/out effect
  if (menu.classList.contains("hidden")) {
      menu.style.opacity = 0;
  } else {
      menu.style.opacity = 1;
  }
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
    }, 5000);
  }

  carousel.addEventListener("transitionend", resetPosition);

  startAutoSlide();
});

// CODE POUR LA PAGE CONNEXION (le switch)
document.addEventListener("DOMContentLoaded", () => {
  const switchButton = document.getElementById("switch-button");
  const switchText = document.getElementById("switch-text");
  const switchContainer = document.querySelector(".switch");
  const inscriptionForm = document.querySelector(".inscription-form");
  const connexionForm = document.querySelector(".already-registered");

  switchContainer.addEventListener("click", () => {
    if (switchContainer.classList.contains("active")) {
      // Passe à la section d'inscription
      switchContainer.classList.remove("active");
      switchText.textContent = "Déjà inscrit ?";
      switchButton.textContent = "Connectez-vous !";
      inscriptionForm.style.display = "block";
      connexionForm.style.display = "none";
    } else {
      // Passe à la section de connexion
      switchContainer.classList.add("active");
      switchText.textContent = "Pas encore de compte ?";
      switchButton.textContent = "Inscrivez-vous !";
      inscriptionForm.style.display = "none";
      connexionForm.style.display = "block";
    }
  });

  // Initialement, montrer le formulaire d'inscription
  inscriptionForm.style.display = "block";
  connexionForm.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function () {
  const expandButtons = document.querySelectorAll(".expand-button");

  expandButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const details = this.nextElementSibling;
      details.classList.toggle("active");
    });
  });
});

//CODE POUR LA PAGE PRATICIEN
// Montrer le détail des informations des tarifs
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    item.querySelector(".faq-question").addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });
});