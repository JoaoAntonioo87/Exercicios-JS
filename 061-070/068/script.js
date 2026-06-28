// Aprender atributos privados (#).

// Crie uma classe Cofre.
// Ela possui um atributo privado:
// #senha

// Implemente:
// verificarSenha(senha)
// alterarSenha(atual, nova)

// A senha só pode ser alterada se a senha atual estiver correta.

class Cofre {
  #senha = 1234;

  verificarSenha(senha) {
    if (senha === this.#senha) {
      console.log("Senha correta");
      this.senhaCorreta = true;
    } else {
      console.log("Senha errada");
      this.senhaCorreta = false;
    }
  }

  alterarSenha(atual, nova) {
    if (this.#senha === atual) {
      this.#senha = nova;
      console.log("Senha alterada com sucesso!");
    } else {
      console.log("Não foi possível alterar a senha...");
    }
  }
}

const meuCofre = new Cofre();

meuCofre.verificarSenha(1234);
meuCofre.alterarSenha(1234, 5678);
meuCofre.verificarSenha(1234);
meuCofre.verificarSenha(5678);
