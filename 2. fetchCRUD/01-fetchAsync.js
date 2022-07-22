const getAllPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const getPostById = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const createPost = async () => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Igor',
        age: 29,
        username: 'anonsas',
      }),
    });
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

const deletePostByID = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'Delete',
    });
    console.log(response);
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// COMPLETE UPDATE - SPECIFY ALL VALUES.
const updatePostById = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        body: 'Hello Earth',
        title: 'Lithuania',
      }),
    });

    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};

// PARTIAL UPDATE - SPECIFY VALUES WHICH TO UPDATE.
const modifyPostById = async (postId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Bananza',
      }),
    });

    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error.message);
  }
};
