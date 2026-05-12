// Execute várias Promises ao mesmo tempo.

function tarefa(nome, tempo) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`${nome} finalizada`);
    }, tempo);
  });
}

async function iniciar() {
  const tarefas = Promise.all([
    console.log(
      await tarefa("Lavar a louça", 3000),
      await tarefa("Lavar a roupa", 1000),
      await tarefa("Passear com o cachorro", 2500),
      await tarefa("Jogar bola", 4000),
    ),
  ]);
}

iniciar();
