// Crie uma simulação de carregamento usando setInterval. Exiba:

// Carregando.
// Carregando..
// Carregando...

// Repita o padrão até 6 vezes e depois mostre "Concluído!"

const timer = setInterval(() => console.log("Carregando..."), 1000);

setTimeout(() => {
  clearInterval(timer);
  console.log("Concluído");
}, 6500);
