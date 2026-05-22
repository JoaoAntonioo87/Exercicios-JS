// Consumir uma API de clima.

// Mostrar
// Temperatura
// Cidade
// Umidade
// Ícone do clima

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const lat = -25.43;
const lon = -49.27;
const appid = "275d39ca38952bc7f9ba8cb6418cbfe3";

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appid}`;

const container = document.createElement("div");
document.body.appendChild(container);

async function buscarClima() {
  const json = await fetch(url);
  const data = await json.json();

  const temp = (data.current.temp - 273).toFixed(2);
  const city = "Curitiba";
  const humidity = data.current.humidity + "%";
  const icon = `https://openweathermap.org/payload/api/media/file/${data.current.weather[0].icon}.png`;

  if (temp < 12) {
    container.style.backgroundColor = "DodgerBlue";
  } else if (temp < 20) {
    container.style.backgroundColor = "Coral";
  } else {
    container.style.backgroundColor = "FireBrick";
  }

  container.insertAdjacentHTML(
    "beforeend",
    `
    <h1>${temp}</h1>
    <h1>${city}</h1>
    <h1>${humidity}</h1>
    <img src="${icon}" alt="Weather icon">
    `,
  );
}

buscarClima();
