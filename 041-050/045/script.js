// Execute tarefas assíncronas dentro de um loop.

function esperar(numero) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero);
    }, 1000);
  });
}
async function iniciar() {
  for (let i = 0; i < 5; i++) {
    console.log(await esperar(i));
  }
}

iniciar();
