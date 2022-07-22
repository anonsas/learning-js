'use strict';

// fetch - only rejects, when there is no internet connection.
// But if we had 404 error, fetch will still be fulfilled.
// And .catch() wouldn't work.

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
//=============================================================

const renderCountry = (data, className = '') => {
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
};

const renderError = (errorMsg) => {
  countriesContainer.insertAdjacentText('beforeend', `${errorMsg}`);
};

const getJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};
//=============================================================
const getCountryData = (country) => {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
    .then((data) => {
      // Render country
      renderCountry(data[0]);

      // Render neighbour country
      const neighbour = data[0].borders?.[0];
      if (!neighbour) throw new Error(`No neighbour found`);

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then((data2) => renderCountry(data2[0], 'neighbour'))
    .catch((error) => renderError(error.message))
    .finally(() => {
      countriesContainer.style.opacity = '1';
    });
  // .finally() Good for loading spinners!!!
};

btn.addEventListener('click', () => {
  getCountryData('australia');
});
