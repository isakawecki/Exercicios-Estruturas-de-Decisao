function media(){
    const primeira = parseInt(document.getElementById("noum").value)
    const segunda = parseInt(document.getElementById("nodois").value)
    const terceira = parseInt(document.getElementById("notres").value) 


    let resultado  

    if (isNaN(primeira) || isNaN(segunda) || isNaN(terceira) || primeira < 0 || primeira > 10 || segunda < 0 || segunda > 10 || terceira < 0 || terceira > 10) {
        alert("Insira notas com valor entre 0 e 10")
    }

    

  

const mediac = (primeira + (segunda * 2) + (terceira * 3)) / 6;


if (mediac >= 9) {
    resultado = "Excelente"
}
else if (mediac >= 7 && mediac < 9) {
    resultado = "Bom"
}
else if (mediac >= 5 &&  mediac < 7) {
    resultado = "Regular"
}

else if (mediac < 5){
    resultado = "Ruim"
}

if( primeira == 0 || segunda == 0 || terceira == 0) {
    resultado = " Desqualificado"
}


const respostaa = document.getElementById("resposta")
respostaa.style.display = "block"

respostaa.innerHTML = `-A sua classificação é <u>${resultado} </u> <br> -Sua média é igual a ${mediac.toFixed(2)}` 
}
