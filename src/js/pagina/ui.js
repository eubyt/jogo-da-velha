
construir = (estrutura) => {

    var _html = "";
    var _vertical = 1;

    Object.keys(estrutura).forEach((key) => {

        var styleX = "a";
        if (_vertical++ == Object.keys(estrutura).length) 
        styleX = "b";

        ((_callback) => {

            var _resultado = "";
            var _horizontal = 1;
            estrutura[key].forEach((quadrado) => {
    
             var style = `tipo-${styleX}1`;
             if (_horizontal++ == estrutura[key].length) style = `tipo-${styleX}2`;
    
             _resultado += `<td class="${style}" jogo="campo" possicao="${quadrado}" ></td>`;
    
            });
    
            _callback(_resultado);
            
        })((resultado) => _html += `<tr> ${resultado} </tr>` );
        
    });



    document.body.innerHTML += `<table><tbody> ${_html} </tbody></table>`;

};



module.exports = { construir };