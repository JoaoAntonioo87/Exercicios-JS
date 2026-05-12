// Crie um contador regressivo usando setInterval. O programa deve iniciar em um número informado e diminuir 1 a cada segundo até chegar em 0. Ao finalizar, deve parar automaticamente e exibir "Fim!".

function contador(n) {
  const intervalo = setInterval(() => {
    console.log(n--);

    if (n <= 0) {
      clearInterval(intervalo);
    }
  }, 1000);
}

contador(5);
