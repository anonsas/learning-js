'use strict';

const imagesContainer = document.querySelector('.images');

function wait(seconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });
}

const createImage = (imgPath) => {
  return new Promise((resolve, reject) => {
    const image = document.createElement('img');
    image.src = imgPath;

    image.addEventListener('load', () => {
      imagesContainer.append(image);
      resolve(image);
    });

    image.addEventListener('error', () => {
      reject(new Error('Image not found'));
    });
  });
};
//==========================================

const loadNPause = async () => {
  try {
    // Load image 1
    let img = await createImage('./images/img-1.jpeg');
    await wait(2);
    img.style.display = 'none';

    // Load image 2
    img = await createImage('./images/img-2.jpeg');
    await wait(2);
    img.style.display = 'none';

    // Load image 3
    img = await createImage('./images/img-3.jpeg');
    await wait(2);
    img.style.display = 'none';
  } catch (error) {
    console.log(error);
  }
};

loadNPause();

// let activeImage = '';

// createImage('./images/img-1.jpeg')
//   .then((resolvedImg) => {
//     activeImage = resolvedImg;
//     return wait(2);
//   })
//   .then(() => {
//     activeImage.style.display = 'none';
//     return createImage('./images/img-2.jpeg');
//   })
//   .then((resolvedImg) => {
//     activeImage = resolvedImg;
//     return wait(2);
//   })
//   .then(() => {
//     activeImage.style.display = 'none';
//     return createImage('./images/img-3.jpeg');
//   })
//   .then((resolvedImg) => {
//     activeImage = resolvedImg;
//     return wait(2);
//   })
//   .then(() => {
//     activeImage.style.display = 'none';
//   })
//   .catch((rejected) => console.log(rejected));
//==========================================

const loadAll = async (imgArr) => {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img));
    const imgElements = await Promise.all(imgs);
    imgElements.forEach((img) => img.classList.add('parallel'));
  } catch (error) {
    console.log(error);
  }
};

loadAll(['./images/img-1.jpeg', './images/img-2.jpeg', './images/img-3.jpeg']);
