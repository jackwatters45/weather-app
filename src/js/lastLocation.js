export default function saveLastLocation(location) {
  // saves the most recent location to local storage
  localStorage.setItem('location', JSON.stringify(location));
}
