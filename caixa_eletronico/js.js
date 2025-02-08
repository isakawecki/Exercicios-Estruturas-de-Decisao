function depositar() {
    const deposito = parseFloat(document.getElementById("dep").value)
    let saldo = parseFloat(document.getElementById("saldo").textContent)

   
 
    let novosaldo = deposito + saldo
    document.getElementById("saldo").textContent = novosaldo.toFixed(2)
    document.getElementById("dep").value = ""
}

function sacar() {
    const saque = parseFloat(document.getElementById("saq").value)
    let saldo = parseFloat(document.getElementById("saldo").textContent)



if(saque > saldo){
    alert("Você não tem essa quantia para sacar!")
    document.getElementById("saq").value = "" 

}

else{
 
    let novosaldo = saldo - saque;
    document.getElementById("saldo").textContent = novosaldo.toFixed(2)
    document.getElementById("saq").value = ""
}

}