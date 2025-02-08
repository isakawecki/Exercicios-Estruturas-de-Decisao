function avaliar(){
    const codigo = document.getElementById("codigo").value
    const variaveis = ["const" , "var" , "let"]
    const loop = ["for" , "while"]
    const funcao = "function"
    const cond = "if"
    let analise 
    let avaliacao = 0
     let analisedois


    const variavelsim = variaveis.some(isa => codigo.includes(isa))
    if (variavelsim){
    analise = "-Seu código inclui variáveis <br>"
    avaliacao ++
    }
    else{
        analise = "-Seu código não inclui variáveis <br>"  
    }


    const loopsim = loop.some(lo => codigo.includes(lo))
    if (loopsim){
    analise += "-Seu código inclui loops <br>"
    avaliacao ++
    
    }
    else{
        analise += "-Seu código não inclui loops<br>"  
    }


    if(codigo.includes(funcao)){
        analise += "-Seu Código possue função<br> " 
        avaliacao ++   
    }
    else{
    analise += "-Seu código não possue uma função<br>"  
}

    if(codigo.includes(cond)){
        analise += "-Seu Código possue uma condicional<br> " 
        avaliacao ++   
    }
    else{
    analise += "-Seu código não possue uma condicional<br>"  
}


   switch(avaliacao){
    case 4:
    case 3:
        analisedois = "Seu código está bom!"
        break;
    case 2:
    case 1:
        analisedois = "<b>Seu código está regular!"
        break;
    case 0 : 
        analisedois = "<b>Seu código está ruim!"
        break;
   }

 




    const respostaa = document.getElementById("resposta")
     respostaa.style.display = "block"
    respostaa.innerHTML = analise + analisedois
    document.getElementById("codigo").value = ""
    
}