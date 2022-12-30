import API_KEY from '../config';

export default async (location) => {
  try {
    const request = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${API_KEY}`,
    );
    const locationData = await request.json();
    return await locationData[0];
  } catch (e) {
    return e;
  }
};
