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

  // --- MOBILE MENU ---
  const menuIcon = document.getElementById("menu-icon");
  const nav = document.querySelector(".nav");

  menuIcon.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // --- LIGHTBOX ---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const galleryImages = document.querySelectorAll(".image-gallery img");

  galleryImages.forEach((img) => {
    img.addEventListener("click", () => {
      const imageSrc = img
        .getAttribute("onclick")
        .replace("openLightbox('", "")
        .replace("')", "");
      openLightbox(imageSrc);
    });
  });

  window.openLightbox = (imageSrc) => {
    lightbox.classList.add("active");
    lightboxImg.src = "./image/" + imageSrc;
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
