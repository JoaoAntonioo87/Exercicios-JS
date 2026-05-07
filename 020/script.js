// Leia o código e complete os espaços usando:

// call
// apply
// bind

function apresentar(curso, periodo) {
  console.log(`${this.nome} faz ${curso} no período ${periodo}`);
}

const aluno = {
  nome: "Lucas",
};

// 1. Execute usando call

apresentar.call(aluno, "medicina", "noturno");

// 2. Execute usando apply

apresentar.apply(aluno, ["design", "matutino"]);

// 3. Crie uma nova função usando bind

const newApresentar = apresentar.bind(aluno);
newApresentar("TI", "integral");
