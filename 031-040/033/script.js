// Crie uma função buscarProduto() que rejeite uma Promise com a mensagem "Produto não encontrado" e trate o erro usando try/catch.

function buscarProduto(produto) {
  try {
    const promise = new Promise((resolve, reject) => {
      if (produto == "Teste") {
        return resolve(console.log("Produto encontrado"));
      } else {
        return console.log("Produto não encontrado");
      }
    });
  } catch (err) {
    console.log(err);
  }
}

buscarProduto("Test");
