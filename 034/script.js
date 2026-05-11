// Crie uma função assíncrona que espere uma Promise ser resolvida após 2 segundos e exiba a mensagem recebida.

function obterMensagem() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolvida!");
    }, 2000);
  });
}

async function esperarMensagem() {
  const resposta = await obterMensagem();
  console.log(resposta);
}

esperarMensagem();
