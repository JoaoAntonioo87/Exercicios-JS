// Corrija o problema para que this funcione corretamente.

const pessoa = {
  nome: "Maria",
  falar: function () {
    console.log(this.nome);
  },
};

const falar = pessoa.falar;
falar.call(pessoa);
