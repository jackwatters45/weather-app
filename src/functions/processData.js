import buildLower from '../dom/buildLower';
import buildUpper from '../dom/buildUpper';

export default (rawData) => {
  // CURRENT
  const currentData = {};

  currentData.name = rawData.name;
  currentData.weatherDescription = rawData.current.weather[0].description;
  currentData.temp = rawData.current.temp.toFixed(1);
  currentData.feelsLike = rawData.current.feels_like.toFixed(1);
  currentData.humidity = rawData.current.humidity.toFixed(0);
  currentData.wind = rawData.current.wind_speed.toFixed(1);
  currentData.weatherImg = rawData.current.weather[0].main;

  // format time
  const date = new Date();
  const oldHour = date.getUTCHours();
  const timeChange = rawData.timezone_offset / 3600;
  const newTime = timeChange + oldHour;
  date.setHours(newTime);
  currentData.date = date.toLocaleString();

  // Precipitation
  if (rawData.current.rain) {
    currentData.precipitation = rawData.current.rain['1h'].toFixed(1);
  } else if (rawData.current.snow) {
    // TODO add something for snow img
    currentData.precipitation = rawData.current.snow['1h'].toFixed(1);
  } else currentData.precipitation = 0;

  // WEEK
  const weekData = [];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  rawData.daily.forEach((day) => {
    const dayData = {};
    dayData.max = day.temp.max.toFixed(1);
    dayData.min = day.temp.min.toFixed(1);

    dayData.weather = day.weather[0].main;
    const dayNum = new Date(day.dt * 1000).getDay();
    dayData.day = days[dayNum];

    weekData.push(dayData);
  });

  buildUpper(currentData);
  buildLower(weekData);
};
