// Aprender tratamento de falhas.
// Faça uma requisição para: https://jsonplaceholder.typicode.com/usuarios

const url = "https://jsonplaceholder.typicode.com/usuarios";

async function buscarDados(url) {
  try {
    const dados = await fetch(url);
    if (!dados.ok) {
      console.log("Deu erro!");
    }
  } catch (err) {
    console.log(err);
  }
}

buscarDados(url);
