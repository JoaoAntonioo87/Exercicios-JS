// Primeiro carregue dados do usuário e depois carregue posts e comentários ao mesmo tempo.

function usuario() {
  return Promise.resolve("Usuário carregado");
}

function posts() {
  return Promise.resolve("Posts carregados");
}

function comentarios() {
  return Promise.resolve("Comentários carregados");
}

async function iniciar() {
  const user = await usuario();
  console.log(user);
  const todos = await Promise.all([posts(), comentarios()]);
  console.log(todos);
}

iniciar();
