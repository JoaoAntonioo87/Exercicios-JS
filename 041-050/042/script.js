// Capture o erro de uma Promise rejeitada.

function gerarErro() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Algo deu errado!");
    }, 1000);
  });
}

async function iniciar() {
  try {
    const dados = await gerarErro();
  } catch (err) {
    console.log(err);
  }
}

iniciar();
