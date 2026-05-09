// Crie um objeto calculadora com:

// valor
// métodos: somar, subtrair, multiplicar
// todos devem retornar o próprio objeto para permitir encadeamento

const calculadora = {
  valor: 0,
  somar: function (valor) {
    this.valor += valor;
    console.log(this.valor);
    return this;
  },
  subtrair: function (valor) {
    this.valor -= valor;
    console.log(this.valor);
    return this;
  },
  multiplicar: function (valor) {
    this.valor *= valor;
    console.log(this.valor);
    return this;
  },
};

calculadora.somar(50);
calculadora.subtrair(5);
calculadora.multiplicar(5);
