// Usar a API ViaCEP: https://viacep.com.br/ws/01001000/json/

// Mostrar: Rua, Bairro, Cidade, Estado

const url = "https://viacep.com.br/ws/";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  procuraCep(e);
});

async function procuraCep(e) {
  e.preventDefault();

  const dadosForm = new FormData(form);

  const cep = dadosForm.get("cep");

  const json = await fetch(`${url + cep}/json/`);
  const dadosJson = await json.json();

  const campos = ["estado", "cidade", "bairro", "rua"];
  const elementos = campos.map(
    (campo) => (campo = document.createElement("p")),
  );

  const [estado, cidade, bairro, rua] = elementos;

  estado.innerText = "Estado: " + dadosJson.uf;
  cidade.innerText = "Cidade: " + dadosJson.localidade;
  bairro.innerText = "Bairro: " + dadosJson.bairro;
  rua.innerText = "Rua: " + dadosJson.logradouro;

  const container = document.createElement("div");
  container.appendChild(estado);
  container.appendChild(cidade);
  container.appendChild(bairro);
  container.appendChild(rua);

  document.body.appendChild(container);
}
