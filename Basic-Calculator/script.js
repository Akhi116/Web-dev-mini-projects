let calculation = localStorage.getItem('result') || '';
function updateCalculation(number) {
  calculation += number;
  calculate();
  localStorage.setItem('result', calculation);
}

function calculate() {
  document.querySelector('.js-result').innerHTML = calculation;
}

function handleKeyUp(event) {
  document.querySelector('.js-result').innerHTML = event.key;
}
