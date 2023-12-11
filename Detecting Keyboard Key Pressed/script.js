const input = document.querySelector('.js-input');

input.addEventListener('keydown',(event) => display(event));

function display(event){
  const result = document.querySelector('.js-result');
    result.innerHTML = event.key;
}

document.querySelector('.js-reset')
  .addEventListener('click', () => {
    document.querySelector('.js-result').innerHTML = '';
  });