// Praticar herança com novos atributos.

// Crie:
// Funcionario
// Gerente

// Todo funcionário possui:
// nome
// salário

// O gerente possui também:
// departamento

// Crie um método descricao().

class Funcionario {
  constructor(nome, salario, departamento = "ADM") {
    this.nome = nome;
    this.salario = salario;
    this.departamento = departamento;
  }

  descricao() {
    console.log(
      `Olá, meu nome é ${this.nome}, meu salário é ${this.salario} e meu departamento é ${this.departamento}`,
    );
  }
}

class Gerente extends Funcionario {
  constructor(nome, salario, departamento) {
    super(nome, salario, departamento);
  }
}

const joao = new Funcionario("João", 2300.0, "RH");
const mineia = new Gerente("Mineia", 6400.0, "Financeiro");

joao.descricao();
mineia.descricao();
