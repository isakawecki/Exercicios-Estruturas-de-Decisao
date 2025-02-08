function recomendar(){
   
    const genero = document.getElementById("genero").value
    const antes2010 = document.getElementById("antes").checked
    const dps2010 = document.getElementById("depois").checked
    const ator = document.getElementById("ator").value
    const resposta = document.getElementById("resposta")
    let sla = "Com base nas suas escolhas, recomendo o filme : "
    let actor = " O ator que você selecionou não se encaixa nas outras categorias, mas podemos te indicar: "

 

    if(genero === "acao" && antes2010){
        if( ator === "arnorld" ){
           resposta.innerHTML = sla += "<b> Exterminador do futuro</b>"
        }
        else if( ator === "nada" ){
           resposta.innerHTML = sla += "<b>Duro de matar</b>"
        }
        else{
           resposta.innerHTML = actor += "<b>Duro de Matar</b>"
        }

    }   
    else if(genero === "acao" && dps2010){
        if( ator === "bald" ){
           resposta.innerHTML = sla += "<b> Jumanji: Bem-Vindo à Selva</b>"
        }
        else if( ator === "nada" ){
            resposta.innerHTML = sla += "<b>John Wick</b>"
         }
        else{
           resposta.innerHTML = actor += "<b>John Wick</b>"
        }

        }
    
    else if(genero === "comedia" && antes2010){
        if( ator === "bill" ){
           resposta.innerHTML = sla += "<b>Os Caça-Fantasmas</b>"
        }
        else if( ator === "nada" ){
            resposta.innerHTML = sla += "<b>Feitiço do Tempo</b>"
         }
        else{
           resposta.innerHTML = actor += "<b>Feitiço do Tempo </b>"
        }

        }
    
    else if(genero === "drama" && antes2010){
        if( ator === "tom" ){
           resposta.innerHTML = sla += "<b>Forrest Gump</b>"
        }
        else if( ator === "nada" ){
            resposta.innerHTML = sla += "<b>Cidade de Deus</b>"
         }
        else{
           resposta.innerHTML = actor += "<b>Cidade de Deus</b>"
        }

        }
    
    else if(genero === "comedia" && dps2010){
        if( ator === "paulo" ){
           resposta.innerHTML = sla += "<b>Minha mãe é uma peça</b>"
        }
        else if( ator === "nada" ){
            resposta.innerHTML = sla += "<b>Minha mãe é uma peça</b>"
         }
        else{
           resposta.innerHTML = actor+= "<b>Minha mãe é uma peça</b>"
        }

        }
    
    }