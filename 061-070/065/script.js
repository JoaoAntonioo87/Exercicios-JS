// Trabalhar com objetos dentro de arrays.

// Crie uma classe Carrinho.

// Ela deve permitir:
// adicionar produtos
// remover produtos
// calcular total

// Cada produto possui:

// {
//     nome,
//     preco
// }

class Carrinho {
  constructor() {
    this.carrinho = [];
    this.total = 0;
  }

  mostrarCarrinho() {
    console.log(this.carrinho);
  }

  adicionarProduto(obj) {
    this.carrinho.push(obj);
  }

  removerProduto(obj) {
    this.carrinho = this.carrinho.filter((item) => item.nome !== obj.nome);
    return this.carrinho;
  }

  calcularTotal() {
    this.carrinho.map((item) => {
      if (item.preco) {
        this.total += item.preco;
      }
    });
    console.log(this.total);
  }
}

const amazon = new Carrinho();

amazon.adicionarProduto({ nome: "Celular", preco: 1800 });
amazon.adicionarProduto({ nome: "Televisão", preco: 3500 });
amazon.adicionarProduto({ nome: "Computador", preco: 5500 });

amazon.mostrarCarrinho();

amazon.removerProduto({ nome: "Televisão" });

amazon.mostrarCarrinho();

amazon.calcularTotal();
