// Crie um módulo contendo constantes como nome do site, idioma padrão e número máximo de itens por página. Utilize essas configurações em outro arquivo.

import defaultConfig from "./config.js";

for (let i in defaultConfig) {
  console.log(i + ": " + defaultConfig[i]);
}
