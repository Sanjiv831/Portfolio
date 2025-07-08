// Fade in sections on scroll
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
  });

  function reveal() {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.style.transition = "all 0.6s ease-out";
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  }

  window.addEventListener("scroll", reveal);
  reveal();
});

// Dark mode toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
