function calcular() {
    const aa = parseFloat(document.getElementById("valor1").value);
    const bb = parseFloat(document.getElementById("valor2").value);
    const operacao = document.getElementById("ope").value;
    const respostaa = document.getElementById("respostaa");

   

   
    if (operacao === "raiz") {
        document.getElementById("valor2").style.display = "none";
        document.getElementById("sla").style.display = "none";
      
    } else {
        document.getElementById("valor2").style.display = "block";
       

    }

    let resposta = "O resultado é: ";

    switch (operacao) {
        case "soma":
            respostaa.innerHTML = resposta + (aa + bb);
            break;

        case "subtracao":
            respostaa.innerHTML = resposta + (aa - bb);
            break;

        case "multiplicacao":
            respostaa.innerHTML = resposta + (aa * bb);
            break;

        case "porcentagem":
            respostaa.innerHTML = resposta + ((aa * bb) / 100);
            break;

        case "divisao":
            if (bb === 0) {
                alert("ERRO - divisão por zero");
            } else {
                respostaa.innerHTML = resposta + (aa / bb);
            }
            break;

        case "raiz":
            if (isNaN(aa)) {
                respostaa.innerHTML = "Insira um número válido.";
            } else {
                respostaa.innerHTML = resposta + Math.sqrt(aa);
            }
            break;

        default:
            respostaa.innerHTML = "Operação inválida.";
    }
}