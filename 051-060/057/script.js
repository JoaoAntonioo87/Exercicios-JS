// Criar funções para:

// GET → listar tarefas
// POST → criar tarefa
// PUT → editar tarefa //// OBS.: não tem esse método neste recurso
// DELETE → remover tarefa //// OBS.: não tem esse método neste recurso

// https://jsonplaceholder.typicode.com/todos

const url = "https://jsonplaceholder.typicode.com/todos";

const container = document.createElement("div");
document.body.appendChild(container);

const getDataBtn = document.querySelector("#getData");
const postDataBtn = document.querySelector("#postData");
const postDataInput = document.querySelector("#postDataInput");

function renderData(render) {
  if (Array.isArray(render)) {
    render.forEach((e) => {
      const p = document.createElement("p");
      p.innerText = e.title;
      p.classList.add("task");
      container.appendChild(p);
    });
  } else {
    const p = document.createElement("p");
    p.innerText = render.title;
    container.appendChild(p);
  }
}

async function getData() {
  const json = await fetch(url);
  const data = await json.json();
  const dataTrue = data.filter((item) => item.completed === true);

  renderData(dataTrue);
}

async function postData(data) {
  const task = {
    completed: "true",
    id: Math.floor(Math.random() * 10) + 200,
    title: data,
    userId: Math.floor(Math.random() * 10) + 1,
  };

  const postData = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(task),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Falha no envio");
      }
      return response.json();
    })
    .catch((error) => console.error("Erro:", error));

  renderData(task);
}

function changeData() {}

getDataBtn.addEventListener("click", () => {
  if (!document.querySelector(".task")) {
    getData();
  }
});

postDataBtn.addEventListener("click", () => postData(postDataInput.value));
