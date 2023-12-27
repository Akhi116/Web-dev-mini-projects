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

    console.log(data);

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
  const img = data.weather[0].main;
  const name = data.name;
  const humidity = data.main.humidity;
  const wind = data.wind.speed;

  const html = `<div class="image">
  <img src="images/${img}.png">
</div>
<div class="main-result">
  <p class="temp">${temperature}&deg;C</p>
  <div class="name">
    <p class="city-name">${name}</p>
    <p class="description">${description}</p>
  </div>
  
  <div class="humi-wind">
    <div class="flex">
      <img src="images/humidity.png" class="img">
      <p>Humidity: ${humidity}</p>
    </div>
    <div class="flex">
      <img src="images/wind.png" class="img">
      <p>Wind Speed: ${wind} km/hr</p>
    </div>
    
  </div>
</div>`;

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



