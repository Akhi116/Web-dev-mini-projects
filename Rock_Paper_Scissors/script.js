
let score = JSON.parse(localStorage.getItem('score')) || {
  Wins: 0,
  Losses: 0,
  Ties: 0
};

updateScoreElement();
/*
normal method
if(score===null){
  score = {
  Wins: 0,
  Losses: 0,
  Ties: 0
};
}
*/

let isAutoPlaying = false;
let intervalId;

document.querySelector('.js-auto-stop')
  .addEventListener('click', () => autoPlay());

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickcomputerMove();
      result(playerMove);
    }, 1000);
    isAutoPlaying = true;
    document.querySelector('.js-auto-stop').innerText = 'Stop Play';
  }
  else {
    clearInterval(intervalId);
    isAutoPlaying = false;
    document.querySelector('.js-auto-stop').innerText = 'Auto Play';
  }
}

document.querySelector('.js-rock-btn')
  .addEventListener('click', () => result('rock'));

document.querySelector('.js-paper-btn')
  .addEventListener('click', () => result('paper'));

document.querySelector('.js-scissors-btn')
  .addEventListener('click', () => result('scissors'));


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r' || event.key === 'R') {
    result('rock');
  } else if (event.key === 'p' || event.key === 'P') {
    result('paper');
  } else if (event.key === 's' || event.key === 'S') {
    result('scissors');
  } else if (event.key === 'a' || event.key === 'A') {
    autoPlay();
  } else if (event.key === 'Backspace') {
    confimation();
  }
})

function result(yourMove) {
  const computerMove = pickcomputerMove();

  let result = '';

  if (yourMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.'
    }

  } else if (yourMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.'
    }

  } else {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.'
    }
  }


  if (result === 'You win.') {
    score.Wins += 1;
  } else if (result === 'You lose.') {
    score.Losses += 1;
  } else if (result === 'Tie.') {
    score.Ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();


  document.querySelector('.js-result').innerHTML = result;


  document.querySelector('.js-choosen').innerHTML = `you <img src="images/${yourMove}-emoji.png" alt=""> <img src="images/${computerMove}-emoji.png" alt=""> computer`;

}



function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.Wins}, Losses: ${score.Losses}, Ties: ${score.Ties}`;
}



document.querySelector('.reset-btn')
  .addEventListener('click', () => {
    confimation();
  })

function confimation(){
  document.querySelector('.js-confirm')
  .innerHTML = `Are you sure you want to reset the score?
  <button class="js-yes yes-btn">Yes</button>
  <button class="js-no no-btn">No</button>`;

  document.querySelector('.js-yes')
    .addEventListener('click', () => {
      reset();
      hideConfirmation();
    })

  document.querySelector('.js-no')
    .addEventListener('click', () => 
    hideConfirmation());
}

function hideConfirmation(){
  document.querySelector('.js-confirm')
    .innerHTML = '';
}



function reset() {
  score.Wins = 0;
  score.Losses = 0;
  score.Ties = 0;
  updateScoreElement();
  localStorage.removeItem('score');
  document.querySelector('.js-result').innerHTML = '';
}

function pickcomputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }

  return computerMove;
}

