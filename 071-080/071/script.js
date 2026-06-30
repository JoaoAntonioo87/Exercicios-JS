// Crie uma função que receba um número e retorne outra função capaz de multiplicar qualquer número pelo valor informado inicialmente.

function multiplicador(fator) {
  return (valor) => {
    return valor * fator;
  };
}

const dobrar = multiplicador(2);
const triplicar = multiplicador(3);

console.log(dobrar(5));
console.log(triplicar(10));
