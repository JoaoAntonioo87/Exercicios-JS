const url = "https://jsonplaceholder.typicode.com/users";

const input = document.querySelector("#name");

async function getUsers() {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function showUsers() {
  const users = await getUsers();

  // Container para os nomes
  const container = document.createElement("div");
  document.body.appendChild(container);

  function renderUsers(filter = "") {
    container.innerHTML = "";

    users
      .filter((person) =>
        person.name.toLowerCase().includes(filter.toLowerCase()),
      )
      .forEach((person) => {
        const h1 = document.createElement("h1");
        h1.innerText = person.name;
        container.appendChild(h1);
      });
  }

  // Renderiza todos inicialmente
  renderUsers();

  // Filtra conforme digita
  input.addEventListener("keyup", (e) => {
    renderUsers(e.target.value);
  });
}

showUsers();
