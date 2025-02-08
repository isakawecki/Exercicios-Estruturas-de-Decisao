function converter() {
    const valor = parseFloat(document.getElementById("valor").value)
    const inicio = document.getElementById("inicio").value
    const final = document.getElementById("final").value

    let respostaa

    if (isNaN(valor)) {
        document.getElementById("resultado").innerHTML = "Por favor, insira um número válido."
        return
    }

    switch (inicio) {
        case "km":
            switch (final) {
                case "milhas":
                    respostaa = valor * 0.621371
                    break
                case "metros":
                    respostaa = valor * 1000
                    break
                case "pes":
                    respostaa = valor * 3280.84
                    break
                default:
                    respostaa = "Erro na unidade de conversão"
            }
            break

        case "m":
            switch (final) {
                case "milhas":
                    respostaa = valor * 0.000621371
                    break
                case "km":
                    respostaa = valor / 1000
                    break
                case "pes":
                    respostaa = valor * 3.28084
                    break
                default:
                    respostaa = "Erro na unidade de conversão"
            }
            break

        case "pes":
            switch (final) {
                case "milhas":
                    respostaa = valor * 0.000189394
                    break
                case "km":
                    respostaa = valor * 0.0003048
                    break
                case "metros":
                    respostaa = valor * 0.3048
                    break
                default:
                    respostaa = "Erro na unidade de conversão"
            }
            break

        default:
            respostaa = "Erro na unidade inicial."
    }

    document.getElementById("resultado").innerHTML = `O resultado da conversão de ${valor}${inicio} para ${final} é: <b> ${respostaa}  ${final}`
}