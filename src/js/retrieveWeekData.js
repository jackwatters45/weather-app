import processWeekData from './processWeekData';
import API_KEY from './config';

export default async function getWeekData(location) {
  try {
    // fetch locations weather data
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${API_KEY}`,
    );
    const weatherData = await weatherResponse.json();
    return processWeekData(weatherData);
  } catch (e) {
    return e;
  }
}
