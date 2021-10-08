const image = document.querySelector('img');
const songTitle = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
const prevBtn = document.getElementById('prev');
const playBtn = document.getElementById('play');
const nextBtn = document.getElementById('next');


// Music
const songs = [
    {
        nameImage: 'When I Grow Up',
        songTitle: 'When I Grow Up',
        artist: 'NF'
    },
    {
        nameImage: 'Godzilla',
        songTitle: 'Godzilla',
        artist: 'Eminem ft. Juice WRLD'
    },
    {
        nameImage: 'Emperors New Clothes',
        songTitle: 'Emperors New Clothes',
        artist: 'Panic! At The Disco'
    },
    {
        nameImage: '24k magic',
        songTitle: '24k magic',
        artist: 'Bruno Mars'
    },
];

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


// Render DOM
function loadSong(song) {
    songTitle.textContent = song.songTitle;
    artist.textContent = song.artist;
    music.src = `music/${song.nameImage}.mp3`;
    image.src = `img/${song.nameImage}.jpg`
}
//Current Song
let songIndex = 0;

//prev and next function
function prevSong() {
    songIndex--;
    if(songIndex < 0) songIndex = songs.length-1;
    loadSong(songs[songIndex])
    playSong()
}

function nextSong() {
    songIndex++;
    if(songIndex > songs.length-1) songIndex = 0;
    loadSong(songs[songIndex])
    playSong()
}




loadSong(songs[songIndex])

//PrevBtn and nextBtn event listener
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

