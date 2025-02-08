function imc(){
    const idade = parseFloat(document.getElementById("idade").value)
    const peso = parseFloat(document.getElementById("peso").value)
    const altura = parseInt(document.getElementById("altura").value) / 100

    if (isNaN(idade) || isNaN(peso) || isNaN(altura) || altura <= 0) {
        alert("Por favor, insira valores válidos para idade, peso e altura.")}

const imcconta = peso / (altura * altura);
let resultado 

if (imcconta < 18.5) {
    resultado = "Abaixo do peso"
}
else if (imcconta >= 18.5 && imcconta < 24.9) {
    resultado = "Normal"
}
else if (imcconta >= 25 && imcconta < 29.9) {
    resultado = "Sobrepeso"
}
else if (imcconta >= 30 && imcconta < 34.9) {
    resultado = "Obesidade grau I"
}
else if (imcconta >= 35 && imcconta < 39.9) {
    resultado = "Obesidade grau II"
}
else{
    resultado = "Obesidade grau III"
}

if(idade > 65) {
    if( imcconta >= 18.5 && imcconta < 24.9){
        resultado = "Abaixo do peso"
    }
    else if( imcconta >= 25 && imcconta < 29.9){
        resultado = "Normal"
    }
    else if( imcconta >= 30 && imcconta < 34.9){
        resultado = "Sobrepeso"
    }
    else if( imcconta >= 35 && imcconta < 39.9){
        resultado = "Obesidade Grau I"
    }
}
else if (idade <18 ){
    if (imcconta >= 18.5 && imcconta < 24.9){
        resultado = "Abaixo do peso"
    }
}

const respostaa = document.getElementById("resposta")
respostaa.style.display = "block"

respostaa.innerHTML = `-A sua classificação é <u>${resultado} </u> <br>
-Seu Imc é <u> ${imcconta.toFixed(2)} </u> ` 
}