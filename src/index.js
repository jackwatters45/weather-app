/* eslint-disable comma-dangle */
import './styles/style.css';
import getTodayData from './js/retrieveTodayData';
import getWeekData from './js/retrieveWeekData';
import saveLastLocation from './js/lastLocation';
import clearData from './js/clearData';

// if location stored in local storage
if (window.localStorage.getItem('location')) {
  // get location from data from location
  const lastLocation = JSON.parse(window.localStorage.getItem('location'));
  getTodayData(lastLocation);
  getWeekData(lastLocation);
} else {
  // if nothing in local storage show mill valley weather
  getTodayData('Mill Valley');
  getWeekData('Mill valley');
}

const form = document.querySelector('.location-form');
const input = document.querySelector('.location-text');

// add submit event listener for search
form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearData();
  getTodayData(input.value);
  getWeekData(input.value);
  saveLastLocation(input.value);
});
