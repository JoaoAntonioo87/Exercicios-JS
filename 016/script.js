// Use o método call para reutilizar o método mostrarNome em outro objeto.

const pessoa1 = {
  nome: "Ana",

  mostrarNome() {
    console.log(this.nome);
  },
};

const pessoa2 = {
  nome: "Roberto",
};

// Use call aqui

pessoa1.mostrarNome.call(pessoa2);
