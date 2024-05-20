var button, quebra_linha, jogada = 1
var tabuleiro = new Array(3)
    for(var i = 0; i< tabuleiro.length; i ++){
        tabuleiro[i] = new Array(3)
}
    for(var i = 0; i< tabuleiro.length; i ++){
        quebra_linha = document.createElement("br")
        document.body.append(quebra_linha)
        for(var j = 0; j< tabuleiro[i].length;j++){
            button = document.createElement("button")
            button.setAttribute("type", "button")
            button.setAttribute("id", "bt"+i+""+j)
            button.setAttribute("class", "btJogo" +i)
            button.setAttribute("onclick", "marcaCasa('bt"+ i + j + "')")
            button.append(document.createTextNode(""))
            document.body.append(button)
        }            
}

    function marcaCasa(nomeBotao){
        if(jogada % 2 == 0){
            document.getElementById(nomeBotao).innerText = "O"
            document.getElementById(nomeBotao).style.color = "darkGreen"
        }else{ document.getElementById(nomeBotao).innerText = "X"
        document.getElementById(nomeBotao).style.color = "darkblue"
    }
       
        document.getElementById(nomeBotao).disabled = true
        jogada ++
        if(jogada >= 5)+
        encerraJogo()
    }
    function verificaLinha(a, b, c) {
        return a.innerText === b.innerText && b.innerText === c.innerText && a.innerText !== "";
    }
    function encerraJogo(){
        var linhas = [
            ["bt00", "bt01", "bt02"],
            ["bt10", "bt11", "bt12"],
            ["bt20", "bt21", "bt22"],
            ["bt00", "bt10", "bt20"],
            ["bt01", "bt11", "bt21"],
            ["bt02", "bt12", "bt22"],
            ["bt00", "bt11", "bt22"],
            ["bt02", "bt11", "bt20"]
        ];

        for (var i = 0; i < linhas.length; i++) {
            var [a, b, c] = linhas[i];
            var botaoA = document.getElementById(a);
            var botaoB = document.getElementById(b);
            var botaoC = document.getElementById(c);

            if (verificaLinha(botaoA, botaoB, botaoC)) {
                alert("Jogo Finalizado!\nVencedor: " + botaoA.innerText);
                return;
            }
        }
        
    }
    criaTabuleiro();