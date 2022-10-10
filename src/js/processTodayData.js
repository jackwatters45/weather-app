import { buildUpper } from './dom';
import determineWeatherImg from './determineWeatherImg';

export default async function processTodayData(rawData) {
  const data = {};
  try {
    data.location = rawData.name;
    data.weatherDescription = rawData.weather[0].description;
    data.temp = rawData.main.temp.toFixed(1);
    data.feelsLike = rawData.main.feels_like.toFixed(1);
    data.humidity = rawData.main.humidity.toFixed(0);
    data.wind = rawData.wind.speed.toFixed(1);

    // img type
    const weatherType = rawData.weather[0].main;
    data.weatherImg = determineWeatherImg(weatherType);

    // format time
    const date = new Date();
    const oldHour = date.getUTCHours();
    const timeChange = rawData.timezone / 3600;
    const newTime = timeChange + oldHour;
    date.setHours(newTime);
    data.date = date.toLocaleString();

    // Precipitation
    if (rawData.precipitation) {
      data.precipitation = rawData.precipitation.value.toFixed(1);
    } else {
      data.precipitation = 0;
    }
    return await buildUpper(data);
  } catch (e) {
    return e;
  }
}
