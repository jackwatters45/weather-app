export default () => {
  const mainContent = document.querySelector('.main-content');
  mainContent.innerHTML = `<div class="top-left">
  <div class="weather-description"></div>
  <div class="location"></div>
  <div class="weather-temp"></div>
  <img class="current-weather-img" src="../assets/img/sunny.svg" alt="">
  <form class="location-form" action="">
    <input class="location-text" type="text" placeholder="Search.." required>
    <hr>
  </form>
  </div>
  <div class="top-right">
  <div class="other-cards">
    <img class="feels-like-img" src="../assets/img/feels-like.svg" alt="">
    <div class="card-text">Feels Like</div>
    <div class="card-result feels-like"></div>
  </div>
  <div class="other-cards">
    <img src="../assets/img/humidty.svg" alt="">
    <div class="card-text">Humidity</div>
    <div class="card-result humidity"></div>
  </div>
  <div class="other-cards">
    <img src="../assets/img/chance-rain.svg" alt="">
    <div class="card-text">Precipitation</div>
    <div class="card-result precipitation"></div>
  </div>
  <div class="other-cards">
    <img class="wind-img" src="../assets/img/wind.svg" alt="">
    <div class="card-text">
      Wind Speed</div>
    <div class="card-result wind"></div>
  </div>
  </div>
  <div class="bottom">
  <div></div>
  <div class="bottom-content">
  </div>
  </div>
  </div>
  <div class="footer">
  <p>Copyright © 2022 jackwatters45</p>
  <a href="https://github.com/jackwatters45/" target="_blank"><img class="github-logo"
    src="../assets/img/github-logo.svg" alt="Github Logo"></a>
  </div>`;
};
