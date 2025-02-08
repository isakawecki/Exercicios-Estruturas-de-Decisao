function calcular() {
    const tipo = document.getElementById("produto").value
    const valor = parseFloat(document.getElementById("valor").value)
    const calculo = document.getElementById("calculo")
    let imposto
    let aliquota
  
    switch (tipo) {
        case 'a':
            aliquota = 0.05
            break
        case 'b':
            aliquota = 0.2
            break
        case 'c':
            aliquota = 0.4
            break
    
         
    }

    imposto = valor * aliquota

calculo.innerHTML = `O imposto sobre o produto ${tipo} é de: R$ ${imposto.toFixed(2)}`
}
