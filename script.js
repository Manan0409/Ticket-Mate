const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
  },
);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const mobileLinks = document.querySelectorAll(
  ".mobile-nav-link, .mobile-menu-actions a",
);

function closeMobileMenu() {
  mobileMenu.classList.remove("open");
  menuBtn.classList.remove("active");
  menuBtn.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

function openMobileMenu() {
  mobileMenu.classList.add("open");
  menuBtn.classList.add("active");
  menuBtn.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.contains("open");
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      closeMobileMenu();
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 880) {
      closeMobileMenu();
    }
  });
}
