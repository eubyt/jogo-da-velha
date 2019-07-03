var vez = "X";
var saveJogadas = [];


function jogar(campo) {
    var possicao = campo.getAttribute("possicao");

    if (!saveJogadas.includes(possicao)) {
        campo.innerHTML = vez;
        saveJogadas.push(possicao);
        
        if (vez == "X") 
           vez =  "O";
        else
           vez = "X";
    }

}




click = (elemento) => {
    var jogo = elemento.target.getAttribute("jogo");
    
    if (jogo == "campo") {
        jogar(elemento.target)
    } 

};


module.exports = { click };