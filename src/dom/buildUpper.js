export default async (data) => {
  // Weather Description
  const weatherDescription = document.querySelector('.weather-description');
  weatherDescription.innerHTML = data.weatherDescription;

  // Location + time
  const locationText = document.querySelector('.location');
  locationText.innerHTML = `${data.name} - ${data.date}`;

  // Temperature
  const temp = document.querySelector('.weather-temp');
  temp.innerHTML = `${data.temp} °F`;

  // Image -> function to determine which Image
  const currentWeatherImg = document.querySelector('.current-weather-img');
  currentWeatherImg.src = data.weatherImg;

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
