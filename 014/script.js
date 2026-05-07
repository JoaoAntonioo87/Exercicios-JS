// Use bind para criar uma nova função chamada saudacaoJoao.

function saudacao(mensagem) {
  console.log(`${mensagem}, ${this.nome}`);
}

const pessoa = {
  nome: "João",
};

// Crie saudacaoJoao usando bind

const saudacaoJoao = saudacao.bind(pessoa, "Olá");
saudacaoJoao();
