// Crie uma função que retorne duas funções: uma para adicionar mensagens a um histórico privado e outra para recuperar todas as mensagens armazenadas na ordem em que foram inseridas.

function perfil() {
  let historico = [];

  return {
    adicionarMensagem: function (msg) {
      historico.push(msg);
      return "Mensagem adicionada com sucesso";
    },
    mostrarHistorico: function () {
      for (let item in historico) {
        console.log(historico[item]);
      }
    },
  };
}

const perfil1 = perfil();
console.log(
  perfil1.adicionarMensagem("Olá mundo, esta é minha primeira mensagem!"),
);

console.log(perfil1.adicionarMensagem("Eu estou estudando JS"));

perfil1.mostrarHistorico();
