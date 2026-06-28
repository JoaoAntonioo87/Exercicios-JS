// Introduzir herança.

// Crie uma classe Animal.

// Ela possui:
// nome

// Método:
// emitirSom()

// Depois crie uma classe Cachorro que herde de Animal.
// Sobrescreva o método para retornar:
// Au Au!

class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  emitirSom() {
    console.log(this.som);
  }
}

class Cachorro extends Animal {
  constructor(nome, som = "Au au") {
    super(name);
    this.som = som;
  }
}

const dog = new Cachorro("Pug");
dog.emitirSom();
