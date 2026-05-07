// Analise o problema abaixo relacionado ao this.

const contador = {
  numero: 0,

  incrementar() {
    this.numero++;
    console.log(this.numero);
  },
};

// setTimeout(contador.incrementar, 1000);

setInterval(contador.incrementar.bind(contador), 1000);
