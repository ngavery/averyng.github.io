function hidePreloader() {
  const preloader = document.querySelector(".preloader");
  preloader.style.transition = "opacity 0.5s ease";
  preloader.style.opacity = "0";
  setTimeout(() => {
    preloader.style.display = "none";
    document.body.classList.remove("loading");
  }, 500);
}

// Wait for window load
window.addEventListener("load", () => {
  const keyText = document.querySelector("#avery");

  if (!keyText) {
    hidePreloader();
    return;
  }

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {

      if (document.fonts) {
        document.fonts.ready.then(() => {
          hidePreloader();
        });
      } else {
        hidePreloader();
      }
    });
  });
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

