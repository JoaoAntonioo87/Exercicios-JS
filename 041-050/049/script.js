// Consumir API e manipular DOM.

const url = "https://jsonplaceholder.typicode.com/posts";

// Renderize os 5 primeiros posts dentro de uma <div>.

async function buscarDados() {
  const response = await fetch(url);
  const json = await response.json();
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
  btn.addEventListener("click", () => {
    criarPosts(json, counter + 5);
  });
  post.appendChild(btn);
}

// Adicionar um botão “Carregar mais”.

buscarDados().then((r) => criarPosts(r));
