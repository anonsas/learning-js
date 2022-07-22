'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//=============================================================

const renderCountry = function (data, className = '') {
  let flag = data.flags.svg;
  let countryName = data.name.common;
  let region = data.region;
  let population = (data.population / 1000000).toFixed(2);
  let language = Object.values(data.languages)[0];
  let currency = Object.values(data.currencies)[0];

  const html = `
  <article class="country ${className}">
    <img class="country__img" src=${flag} />
    <div class="country__data">
      <h3 class="country__name">${countryName}</h3>
      <h4 class="country__region">${region}</h4>
      <p class="country__row"><span>👫</span>${population} mln</p>
      <p class="country__row"><span>🗣️</span>${language}</p>
      <p class="country__row"><span>💰</span>${currency.name}</p>
    </div>
  </article>
`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = '1';
};
//=============================================================
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);

    // Render country
    renderCountry(data);

    // Render neighbour country
    const neighbour = data.borders?.[0];
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);

      // Render neighbour
      renderCountry(data2, 'neighbour');
    });
  });
};

getCountryAndNeighbour('holland');

setTimeout(() => {
  console.log('1 second has passed');
  setTimeout(() => {
    console.log('2 second has passed');
    setTimeout(() => {
      console.log('3 second has passed');
      setTimeout(() => {
        console.log('4 second has passed');
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
