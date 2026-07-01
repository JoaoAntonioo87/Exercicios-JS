// Uma loja possui vários tipos de desconto. Crie uma função que receba a porcentagem de desconto e retorne outra função responsável por calcular o preço final.

function calcularDesconto(pp) {
  return (valor) => valor * pp;
}

const desconto10 = calcularDesconto(0.9);
console.log(desconto10(100));
console.log(desconto10(200));
