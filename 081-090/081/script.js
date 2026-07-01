// Crie uma função que retorne outra função capaz de alternar entre true e false a cada execução. O estado deve permanecer privado e só pode ser alterado pela função retornada.

function clicarBotao() {
  let state = false;

  return () => {
    state = !state;
    return `O botão está ${state === true ? "ativado" : "desativado"} `;
  };
}

const botao1 = clicarBotao();
console.log(botao1());
console.log(botao1());
console.log(botao1());
