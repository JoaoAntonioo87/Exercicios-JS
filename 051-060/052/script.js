// Aprender envio de dados.
// Enviar um usuário para: https://jsonplaceholder.typicode.com/users

const url = "https://jsonplaceholder.typicode.com/users";

const user = {
  name: "João",
  email: "joao@email.com",
};

async function sendUser(user, url) {
  const enviar = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!enviar.ok) {
    throw new Error("Erro no envio dos dados: " + enviar.status);
  }

  console.log("Dados enviados com sucesso");
  return enviar.json();
}

sendUser(user, url);
