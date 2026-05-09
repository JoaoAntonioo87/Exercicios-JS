// Analise o código abaixo.

function teste() {
  console.log(this.nome);
}

const usuario = {
  nome: "Pedro",
};

// teste.bind(usuario);
// teste();
const newTeste = teste.bind(usuario);
newTeste();
