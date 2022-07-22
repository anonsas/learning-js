// GET ALL POSTS
const getPosts = () => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// GET POST BY ID
const getPostById = (postId) => {
  axios
    .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // CREATE NEW POST
const createPost = () => {
  axios
    .post(`https://jsonplaceholder.typicode.com/posts`, {
      title: 'Lithuania',
      body: 'Hello Earth',
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // DELETE POST BY ID
const deletePostById = (postId) => {
  axios
    .delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // COMPLETE UPDATE - SPECIFY ALL VALUES.
const updatePostById = (postId) => {
  axios
    .put(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title: 'Lithuania',
      body: 'Hello Earth',
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};

// // PARTIAL UPDATE - SPECIFY VALUES WHICH TO UPDATE.
const modifyPostById = (postId) => {
  axios
    .patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      title: 'Lithuania',
    })
    .then((data) => console.log(data.data))
    .catch((error) => console.log(error.message));
};
