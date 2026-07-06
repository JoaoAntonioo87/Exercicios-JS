// Separe um pequeno projeto em três módulos: um responsável pelos dados, outro pelas funções e outro pela execução do programa.

import products from "./data.js";
import { sum, amountItems } from "./funcitons.js";

console.log(sum(products));
console.log(amountItems(products));
