/* eslint-disable comma-dangle */
import './styles/style.css';

const API_KEY = '8eefd61a1a12a4ebaa7a93aed80f367c';

function processData(rawData) {
  const data = {};
  console.log(rawData);

  data.location = rawData.name;
  data.weatherDescription = rawData.weather[0].description;
  data.temp = rawData.main.temp;
  data.high = rawData.main.temp_max;
  data.low = rawData.main.temp_min;
  data.feelsLike = rawData.main.feels_like;
  data.humidity = rawData.main.humidity;
  data.wind = rawData.wind.speed;
  // time
  // chance of rain
  console.log(data);
  return data;
}

// const exampleData = {
//   main: {
//     temp: 62.53,
//     feels_like: 62.47,
//     temp_min: 54.63,
//     temp_max: 82.92,
//     humidity: 85,
//   },
//   wind: {
//     speed: 7, // mph
//   },
//   clouds: {
//     all: 11,
//   },
//   name: 'Mill Valley',
//   cod: 200,
// };

async function getData(lat, lon) {
  try {
    // fetch locations weather data
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
    );
    const weatherData = await weatherResponse.json();
    return processData(weatherData);
  } catch (e) {
    return console.error(e);
  }
}

async function getCoordinates(location) {
  try {
    // fetch location data
    const locationResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${API_KEY}`
    );
    const locationData = await locationResponse.json();
    // retrieve latitude and longitude from data
    const { lat } = locationData[0];
    const { lon } = locationData[0];
    // get data using lat + lon
    return getData(lat, lon);
  } catch (e) {
    return console.error(e);
  }
}

const form = document.querySelector('.location-form');
const input = document.querySelector('.location-text');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getCoordinates(input.value);
});
