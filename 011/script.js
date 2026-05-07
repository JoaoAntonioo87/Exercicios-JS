// O método apply funciona de forma parecida com call, mas recebe os argumentos em um array.

// Faça a função funcionar corretamente usando apply.

function calcular(media1, media2) {
  console.log(`${this.nome} teve média ${(media1 + media2) / 2}`);
}

const aluno = {
  nome: "Carlos",
};

const notas = [8, 6];

// Use apply aqui

calcular.apply(aluno, [...notas]);
