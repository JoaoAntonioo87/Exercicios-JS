// Explique e corrija o erro.

// const pessoa = {
//   nome: "Lucas",
//   falar: () => {
//     console.log(this.nome);
//   },
// };

// pessoa.falar();

// O erro está em utilizar uma arrow function, uma vez que com elas não existe o this, já que ele se referencia ao objeto window.

const pessoa = {
  nome: "Lucas",
  falar: function () {
    console.log(this.nome);
  },
};

pessoa.falar();
