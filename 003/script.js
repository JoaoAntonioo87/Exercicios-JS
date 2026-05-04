// Use call para mudar o contexto de this.

function apresentar() {
  console.log(`Meu nome é ${this.nome}`);
}

const pessoa1 = { nome: "Ana" };
const pessoa2 = { nome: "Carlos" };

// chame a função para ambos

apresentar.call(pessoa1);
apresentar.call(pessoa2);
