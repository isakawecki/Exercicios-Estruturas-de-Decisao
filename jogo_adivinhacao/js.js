
const aleatorio = Math.floor(Math.random() * 100) + 1
let tentativas = 7

function adivinhar(){

    const chute = parseInt(document.getElementById("chute").value)
    const resultado = document.getElementById("resultado")

    if (isNaN(chute) || chute < 1 || chute > 100) {
        resultado.innerHTML = "Insira um número entre 1 e 100"
        return
    }

    tentativas--

    if (chute === aleatorio) {
        resultado.innerHTML = `Você adivinhou o número ${aleatorio} em ${7 - tentativas} tentativas! Parabéns!😁`
        return;
    }

    let dica 
    const diferenca = Math.abs(aleatorio - chute)

    if (diferenca < 10) {
        dica = " Está quente!"
    } 
    else if (diferenca > 20) {
        dica = "Está frio!"
    }

    if (chute < aleatorio) {
        dica += " Muito baixo"
    }
     else {
        dica += " Muito alto"
    }

    if (tentativas > 0) {
        resultado.innerHTML = `${dica} <br> Tentativas restantes: ${tentativas}`
    }
     else {
        resultado.innerHTML = `Você perdeu! O número era ${aleatorio}`
    }

}
