// Melhorar UX durante requisições.
// Antes do fetch: <p>Carregando...</p>

const url = "https://jsonplaceholder.typicode.com/posts";

async function buscarDados() {
  const loading = document.createElement("h1");
  // loading.innerText = "Carregando...";
  loading.classList.add("loader");
  document.body.appendChild(loading);

  const response = await fetch(url);
  const json = await response.json();

  document.body.removeChild(loading);

  return json;
}

function criarPosts(json, counter = 5) {
  const post = document.createElement("div");

  for (let i = counter - 5; i < counter; i++) {
    const titulo = document.createElement("h2");
    titulo.innerText = json[i].title;

    const texto = document.createElement("p");
    texto.innerText = json[i].body;

    post.appendChild(titulo);
    post.appendChild(texto);
    document.body.appendChild(post);
  }

  const btn = document.createElement("button");
  btn.innerText = "Carregar mais";
  btn.addEventListener("click", () => criarPosts(json, counter + 5));

  post.appendChild(btn);
}

buscarDados().then((r) => criarPosts(r));

// Desafio extra
// Adicionar spinner com CSS.
