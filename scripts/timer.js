cronometer = document.getElementById('cronometer')
const minutesWork = localStorage.getItem('timer').split(',')[0]
const minutesPause = localStorage.getItem('timer').split(',')[1]
const session = localStorage.getItem('timer').split(',')[2]
cronometer.value = minutesWork < 10 ? '0' + minutesWork + ':00' : minutesWork + ':00'
var pause = false

function startTimer(session) {
  let timer = minutesWork * 60,
    minutes, seconds;
  setInterval(() => {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    cronometer.value = minutes + ":" + seconds;

    if (!pause && --timer < 0) {
      timer = minutesPause * 60;
    }
  }, 1000);
}

function toggle() {
  pause = !pause
}


window.onload = () => {
  startTimer(session);
  document.addEventListener('click', ({ target }) => {
    if (target.id == 'play_pause') {
      toggle()
    }
  })
};