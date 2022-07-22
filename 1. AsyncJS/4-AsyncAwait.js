'use strict';
const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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
  countriesContainer.style.opacity = '1';
};
//=================================================================

function getPosition() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// async await - syntactic sugar over fetch().then().catch()
const whereAmI = async () => {
  try {
    // Geolocation
    const myPosition = await getPosition();
    const { latitude: lat, longitude: lng } = myPosition.coords;

    // Reverse geocoding
    const geolocation = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!geolocation.ok) throw new Error('Problem getting Geolocation');
    const dataGeo = await geolocation.json();

    // Country data
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${dataGeo.country}`
    );
    if (!response.ok) throw new Error('Problem getting Country');

    const data = await response.json();
    renderCountry(data[0]);
  } catch (error) {
    console.error(`${error.message}`);
  }
};

btn.addEventListener('click', () => {
  whereAmI();
});
