// Crie uma função verificarIdade(idade) que retorne uma Promise:

// Resolva se a idade for maior ou igual a 18.
// Rejeite se for menor.

function verificarIdade(idade) {
  return new Promise((resolved, reject) => {
    if (idade >= 18) {
      resolved("Maior de idade");
    } else {
      reject("Menor de idade");
    }
  });
}

verificarIdade(16)
  .then((r) => console.log(r))
  .catch((r) => console.log(r));
