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
// let activeImage = '';

createImage('./images/img-1.jpeg')
  .then((resolvedImg) => {
    activeImage = resolvedImg;
    return wait(2);
  })
  .then(() => {
    activeImage.style.display = 'none';
    return createImage('./images/img-2.jpeg');
  })
  .then((resolvedImg) => {
    activeImage = resolvedImg;
    return wait(2);
  })
  .then(() => {
    activeImage.style.display = 'none';
    return createImage('./images/img-3.jpeg');
  })
  .then((resolvedImg) => {
    activeImage = resolvedImg;
    return wait(2);
  })
  .then(() => {
    activeImage.style.display = 'none';
  })
  .catch((rejected) => console.log(rejected));
