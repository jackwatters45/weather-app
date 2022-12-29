import processTodayData from './processTodayData';
import API_KEY from '../config';

export default async (location) => {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`,
    );
    const weatherData = await weatherResponse.json();
    return await processTodayData(weatherData);
  } catch (e) {
    return e;
  }
};
