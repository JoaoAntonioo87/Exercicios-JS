// Fazer uma requisição GET usando fetch.

const url = "https://jsonplaceholder.typicode.com/users/2";

async function inicial() {
  const busca = await fetch(url);
  const resposta = await busca.json();
  console.log(resposta.name);
  console.log(resposta.email);
  console.log(resposta.address.city);
}

inicial();
