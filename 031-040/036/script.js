// Capture o erro de uma Promise rejeitada.

function gerarErro() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Algo deu errado!");
    }, 1000);
  });
}

async function tratar() {
  try {
    await gerarErro();
  } catch (err) {
    console.log(err);
  }
}

tratar();
