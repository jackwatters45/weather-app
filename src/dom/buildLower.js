export default async (data) => {
  const values = Object.values(data);
  const section = document.querySelector('.bottom-content');

  values.forEach((key) => {
    const card = document.createElement('div');
    card.classList.add('temp-card');

    // get day of week from date
    const day = document.createElement('div');
    day.classList.add('day');
    day.innerHTML = key.date.toLocaleString();
    card.appendChild(day);

    // add max
    const high = document.createElement('div');
    high.classList.add('high');
    high.innerHTML = `${key.max} °F`;
    card.appendChild(high);

    // add min
    const low = document.createElement('div');
    low.classList.add('low');
    low.innerHTML = `${key.min} °F`;
    card.appendChild(low);

    // img thing
    const img = document.createElement('img');
    img.src = key.weatherImg;
    card.appendChild(img);

    section.appendChild(card);
  });
};
