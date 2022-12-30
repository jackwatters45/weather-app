import processData from './processData';
import WEATHER_API_KEY from '../config';
import getLocationData from './getLocationData';

export default async (location) => {
  const locationData = await getLocationData(location);
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${locationData.coord.lat}&lon=${locationData.coord.lon}&units=imperial&appid=${WEATHER_API_KEY}`,
      {
        mode: 'cors',
      },
    );
    const weatherData = await request.json();
    weatherData.name = locationData.name;
    return await processData(weatherData);
  } catch (e) {
    return e;
  }
};
