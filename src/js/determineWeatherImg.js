import cloudy from '../assets/img/cloudy.svg';
import sunny from '../assets/img/sunny.svg';
import rainy from '../assets/img/rain.svg';

export default function determineWeatherImg(weatherDesc) {
  let weatherImg;
  if (weatherDesc === 'Clouds') {
    weatherImg = cloudy;
  } else if (weatherDesc === 'Clear') {
    weatherImg = sunny;
  } else {
    weatherImg = rainy;
  }
  return weatherImg;
}
