// Criar métodos que alteram atributos.

// Crie uma classe Produto.

// Ela deve possuir:
// nome
// preço

// Implemente:
// aplicarDesconto(percentual)
// aumentarPreco(percentual)

class Produto {
  constructor(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  aplicarDesconto(percentual) {
    this.preco = this.preco - this.preco * percentual;
    console.log(this.preco.toFixed(2));
  }

  aumentarPreco(percentual) {
    this.preco = this.preco + this.preco * percentual;
    console.log(this.preco.toFixed(2));
  }
}

const camiseta = new Produto("Camiseta", 50);

camiseta.aplicarDesconto(0.05);
camiseta.aumentarPreco(0.05);
