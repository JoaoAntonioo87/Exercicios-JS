// Crie um relógio digital que exiba a hora atual no console a cada segundo.

function relogio() {
  setInterval(() => {
    const time = new Date();
    console.log(
      time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds(),
    );
  }, 1000);
}

relogio();
