// Crie um objeto contador com:

// propriedade valor
// método incrementar
// método mostrar

const contador = {
  valor: 0,
  incrementar: function () {
    this.valor++;
  },
  mostrar: function () {
    console.log(this.valor);
  },
};

contador.incrementar();
contador.mostrar();
