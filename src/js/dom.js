export async function buildUpper(data) {
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
}

export async function buildLower(data) {
  const values = Object.values(data);
  const section = document.querySelector('.bottom-content');

  values.forEach((key) => {
    const card = document.createElement('div');
    card.classList.add('temp-card');

    // get day of week from date
    const day = document.createElement('div');
    day.classList.add('day');
    day.innerHTML = key.date.toLocaleString();
    card.appendChild(day);
    // add max
    const high = document.createElement('div');
    high.classList.add('high');
    high.innerHTML = `${key.max} °F`;
    card.appendChild(high);

    // add min
    const low = document.createElement('div');
    low.classList.add('low');
    low.innerHTML = `${key.min} °F`;
    card.appendChild(low);

    // img thing
    const img = document.createElement('img');
    img.src = key.weatherImg;
    card.appendChild(img);

    section.appendChild(card);
  });
}
