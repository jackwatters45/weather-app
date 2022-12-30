import API_KEY from '../config';

export default async (location) => {
  try {
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${API_KEY}`, {
      mode: 'cors',
    });

    const locationData = await request.json();
    return await locationData;
  } catch (e) {
    return e;
  }
};
