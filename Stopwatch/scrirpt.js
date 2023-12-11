const stopWatch = JSON.parse(localStorage.getItem('time'))|| {
  minutes: 0,
  seconds: 0,
  milliSeconds: 0
}

onLoad();

let intervalId;

let isCounting = false;

const buttonElem = document.querySelector('.js-play-btn');
const isClass = document.querySelector('.js-time');

function startCount() {
  if (!isCounting) {
    intervalId = setInterval(updateStopWatch, 1);
    buttonElem.innerHTML = `Stop`;
    if(!isClass.classList.contains('.blink')){
      isClass.classList.remove('blink');
    }
  } else {
    clearInterval(intervalId);
    if(!isClass.classList.contains('.blink')){
      isClass.classList.add('blink');
    }
    buttonElem.innerHTML = `Start`;
  }
  isCounting = !isCounting;
  
}

function updateStopWatch() {
  stopWatch.milliSeconds+=1;
  if (stopWatch.milliSeconds >= 100) {
    stopWatch.milliSeconds = 0;
    stopWatch.seconds++;
    if (stopWatch.seconds === 60) {
      stopWatch.seconds = 0;
      stopWatch.minutes++;
    }
  } 
  onLoad();
}


document.querySelector('.js-play-btn')
  .addEventListener('click', () => {
    startCount();
  })

function onLoad() {
  document.querySelector('.js-time')
    .innerHTML = `${pad(stopWatch.minutes)}:${pad(stopWatch.seconds)}.${pad(stopWatch.milliSeconds)}`;

    savedToStorage();
}

function savedToStorage(){
  localStorage.setItem('time', JSON.stringify(stopWatch));
}


document.querySelector('.js-reset-btn')
  .addEventListener('click', () => {
    reset();
  })

function reset(){
  stopWatch.milliSeconds = 0;
  stopWatch.seconds = 0;
  stopWatch.minutes = 0;
  clearInterval(intervalId);
  isCounting = false;
  onLoad();
  isClass.classList.remove('blink');
  document.querySelector('.js-play-btn').innerHTML = `Start`;
}


function pad(value){
  return value < 10 ? `0${value}` : value;
}

function pad(value){
  return value < 99 ? (value < 10) ? `0${value}` : value : value;
}


