// Treinar lógica assíncrona.

// Se a requisição falhar:
// tentar novamente até 3 vezes

const urlUsers = "/users";
const urlPosts = "https://jsonplaceholder.typicode.com/posts";

async function getData(tentativa = 0) {
  try {
    const [user, posts] = await Promise.all([fetch(urlUsers), fetch(urlPosts)]);

    if (!user.ok || !posts.ok) {
      throw new Error("Falha na resposta de alguma requisição HTTP");
    }

    const userData = await user.json();
    const postsData = await posts.json();

    return (userData, postsData);
  } catch (err) {
    if (tentativa < 2) {
      tentativa++;
      return await getData(tentativa);
    } else {
      console.log("3 tentativas realizadas sem sucesso");
      throw err;
    }
  }
}

getData();
