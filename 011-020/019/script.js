// Antes de executar, tente prever o resultado.

const pessoa = {
  nome: "Juliana",
};

function mostrar(idade) {
  console.log(`${this.nome} tem ${idade} anos`);
}

const fn = mostrar.bind(pessoa);

fn(22);

// Vai mostrar Juliana tem 22 anos
