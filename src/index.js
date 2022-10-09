/* eslint-disable comma-dangle */
import './styles/style.css';

const API_KEY = '8eefd61a1a12a4ebaa7a93aed80f367c';

// TODO process the data once I know what I need
function processData(data) {
  console.log(data);
  // precipitstion
}

async function getData(lat, lon) {
  try {
    // fetch locations weather data
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`
    );
    const weatherData = await weatherResponse.json();
    return processData(weatherData);
  } catch {
    return console.error();
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
  } catch {
    return console.error();
  }
}

getCoordinates('mill valley');
