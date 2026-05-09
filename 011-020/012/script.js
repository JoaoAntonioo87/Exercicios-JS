// Execute a mesma função usando tanto call quanto apply.

function produto(preco, desconto) {
  const valorFinal = preco - desconto;

  console.log(`${this.nome}: R$ ${valorFinal}`);
}

const item = {
  nome: "Notebook",
};

// Call

produto.call(item, 5000, 150);

// Apply

produto.apply(item, [2500, 100]);
