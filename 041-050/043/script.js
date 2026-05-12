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

async function iniciar() {
  const et1 = await etapa1();
  console.log(et1);
  const et2 = await etapa2();
  console.log(et2);
}

iniciar();
