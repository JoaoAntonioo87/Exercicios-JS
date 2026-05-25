// Buscar:

// /users
// /posts

// ao mesmo tempo usando:
// Promise.all()

const urlUsers = "https://jsonplaceholder.typicode.com/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";

async function getData() {
  const [user, posts] = await Promise.all([fetch(urlUsers), fetch(urlPosts)]);

  const userData = await user.json();
  const postsData = await posts.json();

  console.log(userData, postsData);
}

getData();
