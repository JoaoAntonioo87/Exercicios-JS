// Execute duas tarefas assíncronas em sequência.

function etapa1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Etapa 1 concluída");
    }, 1000);
  });
}

function etapa2() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Etapa 2 concluída");
    }, 1000);
  });
}

async function executar() {
  const e1 = await etapa1();
  console.log(e1);
  const e2 = await etapa2();
  console.log(e2);
}

executar();
