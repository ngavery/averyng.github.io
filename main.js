
const typingEl = document.getElementById("avery");

function restartTyping() {
    typingEl.classList.remove("avery");

    void typingEl.offsetWidth;

    typingEl.classList.add("avery");
}

restartTyping();

setInterval(restartTyping, 8000);
