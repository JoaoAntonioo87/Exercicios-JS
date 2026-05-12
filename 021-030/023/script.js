// Crie uma função executarTarefa que receba:

// o nome de uma tarefa
// uma função callback

// Após 2 segundos, exiba "Tarefa concluída: X" e execute o callback.

function executarTarefa(tarefa, callback) {
  setTimeout(() => {
    (console.log("Tarefa concluída"), callback());
  }, 2000);
}

function mostrarNome() {
  console.log("Meu nome é João!");
}

executarTarefa("Lavar louça", mostrarNome);
