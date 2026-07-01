// Crie uma função que receba uma idade mínima e retorne outra função que diga se determinada pessoa pode ou não passar pelo filtro.

function pessoa(idade) {
  return {
    podeDirigir() {
      if (idade >= 18) {
        console.log("Pode dirigir!");
      } else {
        console.log("Não pode dirigir...");
      }
    },
  };
}

const joao = pessoa(21);
const joao2 = pessoa(12);
joao.podeDirigir();
joao2.podeDirigir();
