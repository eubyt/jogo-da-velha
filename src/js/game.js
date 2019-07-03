import "../css/style.css";

import ui from'./pagina/ui.js'
import jogo from './game/jogo.js';

const estrutura = { 
    1: ["a1", "a2", "a3"],
    2: ["b1", "b2", "b3"],
    3: ["c1", "c2", "c3"]
};

window.addEventListener("load", ui.construir(estrutura));
document.body.addEventListener("click", jogo.click);
