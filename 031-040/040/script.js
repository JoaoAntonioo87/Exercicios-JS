// Crie uma função assíncrona que simule a busca de um usuário em um servidor usando setTimeout.

function buscarUsuario() {
  console.log("Buscando usuário...");
  setTimeout(() => {
    console.log("Usuário encontrado");
    console.log({
      nome: "João",
      idade: 25,
    });
  }, 2000);
}

async function executar() {
  const user = await buscarUsuario();
}

executar();
