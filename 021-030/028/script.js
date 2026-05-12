// Crie uma função validarNumero que receba:

// um número
// callback de sucesso
// callback de erro

// Se o número for positivo, execute o callback de sucesso. Caso contrário, execute o callback de erro.

function validarNumero(n, suc, err) {
  if (n >= 0) {
    suc();
  } else {
    err();
  }
}

function suc() {
  console.log("Deu certo, é positivo!");
}

function err() {
  console.log("Deu errado, não é positivo!");
}

validarNumero(-2, suc, err);
