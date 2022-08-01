let isPlaying = false
let isScrolling = false
const video = document.querySelector('.viewer')
const progressFilled = document.querySelector('.progress__filled')
const progress = document.querySelector('.progress')

function handleButtonClick() {
  if (isPlaying) {
    video.pause()
  } else {
    video.play()
  }
  isPlaying = !isPlaying
}

function goBack() {
  video.currentTime -= 10
}

function goForward() {
  video.currentTime += 25
}

document.querySelector('input[name=volume]').addEventListener('input', (e) => {
  video.volume = e.currentTarget.value
})

document.querySelector('input[name=playbackRate]').addEventListener('input', (e) => {
  video.playbackRate = e.currentTarget.value
})

video.addEventListener('timeupdate', (e) => {
  const percent = video.duration / 100
  console.log(e.currentTarget.currentTime / percent)
  progressFilled.style.width = `${e.currentTarget.currentTime / percent}%`
})

progress.addEventListener('mousedown', (e) => {
  const percent = video.duration / 100
  video.currentTime = e.layerX / e.currentTarget.clientWidth * 100 * percent
  isScrolling = true
})

progress.addEventListener('mouseup', (e) => {
  isScrolling = false
})

progress.addEventListener('mousemove', (e) => {
  const percent = video.duration / 100
  if (isScrolling) {
    video.currentTime = e.layerX / e.currentTarget.clientWidth * 100 * percent
    progressFilled.style.width = `${e.layerX}px`
  }
})