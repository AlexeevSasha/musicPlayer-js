const image = document.querySelector('img');
const songTitle = document.getElementById('title');
const songArtist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');

// Check if playing
let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    playBtn.classList.replace('fa-play', 'fa-pause')
    music.setAttribute('title', 'Pause');
    music.play();
};

// Pause
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace('fa-pause', 'fa-play')
    music.setAttribute('title', 'Play');
    music.pause();
};

//Play or Pause event listentr
playBtn.addEventListener('click', () => isPlaying ? pauseSong() : playSong());