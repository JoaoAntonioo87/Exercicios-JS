// Manipular arrays dentro de classes.

// Crie uma classe Aluno.

// Ela deve armazenar:
// nome
// notas (array)

// Implemente:
// adicionarNota()
// calcularMedia()
// foiAprovado()

// Considere média mínima igual a 7.

class Aluno {
  constructor(nome) {
    this.nome = nome;
    this.notas = [];
    this.media = 0;
  }

  adicionarNota(nota) {
    const arrNotas = this.notas.push(nota);
    return arrNotas;
  }

  calcularMedia() {
    this.notas.map((nota) => {
      this.media += nota;
    });
    this.media = (this.media / this.notas.length).toFixed(2);
    console.log(this.media);
    return this.media;
  }

  foiAprovado() {
    if (this.media >= 7) {
      console.log(`${this.nome} foi aprovado!`);
    } else {
      console.log(`${this.nome} foi reprovado...`);
    }
  }
}

const joao = new Aluno("João");

joao.adicionarNota(7.5);
joao.adicionarNota(7);

joao.calcularMedia();

joao.foiAprovado();
