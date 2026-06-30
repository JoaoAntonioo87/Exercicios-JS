// Crie uma função que retorne outra função capaz de incrementar um contador interno. O contador não deve ser acessível diretamente, apenas pela função retornada.

function outer() {
  let counter = 0;

  return {
    contador() {
      return ++counter;
    },
  };
}

const meuContador = outer();
console.log(meuContador.contador());
console.log(meuContador.contador());
console.log(meuContador.contador());
console.log(meuContador.contador());
