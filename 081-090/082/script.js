// Crie uma função que receba outra função e um número máximo de execuções. Após atingir esse limite, novas chamadas não devem executar a função original.

function limitador(fn, max = 1) {
  let contador = 0;

  return () => {
    contador++;
    if (contador <= max) {
      return fn();
    } else {
      return `Atingido o número máximo de execuções!`;
    }
  };
}

function saudar() {
  return `Olá, seja bem-vindo!`;
}

const fn1 = limitador(saudar, 3);
console.log(fn1());
console.log(fn1());
console.log(fn1());
console.log(fn1());
