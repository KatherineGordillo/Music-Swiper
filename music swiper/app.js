const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {
    title: "Absolute Territory",
    name: "Ken Ashcorp",
    source:
      "./songs/Absolute Territory.mp3",
  },
  {
    title: "I'm Your Slave",
    name: "Ken Ashcorp",
    source:
      "./songs/Ken Ashcorp - Im Your Slave.mp3",
  },
  {
    title: "Gogo Dancer",
    name: "Lana Del Rey",
    source:
      "./songs/Go Go Dancer - Lana Del Rey.mp3",
  },
  {
    title: "Carmen",
    name: "Lana Del Rey",
    source:
      "./songs/Lana Del Rey - Carmen (Demo).mp3",
  },
  {
    title: "Party Like A Millionare",
    name: "Millionares",
    source:
      "./songs/Party Like a Millionaire.mp3",
  },

  {
    title: "Sleazy",
    name: "Kesha - SmarterChild Remix",
    source:
      "./songs/Kesha - Sleazy (SmarterChild Remix).mp3",
  },
  {
    title: "Ooh La La",
    name: "Britney Spears",
    source:
      "./songs/Britney Spears   Ooh La La (Extended Smurfs 2 Mix).mp3",
  },
];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".Swiper", {
    effect: "coverflow",
    centeredSlides: true,
    initialSlide: 3,
    slidesPerView: "auto",
    allowTouchMove: false,
    spaceBetween: 40,
    coverflowEffect: {
      rotate: 25,
      stretch: 0,
      depth: 50,
      modifier: 1,
      slideShadows: false
    },
    navigation: {
      nextEl: ".forward",
      prevEl: ".backward"
    }
  });

