const CURRENT_VERSION = "1.0.1";

// Check stored version
const storedVersion = localStorage.getItem("siteVersion");
const firstVisitOrNewVersion = storedVersion !== CURRENT_VERSION;

// Store the current version
localStorage.setItem("siteVersion", CURRENT_VERSION);

// Handle preloader logic
window.addEventListener("load", function () {
  const preloader = document.querySelector(".preloader");

  if (firstVisitOrNewVersion) {
    // Show animation (fade out)
    preloader.style.transition = "opacity 2s ease";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  } else {
    // Immediately hide preloader without animation
    preloader.style.display = "none";
  }
});

const typingEl = document.getElementById("avery");

function restartTyping() {
    typingEl.classList.remove("avery");

    void typingEl.offsetWidth;

    typingEl.classList.add("avery");
}

restartTyping();

setInterval(restartTyping, 12000);

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu .item").forEach((item) =>
  item.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

document.addEventListener("click", (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

