const source = document.querySelector('.js-source');
const target = document.querySelector('.js-target');
const convertBtn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

const apiKey = '6b2c480792f1feb31ccb9a67';


async function getCurrency() {
  const userInput = document.querySelector('.js-amount');
  const amount = parseFloat(userInput.value);
  const from = source.value;
  const to = target.value;  
 
  if (!amount) {
    alert("Please enter Amount..!!!");
    return;
  }

  
  const apiUrl = `https://open.er-api.com/v6/latest/USD?apikey=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (response.ok) {
      const exchangeRates = data.rates;
      convertCurrency(amount,from,to,exchangeRates);

    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error('Error fetching currency data: ', error);
    alert('Unable to fetch currency data. Please try again later..')
  }
}

function convertCurrency(amount,from,to,exchangeRates){
  const source = exchangeRates[from];
  const target = exchangeRates[to];
  if(target && source){
    const convertedCurrency = (amount / source) * target;
    const html = `
      <p class="cur-result">${convertedCurrency.toFixed(2)} ${to}</p>
    `;

    result.innerHTML = html;
  } else {
    alert('Please choose source and target currencies...to convert!!');
  }


}


convertBtn.addEventListener('click', () => {
  getCurrency();
});