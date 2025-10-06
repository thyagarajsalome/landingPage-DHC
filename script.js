document.addEventListener("DOMContentLoaded", () => {
  // --- THEME SWITCHER ---
  const themeSwitcher = document.getElementById("theme-switcher");
  const body = document.body;

  // Check for saved theme in localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    body.classList.add("dark-mode");
  }

  themeSwitcher.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    // Save the current theme to localStorage
    if (body.classList.contains("dark-mode")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.removeItem("theme");
    }
  });

  // --- LIGHTBOX ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  window.openLightbox = (imageSrc) => {
    lightbox.classList.add("active");
    lightboxImg.src = imageSrc;
  };

  window.closeLightbox = () => {
    lightbox.classList.remove("active");
  };

  // Close lightbox when clicking on the background
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });
});
