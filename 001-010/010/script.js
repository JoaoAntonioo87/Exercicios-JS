// Use call para executar a função saudacao usando os dados do objeto usuario.

function saudacao(cidade, estado) {
  console.log(`Meu nome é ${this.nome} e moro em ${cidade} - ${estado}`);
}

const usuario = {
  nome: "Maria",
};

// Use call aqui

saudacao.call(usuario, "Xique-xique", "BA");
