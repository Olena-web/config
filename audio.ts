const audio: HTMLAudioElement = new Audio();
const playBtn = document.querySelector<HTMLButtonElement>('.music');

let isPlay = false;

function playAudio() {
  audio.src = '../assets/audio/audio.mp3';
  audio.currentTime = 0;
  if (!isPlay && audio !== null) {
    playBtn?.classList.add('pick');
    void audio.play();
    isPlay = true;
  } else {
    audio.pause();
    playBtn?.classList.remove('pick');
    isPlay = false;
  }
}

if (playBtn) playBtn.addEventListener('click', playAudio);
