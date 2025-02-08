function conceito(){
    const letra = document.getElementById("letra").value
    const resposta = document.getElementById("resposta")
    const nu = "O desempenho é: "

    const sla = letra.toUpperCase();  //toUpperCase() serve para transformar tudo em letras maiusculas
    

    switch(sla){

        case "A":
            resposta.innerHTML =  nu + `Excelente`
            break;

        case "B":
            resposta.innerHTML =  nu +`Bom`
            break;

        case "C":
            resposta.innerHTML =  nu + `Regular`
            break;

        case "D":
            resposta.innerHTML =  nu +`Ruim`
            break;

        case "F":
            resposta.innerHTML =  nu + `Insuficiente`
            break;

     

        default:
            alert("Insira somente A , B , C ou D")
            document.getElementById("letra").value = ""
        

    }





}