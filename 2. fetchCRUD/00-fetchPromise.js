// fetch ALWAYS SUCCEEDS
// IT WILL FAIL ONLY IF WE HAVE NETWORK CONNECTION

const getAllPosts = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('Something went wrong.', error));
};

const createNewPost = () => {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      body: 'JavaScript',
      title: 'Hello Planet',
    }),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('Something went wrong.', error));
};

const getPostById = (postId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('Something went wrong.', error));
};

const deletePostById = (postId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'DELETE',
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('Something went wrong.', error));
};

// COMPLETE UPDATE - SPECIFY ALL VALUES.
const updatePostById = (postId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
      title: 'Hello World',
      body: 'Unstoppable',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('Something went wrong.', error));
};

// PARTIAL UPDATE - SPECIFY VALUES WHICH TO UPDATE.
const modifyPostById = (postId) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'Hello World',
    }),
    headers: {
      'Content-type': 'application/json',
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .then((data) => console.log(data))
    .catch((error) => console.log('Something went wrong.', error));
};

getAllPosts();
createNewPost();
getPostById(100);
deletePostById(100);
updatePostById(2);
modifyPostById(2);
