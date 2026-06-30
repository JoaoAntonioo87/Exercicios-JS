// Crie uma função que receba outra função e retorne uma nova função que conte quantas vezes ela foi executada.

function contarChamadas(fn) {
  let contador = 0;

  return () => {
    return `Esta função foi executada ${++contador} vezes`;
  };
}

function ola() {
  console.log("Olá!");
}

const novaFuncao = contarChamadas(ola);
console.log(novaFuncao());
console.log(novaFuncao());
console.log(novaFuncao());
console.log(novaFuncao());
console.log(novaFuncao());
