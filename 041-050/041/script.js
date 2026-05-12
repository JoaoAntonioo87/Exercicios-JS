// Simule uma requisição que pode falhar aleatoriamente.

function carregarDados() {
  const random = Math.random();
  if (random > 0.5) {
    console.log("Dados carregados com sucesso");
  } else {
    return Promise.reject("Deu erro aqui!");
  }
}

async function iniciar() {
  try {
    const dados = await carregarDados();
  } catch (err) {
    console.log("Deu erro aqui!");
  }
}

iniciar();
