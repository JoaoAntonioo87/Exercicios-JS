// Integrar formulário HTML com API.
// Ao enviar:

// impedir reload da página
// enviar dados via fetch
// mostrar mensagem de sucesso

const url = "https://jsonplaceholder.typicode.com/users";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const dados = new FormData(form);
  const todosValores = Object.fromEntries(dados.entries());

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todosValores),
  }).then((r) => {
    console.log(r);
    const message = document.createElement("p");
    if (!r.ok) {
      message.innerText = "Erro no envio";
    } else {
      message.innerText = "Mensagem enviada com sucesso!";
    }
    document.body.appendChild(message);
  });
});
