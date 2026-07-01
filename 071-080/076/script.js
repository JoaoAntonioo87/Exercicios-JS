// Imagine que você queira simular um botão que registra quantos cliques recebeu. Crie uma função que retorne outra responsável por contabilizar os cliques.

function criarBotao() {
  let contador = 1;

  return function () {
    console.log(`O botão foi clicado ${contador++} vezes`);
  };
}

const clicar = criarBotao();
clicar();
clicar();
clicar();
