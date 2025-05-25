
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
