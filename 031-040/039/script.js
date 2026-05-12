// Crie uma função delay(ms) usando Promise e await.

function delay(ms) {
  setTimeout(() => console.log("Fim"), ms);
}

async function executar() {
  console.log("Início");
  const fim = await delay(2000);
}

executar();
