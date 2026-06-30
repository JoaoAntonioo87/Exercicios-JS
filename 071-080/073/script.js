// Implemente uma função que gere IDs únicos começando em 1. Cada chamada da função retornada deve gerar um novo ID.

function crairID() {
  let contador = 0;

  return () => {
    return `Seu ID é ${++contador}`;
  };
}

const gerarID = crairID();
console.log(gerarID());
console.log(gerarID());
console.log(gerarID());
