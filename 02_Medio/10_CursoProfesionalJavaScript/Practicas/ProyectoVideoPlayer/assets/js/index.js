const video = document.querySelector("video");
const button = document.getElementById("accion");

const mediaPlayer = {
    media: video,
    play: function() {
        this.media.play();
    },
    pause: function() {
        this.media.pause();
    },
    togglePlay: function() {
        (this.media.paused)
            ? this.play()
            : this.pause();
    }
}

button.onclick = () => mediaPlayer.togglePlay();