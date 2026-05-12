// Crie uma função chamada simularCompra que retorne uma Promise. Após 2 segundos, ela deve resolver a Promise informando "Compra realizada com sucesso".

function simularCompra() {
  return new Promise((resolved, reject) => {
    const resultado = true;

    if (resultado) {
      resolved("Compra realizada com sucesso");
    } else {
      reject("Erro na compra, tente novamente");
    }
  });
}

simularCompra()
  .then((r) => console.log(r))
  .catch((r) => console.error(r));
