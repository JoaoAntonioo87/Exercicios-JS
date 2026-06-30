// Crie uma função que receba um nome e retorne outra função que receba uma mensagem. A mensagem final deve incluir o nome informado inicialmente.

function criarSaudacao(nome) {
  return (saudacao) => {
    return `${saudacao} ${nome}`;
  };
}

const joao = criarSaudacao("João");
console.log(joao("Bom dia"));
