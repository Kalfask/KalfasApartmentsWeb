// Simple slider logic
const slides = document.querySelector('.slides');
const imagesCount = slides.children.length;
let currentIndex = 0;

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % imagesCount;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + imagesCount) % imagesCount;
  updateSlide();
}

// Language switch example: redirects to URL with language param or page (dummy)
function setLanguage(lang) {
    window.location.href = window.location.pathname.replace(/-(en|gr)\.html$/, `-${lang}.html`);
}


  const hamburger = document.getElementById("nav-hamburger");
const navMenu = document.querySelector(".navbar ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  // Εναλλαγή συμβόλου
  if (navMenu.classList.contains("show")) {
    hamburger.innerHTML = '&times;'; // ✕
    hamburger.style.color = 'white'; 
  } else {
    hamburger.innerHTML = '&#9776;'; // ☰
  }
});


