// Implemente uma função que memorize resultados já calculados. Se a função receber o mesmo valor novamente, ela deve retornar o resultado armazenado em vez de recalcular.

function criarMemoizador(fn) {
  const cache = {};
  return (value) => {
    if (!Object.hasOwn(cache, value)) {
      const result = value * value;
      cache[value] = result;
      return result;
    } else {
      return cache[value];
    }
  };
}

const quadrado = criarMemoizador(function (n) {
  console.log("Calculando...");
  return n * n;
});

console.log(quadrado(5));
console.log(quadrado(5));
console.log(quadrado(8));
console.log(quadrado(8));
