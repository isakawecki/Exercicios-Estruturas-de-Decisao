function analisar() {
    const dia = parseInt(document.getElementById("dia").value)
    const mes = parseInt(document.getElementById("mes").value)
    const ano = parseInt(document.getElementById("ano").value)

    let resultado

    if (mes < 1 || mes > 12) {
        resultado = "O mês deve ser entre 1 e 12."
    } else if (dia < 1 || dia > 31) {
        resultado = "O dia deve ser entre 1 e 31."
    } else if (ano < 0) {
        resultado = "Ano inválido."
    } else {
        let diames

        switch (mes) {
            case 1:
             case 3:
              case 5: 
              case 7:
              case 8:
              case 10:
              case 12:
                diames = 31
                break
            case 4:
            case 6:
            case 9:
             case 11:
                diames = 30
                break
            case 2:
                if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
                    diames = 29
                } else {
                    diames = 28
                }
                break
            default:
                diames = 0
        }

        if (dia > diames) {
            resultado = `O mês ${mes} do ano ${ano} não tem ${dia} dias.`
        } else {
            resultado = `A data ${dia}/${mes}/${ano} é válida `
        }
    }

    document.getElementById("resultado").innerHTML = resultado
}