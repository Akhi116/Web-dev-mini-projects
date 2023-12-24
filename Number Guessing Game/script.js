const startBtn = document.querySelector('.js-start-btn');
const instruction = document.querySelector('.js-instruction');
const resetBtn = document.querySelector('.js-reset-btn');
const playerInput = document.querySelector('.js-player-input');
const result = document.querySelector('.js-result');

let timeoutId;
let count = 0;


startBtn.addEventListener('click', () => {
  instruction.innerHTML = 'The Computer is choosing the random number';


  timeoutId = setTimeout(() => {
    generateRandom();
    instruction.innerHTML = 'Guess the Number between 0 and 100';
    if (playerInput.classList.contains('visible-input-box')) {
      playerInput.classList.remove('visible-input-box');
    }
  }, 1000);
});

resetBtn.addEventListener('click', () => {
  clearTimeout(timeoutId);
  instruction.innerHTML = '';
  playerInput.value = '';
  playerInput.classList.add('visible-input-box');
});


function countGuesses() {
  return count += 1;
}


let randomNumber;
function generateRandom() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
}


function guessTheNumber() {
  let playerGuess = Number(playerInput.value);

  if (playerGuess === '') {
    result.innerHTML = 'Enter the number...'
  }

  if (playerGuess === randomNumber) {
    result.innerHTML = `You Won!!! on count: ${countGuesses()}`;
    playerInput.value = '';
    count = 0;
    return
  } else if (playerGuess > randomNumber && (playerGuess >= 0 && playerGuess <= 100)) {
    countGuesses();
    result.innerHTML = 'Guess the smaller number..!!'
  } else if (playerGuess < randomNumber && (playerGuess >= 0 && playerGuess <= 100)) {
    countGuesses();
    result.innerHTML = 'Guess the greater number..!!'
  } else if (playerGuess < 0 || playerGuess > 100) {
    result.innerHTML = 'Enter the number between 0 and 99 only..';
  }
}


let timeoutId1;

playerInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    guessTheNumber();
  }

  if (timeoutId1) {
    clearTimeout(timeoutId1);
  }

  timeoutId1 = setTimeout(() => {
    result.innerHTML = '';
  }, 3000);
});




