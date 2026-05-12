// Simule uma validação de login.

function validarLogin(usuario, senha) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuario === "admin" && senha === "123") {
        resolve("Login realizado");
      } else {
        reject("Usuário ou senha inválidos");
      }
    }, 1000);
  });
}

async function iniciar(usuario, login) {
  const user = await validarLogin(usuario, login);
  console.log(user);
}

iniciar("admin", "123");
