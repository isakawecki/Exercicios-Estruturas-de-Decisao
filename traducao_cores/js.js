function traduzir(){
    const cor = document.getElementById("cor").value.toLowerCase()
    const resposta = document.getElementById("resposta")
    const nu = `A cor ${cor}, em inglês é <u>`
    

    switch(cor){

        case "amarelo":
            resposta.innerHTML =  nu + `Yellow`
            break;

        case "azul":
            resposta.innerHTML =  nu +`Blue`
            break;

        case "cinza":
            resposta.innerHTML =  nu +`Gray`
            break;

        case "roxo":
            resposta.innerHTML =  nu + `Purple`
            break;

        case "laranja":
            resposta.innerHTML =  nu +`Orange`
            break;

        case "verde":
            resposta.innerHTML =  nu + `Green`
            break;

        case "preto":
            resposta.innerHTML =  nu +`Black`
            break;

        case "rosa":
            resposta.innerHTML =   nu +`Pink`
            break;

        case "marrom":
            resposta.innerHTML =  nu + `Brown`
            break;

        case "branco":
            resposta.innerHTML =   nu +`White`
            break;

        case "vermelho":
            resposta.innerHTML =  nu +`Red`
            break;

        default:
            alert("Cor não cadastrada!")
            document.getElementById("cor").value = ""
        

    }

    




}