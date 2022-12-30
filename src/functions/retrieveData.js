import processData from './processData';
import API_KEY from '../config';
import getLocationData from './getLocationData';

export default async (location) => {
  const locationData = await getLocationData(location);
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${locationData.lat}&lon=${locationData.lon}&units=imperial&appid=${API_KEY}`,
    );
    const weatherData = await request.json();
    weatherData.name = locationData.name;
    return await processData(weatherData); // TODO is await necessary here
  } catch (e) {
    return e;
  }
};
