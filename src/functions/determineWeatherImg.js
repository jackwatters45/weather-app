import cloudy from '../assets/img/cloudy.svg';
import sunny from '../assets/img/sunny.svg';
import rainy from '../assets/img/rain.svg';

export default (weatherDesc) => {
  if (weatherDesc === 'Clouds') return cloudy;
  if (weatherDesc === 'Clear') return sunny;
  return rainy;
};
