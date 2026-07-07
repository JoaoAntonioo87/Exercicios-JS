// Crie um módulo responsável apenas por gerar mensagens e outro responsável apenas por exibi-las. O arquivo principal deverá coordenar a comunicação entre eles.

import createMessage from "./messages.js";
import displayMessage from "./display.js";

// displayMessage(createMessage("João"));
const nome = createMessage("José");
displayMessage(nome);
