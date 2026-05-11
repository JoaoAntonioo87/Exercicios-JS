// Execute várias Promises ao mesmo tempo.

function tarefa(nome, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${nome} finalizada`);
    }, tempo);
  });
}

async function executar() {
  const resultados = await Promise.all([
    tarefa("Lavar louça", 2000),
    tarefa("Lavar roupa", 1000),
    tarefa("Limpar quarto", 3000),
  ]);
  console.log(resultados);
}

executar();
