// Crie uma função buscarUsuario() que simule uma requisição e retorne um objeto de usuário após 3 segundos.

async function buscarUsuario() {
  const resultado = await setTimeout(() => {
    console.log({ nome: "João", idade: 21 });
  }, 3000);
}

buscarUsuario();
