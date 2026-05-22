// Consumir uma API de clima.

// Mostrar
// Temperatura
// Cidade
// Umidade
// Ícone do clima

// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

const lat = -25.4284;
const lon = -49.2733;
const appid = "275d39ca38952bc7f9ba8cb6418cbfe3";

const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${appid}`;

async function buscarClima() {
  const json = await fetch(url);
  const data = await json.json();
  console.log(data);
}

buscarClima();
