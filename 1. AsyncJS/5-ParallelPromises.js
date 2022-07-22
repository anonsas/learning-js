// +Promise.all() - If 1 Promise rejects, all Promises are rejected.
// +Promise.race() - first settled Promise, gets returned.
// Promise.allSettled() - returns only settled Promises.
// Promise.any() - return first fulfilled Promise.

const getJSON = (url, errorMsg = 'Something went wrong') => {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

const get3Countries = async (c1, c2, c3) => {
  try {
    // const data1 = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
    // const data2 = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
    // const data3 = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);

    // console.log([data1[0].capital, data2[0].capital, data3[0].capital]);

    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);

    console.log(data.map((d) => d[0].capital));
  } catch (error) {
    console.error(error);
  }
};

get3Countries('Lithuania', 'Austria', 'Denmark');
