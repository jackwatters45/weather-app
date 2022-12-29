export default async (data) => {
  // Top Left Section
  // Weather Description
  const weatherDescription = document.querySelector('.weather-description');
  weatherDescription.innerHTML = data.weatherDescription;

  // Location + time
  const location = document.querySelector('.location');
  location.innerHTML = `${data.location} - ${data.date}`;

  // Temperature
  const temp = document.querySelector('.weather-temp');
  temp.innerHTML = `${data.temp} °F`;

  // Image -> function to determine which Image
  const currentWeatherImg = document.querySelector('.current-weather-img');
  currentWeatherImg.src = data.weatherImg;

  // Top Right Section
  // feels like
  const feelsLike = document.querySelector('.feels-like');
  feelsLike.innerHTML = `${data.feelsLike} °F`;

  // humidity
  const humidity = document.querySelector('.humidity');
  humidity.innerHTML = `${data.humidity}%`;

  // precipitation
  const precipitation = document.querySelector('.precipitation');
  precipitation.innerHTML = `${data.precipitation} mm`;

  // Wind Speed
  const wind = document.querySelector('.wind');
  wind.innerHTML = `${data.wind} mph`;
};
