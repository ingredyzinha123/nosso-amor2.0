document.getElementById("playMusic").addEventListener("click", function() {
    let audio = document.getElementById("audioPlayer");
    if (audio.paused) {
        audio.play();
        this.innerText = "⏸️ Pausar Música";
    } else {
        audio.pause();
        this.innerText = "💖 Tocar Música";
    }
});
