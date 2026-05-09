// Transforme o consumo de uma Promise em uma função async usando await.

async function chamadaApi() {
  const resultado = await setTimeout(
    () => console.log("Dados carregados"),
    2000,
  );
}

chamadaApi();
