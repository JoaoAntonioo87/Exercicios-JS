// O método call permite executar uma função definindo manualmente o valor de this.

// Complete o código para que a função apresentacao utilize os dados do objeto pessoa.

function apresentacao() {
  console.log(`Olá, meu nome é ${this.nome}`);
}

const pessoa = {
  nome: "João",
};

// Use call aqui

apresentacao.call(pessoa);
