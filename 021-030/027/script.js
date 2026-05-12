//   Exiba três mensagens em sequência:

// "Preparando..."
// "Processando..."
// "Finalizado!"

// Cada mensagem deve aparecer 2 segundos após a anterior.

setTimeout(() => {
  console.log("Preparando...");
  setTimeout(() => {
    console.log("Processando...");
    setTimeout(() => {
      console.log("Finalizado!");
    }, 2000);
  }, 2000);
}, 2000);
