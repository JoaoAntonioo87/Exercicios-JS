// Aprender a criar uma classe simples com construtor e método.

// Crie uma classe chamada Pessoa que armazene o nome e a idade de uma pessoa.
// Ela deve possuir um método chamado apresentar() que retorne uma frase no formato
// Olá, meu nome é João e tenho 25 anos. //

class Pessoa {
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
  apresentar() {
    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
  }
}

const joao = new Pessoa("João", 21);

joao.apresentar();
