// Simule uma requisição que retorna um usuário após 1 segundo.

function getUser() {
  const user = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Usuário encontrado");
    }, 1000);
  });
  return user;
}

async function login() {
  const user = await getUser();
  console.log(user);
}

login();
