function jogo(escolha){
    const jogada = ['pedra', 'papel', 'tesoura']

    const jogadaop = jogada[Math.floor(Math.random() * 3)]
 
    const resposta = document.getElementById("resposta")
    resposta.src = jogadaop + ".png"
    resposta.style.display = "block"
 

    let resultado
    switch (escolha) {
        case 'pedra':
            switch (jogadaop) {
                case 'pedra':
                    resultado = "Empate!😐"
                    break
                case 'papel':
                    resultado = "Você perdeu!😢"
                    break
                case 'tesoura':
                    resultado = "Você ganhou!!!🥳"
                    break
            }
            break
        case 'papel':
            switch (jogadaop) {
                case 'pedra':
                    resultado = "Você ganhou!!!🥳"
                    break
                case 'papel':
                    resultado = "Empate!😐"
                    break
                case 'tesoura':
                    resultado = "Você perdeu!😢"
                    break
            }
            break
        case 'tesoura':
            switch (jogadaop) {
                case 'pedra':
                    resultado = "Você perdeu!😢"
                    break
                case 'papel':
                    resultado = "Você ganhou!!!🥳"
                    break
                case 'tesoura':
                    resultado = "Empate!😐"
                    break;
            }
            break
     
    }
     
    document.getElementById("resultado").innerText = resultado

}