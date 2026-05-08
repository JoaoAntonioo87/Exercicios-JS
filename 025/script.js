// Crie um programa que agende uma mensagem para aparecer após 5 segundos, mas permita cancelar a execução antes do tempo acabar.

let timer;

function mostrar() {
  timer = setTimeout(() => {
    console.log("Estou mostrando algo!");
  }, 5000);
}

function cancelar() {
  clearTimeout(timer);
}
