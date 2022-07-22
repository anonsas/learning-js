// GET ALL POSTS
const getAllPosts = async () => {
  try {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

// GET POST BY ID
const getPostById = async (postId) => {
  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

// CREATE NEW POST
const createPost = async () => {
  try {
    const response = await axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      title: 'Lithuania',
      body: 'Hello Earth',
    });
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

// DELETE POST BY ID
const deletePostById = async (postId) => {
  try {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

// COMPLETE UPDATE - SPECIFY ALL VALUES.
const updatePostById = async (postId) => {
  try {
    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        title: 'Lithuania',
        body: 'Hello Earth',
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};

// PARTIAL UPDATE - SPECIFY VALUES WHICH TO UPDATE.
const modifyPostById = async (postId) => {
  try {
    const response = await axios.patch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        title: 'Lithuania',
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error.message);
  }
};
