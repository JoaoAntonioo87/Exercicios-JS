// Implemente uma função que permita armazenar um valor privado e disponibilize duas funções: uma para alterar o valor e outra para consultá-lo.

function criarConta(saldo) {
  return {
    consultarSaldo: function () {
      return saldo;
    },
    depositar: function (valor) {
      return (saldo += valor);
    },
  };
}

const conta1 = criarConta(10);
console.log(conta1.consultarSaldo());
console.log(conta1.depositar(4));
console.log(conta1.consultarSaldo());

const conta2 = criarConta(100);
console.log(conta2.consultarSaldo());
