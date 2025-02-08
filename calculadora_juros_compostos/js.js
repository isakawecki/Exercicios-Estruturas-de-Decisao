function calcular() {
    const cap = parseFloat(document.getElementById("cap").value)
    const taxa = parseFloat(document.getElementById("juros").value) / 100
    const tempo = parseFloat(document.getElementById("tempo").value)
    const freq = document.getElementById("freq").value
    let fre

    if (freq === "anual") {
        fre = 1;
    } else if (freq === "mensal") {
        fre = 12
    } else if (freq === "diaria") {
        fre = 365
    }

    const montante = cap * Math.pow((1 + taxa / fre), fre * tempo)
    const lucro = montante - cap

    let resultados = ""
    for (let ano = 1; ano <= tempo; ano++) {
        const tem = cap * Math.pow((1 + taxa / fre), fre * ano)
        const lucroAno = tem - cap
        resultados += `Após ${ano} ano(s): R$ ${tem.toFixed(2)}, o lucro é de R$ ${lucroAno.toFixed(2)})<br>`
    }
    const resposta = document.getElementById("resposta")
    resposta.innerHTML = `-Montante Final: R$ ${montante.toFixed(2)} <br> -O lucro foi de R$ ${lucro.toFixed(2)} <br><br>${resultados}`
}