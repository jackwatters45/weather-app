import './styles/style.css';
import getData from './functions/retrieveData';

const storedLocation = window.localStorage.getItem('location');
const form = document.querySelector('.location-form');
const input = document.querySelector('.location-text');

if (storedLocation) getData(JSON.parse(storedLocation));
else getData('Mill Valley');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  getData(input.value);
  localStorage.setItem('location', JSON.stringify(input.value));
});
