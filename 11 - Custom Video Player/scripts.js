let isPlaying = false;
const video = document.querySelector('.viewer')

function handleButtonClick() {
  if (isPlaying) {
    video.pause()
  } else {
    video.play()
  }
  isPlaying = !isPlaying
}

document.querySelector('input[name=volume]').addEventListener('input', (e) => {
  video.volume = e.currentTarget.value
})

document.querySelector('input[name=playbackRate]').addEventListener('input', (e) => {
  video.playbackRate = e.currentTarget.value
})

