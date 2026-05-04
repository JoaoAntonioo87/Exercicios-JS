// Explique por que o código quebra e corrija.

const usuario = {
  nome: "Pedro",
  mostrar: function () {
    console.log(this.nome);
  },
};

const mostrar = usuario.mostrar.bind(usuario);
mostrar();
// Ou este: mostrar.call(usuario) ;

// Precisamos adicionar o contexto do this.
