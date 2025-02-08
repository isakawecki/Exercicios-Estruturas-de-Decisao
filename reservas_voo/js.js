function classe(){
    const PassageirosNum = parseInt(document.getElementById("pass").value)
    const classe = document.getElementById("classe").value
    const adjacente = parseInt(document.getElementById("adj").value)
    let assentos = 0
    let Classe = ""
    let Adja = 0

    if(isNaN(PassageirosNum)){
        alert("Insira a quantidade de passageiros")
        return
    }
   
        if(classe === "econ"){
            assentos = 80
            Classe = "Econômica"
            Adja = 6
        }

        else if( classe === "exe"){
            assentos = 50
            Classe = "Executiva"
            Adja = 3
        }
        
        else if( classe === "prime"){
            assentos = 20
            Classe = "Primeira Classe"
            Adja = 1
        }
    


       if(PassageirosNum > assentos){
        alert("Não há essa quantia de assentos dispóniveis nessa classe")
        return
       }

       if(adjacente > Adja){
        alert("Não há essa quantia de assentos adjacentes dispóniveis nessa classe")
        return
       }

       const resto = assentos - PassageirosNum;

       alert("Reserva concluida com sucesso!")



       document.getElementById("resposta").innerHTML = `Sua reserva foi confirmada na Classe ${Classe}<br>
        Passageiros reservados: ${PassageirosNum} <br>
        Assentos restantes na classe ${Classe}: ${resto} `

  

    }
