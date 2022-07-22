'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//=============================================================

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', () => {
    const [data] = JSON.parse(request.responseText);

    let flag = data.flags.svg;
    let countryName = data.name.common;
    let region = data.region;
    let population = (data.population / 1000000).toFixed(2);
    let language = Object.values(data.languages)[0];
    let currency = Object.values(data.currencies)[0];

    const html = `
            <article class="country">
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
  });
};
getCountryData('portugal');
getCountryData('usa');
getCountryData('holland');
