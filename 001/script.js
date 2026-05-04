// Crie um objeto usuario com:

// propriedade nome
// método saudar() que imprime: "Olá, eu sou João"

// Use this corretamente.

const usuario = {
  nome: "João",
  saudar: function () {
    console.log(`Olá, eu sou ${this.nome}`);
  },
};

usuario.saudar();
