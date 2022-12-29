import processWeekData from './processWeekData';
import API_KEY from '../config';

export default async (location) => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=imperial&appid=${API_KEY}`,
    );
    const weatherData = await weatherResponse.json();
    return processWeekData(weatherData);
  } catch (e) {
    return e;
  }
};
