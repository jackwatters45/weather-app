import './styles/style.css';
import getTodayData from './functions/retrieveTodayData';
import getWeekData from './functions/retrieveWeekData';
import clearData from './functions/clearData';

const storedLocation = window.localStorage.getItem('location');
const form = document.querySelector('.location-form');
const input = document.querySelector('.location-text');

const getData = (location) => {
  getTodayData(location);
  getWeekData(location);
};

if (storedLocation) getData(JSON.parse(storedLocation));
else getData('Mill Valley');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearData();
  getData(input.value);
  localStorage.setItem('location', JSON.stringify(input.value));
});
