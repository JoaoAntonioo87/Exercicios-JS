// Crie uma função que receba um prefixo (por exemplo, "INFO" ou "ERRO") e retorne outra função responsável por imprimir mensagens sempre com esse prefixo.

function mensagem(pref) {
  return (msg) => `${pref}: ${msg}`;
}

const msg1 = mensagem("ATENÇÃO");
console.log(msg1("Copa do mundo FIFA 2026 é só na CazeTV!"));
