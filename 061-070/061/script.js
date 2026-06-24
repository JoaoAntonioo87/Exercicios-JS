// Criar métodos que realizam cálculos.

// Crie uma classe chamada Retangulo.
// Ela deve receber largura e altura.
// Implemente dois métodos:
// calcularArea()
// calcularPerimetro()

class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  calcularArea() {
    console.log(
      `A área deste retângulo é de ${(this.largura * this.altura).toFixed(2)}`,
    );
  }

  calcularPerimetro() {
    console.log(
      `O perímetro deste retângulo é de ${(this.largura * 2 + this.altura * 2).toFixed(2)}`,
    );
  }
}

const r1 = new Retangulo(10, 5);
const r2 = new Retangulo(8, 8);
const r3 = new Retangulo(3, 12);
