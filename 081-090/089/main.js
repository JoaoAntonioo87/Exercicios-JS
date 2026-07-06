// Importe uma função utilizando um nome diferente daquele usado na exportação original.

import {
  sum as soma,
  subtract as subtracao,
  multiply as multiplicacao,
} from "./math.js";

console.log(soma(120, 56));
console.log(subtracao(120, 56));
console.log(multiplicacao(10, 56));
