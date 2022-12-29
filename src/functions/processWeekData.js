import buildLower from '../dom/buildLower';
import determineWeatherImg from './determineWeatherImg';

export default async (rawData) => {
  const data = {};

  for (let i = 0; i < 5; i += 1) {
    const index = i * 8;

    data[i] = {};
    data[i].min = rawData.list[index].main.temp_min.toFixed(1);
    data[i].max = rawData.list[index].main.temp_max.toFixed(1);

    // img type
    const weatherType = rawData.list[index].weather[0].main;
    data[i].weatherImg = determineWeatherImg(weatherType);

    // Date needs to be formatted
    const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    const date = rawData.list[index].dt_txt.split(' ')[0];
    data[i].date = days[new Date(date).getDay()];
  }
  return buildLower(data);
};
