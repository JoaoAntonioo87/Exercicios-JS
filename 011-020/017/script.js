// Transforme a função abaixo em uma função reutilizável usando bind.

function exibirPreco(moeda) {
  console.log(`${moeda} ${this.preco}`);
}

const produto = {
  preco: 250,
};

const exibir = exibirPreco.bind(produto);
exibir("Moeda");
