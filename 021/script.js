// Crie uma função chamada mostrarMensagem que receba uma mensagem e um tempo em milissegundos. A função deve usar setTimeout para exibir a mensagem no console após o tempo informado.

function mostrarMensagem(message, time) {
  setTimeout(() => console.log(message), time);
}

mostrarMensagem("Olá mundo!", 3000);
