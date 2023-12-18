const binaryValue = document.querySelector('.js-binary-value');

document.querySelector('.js-calculate-btn')
  .addEventListener('click', () => {
    let bValue = binaryValue.value;
    if(valid(bValue)){
      convertToDecimal(bValue);
    }
  })
  
  
  function valid(bValue) {
    let isValid = true;


    for (let i = 0; i < bValue.length; i++) {
      if (bValue[i] !== '0' && bValue[i] !== '1') {
        alert('Binary Number\'s must contain 0\'s and 1\'s. For Example: 100101');
        isValid = false;
        break;
      }
    }

    return isValid;
  }

function convertToDecimal(bValue) {
  let n = 0;
  let decimalValue = 0;
  for (let i = bValue.length-1; i >=0 ; i--) {
    decimalValue += parseInt(bValue[i]) * Math.pow(2,n);
    n++;
  }
  
  document.querySelector('.js-decimal-value')
     .innerHTML = decimalValue;
}



