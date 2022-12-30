export default async (data) => {
  const section = document.querySelector('.bottom-content');
  if (section) section.innerHTML = '';

  data.forEach((date) => {
    const card = document.createElement('div');
    card.classList.add('temp-card');

    // get day of week from date
    const day = document.createElement('div');
    day.classList.add('day');
    day.innerHTML = date.day;
    card.appendChild(day);

    // add max
    const high = document.createElement('div');
    high.classList.add('high');
    high.innerHTML = `${date.max} °F`;
    card.appendChild(high);

    // add min
    const low = document.createElement('div');
    low.classList.add('low');
    low.innerHTML = `${date.min} °F`;
    card.appendChild(low);

    // img
    const img = document.createElement('img');
    img.src = date.weather;
    card.appendChild(img);

    section.appendChild(card);
  });
};
