// Modificar o estado interno de um objeto.

// Crie uma classe ContaBancaria.

// Ela deve possuir:
// titular
// saldo

// Implemente os métodos:
// depositar(valor)
// sacar(valor)
// consultarSaldo()

// O saque só pode acontecer se houver saldo suficiente.

class ContaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
    console.log(
      `O valor de ${valor} foi depositado com sucesso, o saldo atual é ${this.saldo}`,
    );
  }

  sacar(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(
        `O valor de ${valor} foi sacado com sucesso, o saldo atual é ${this.saldo}`,
      );
    } else {
      console.log(
        `Saldo insuficiente para o saque, saldo atual de ${this.saldo}`,
      );
    }
  }

  consultarSaldo() {
    console.log(`O saldo atual da conta é ${this.saldo}`);
  }
}

const contaJoao = new ContaBancaria("João", 0);

contaJoao.depositar(100);
contaJoao.sacar(50);
contaJoao.sacar(70);
