const randomLength = 6;
let randomNumber = '';

document.querySelector('.js-generate-btn')
  .addEventListener('click', () => generator());

document.querySelector('.js-reset')
  .addEventListener('click', () => {document.querySelector('.js-result')
  .innerHTML = ''});


function generator(){
  for(let i = 0; i<randomLength ; i++){
    const randomGenerator = Math.floor(Math.random() * 10);
    randomNumber+=randomGenerator;
  }

  document.querySelector('.js-result')
  .innerHTML =  randomNumber;
  randomNumber = '';
}