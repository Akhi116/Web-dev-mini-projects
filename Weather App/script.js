const apiKey = '80ef0d068cc5bc230b06fbd3257d09bf';

const getBtn = document.querySelector('.js-btn');
const result = document.querySelector('.js-result');

async function getWeather() {
  const inputValue = document.querySelector('.js-input');
  const cityName = inputValue.value;

  if (!cityName) {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      alert(`Error: ${data.message}`);
    }
  }
  catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Unable to fetch weather data. Please try again later.');
  }
}

function displayWeather(data) {
  const weatherInfo = document.querySelector('.js-result');
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const name = data.name;
  const wind = data.wind.speed;

  const html = `<p>${temperature} &deg;C</p>
  <p>${name}</p>
  <p>${description}</p>
  <p>Wind Speed: ${wind} km/hr</p>`;

  weatherInfo.innerHTML = html;
}


getBtn.addEventListener('click', () => {
  getWeather();
})

const inputValue = document.querySelector('.js-input');

inputValue.addEventListener('keydown', event => {
  if (event.key === 'Enter') {
    getWeather();
  }
})



