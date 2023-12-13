const scores = JSON.parse(localStorage.getItem('scores')) || {
  wins: 0,
  losses: 0
};




document.querySelector('.js-head-button')
  .addEventListener('click', () => playGame('heads'));


document.querySelector('.js-tail-button')
  .addEventListener('click', () => playGame('tails'));



function playGame(guess) {
  const number = Math.random();
  const computerMove = number < 0.5 ? 'heads' : 'tails';
  const result = guess === computerMove ? 'You Win!' : 'You lose!';

  document.querySelector('.js-result').innerHTML = result;

  if (guess === computerMove) {
    scores.wins++;
  } else {
    scores.losses++;
  }

  localStorage.setItem('scores', JSON.stringify(scores));
}

document.querySelector('.js-reset-button')
  .addEventListener('click', () => {
    document.querySelector('.js-result').innerHTML = '';
  });