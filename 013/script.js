// O método bind cria uma nova função com o this fixado.

// Complete o exemplo abaixo.

const usuario = {
  nome: "Fernanda",
  mostrarNome() {
    console.log(this.nome);
  },
};

const exibir = usuario.mostrarNome.bind(usuario);

// Corrija usando bind
exibir();
