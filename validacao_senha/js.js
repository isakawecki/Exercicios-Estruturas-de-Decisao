function validacao(){
    const senha = document.getElementById("senha").value
    const quantidade = /.{8,}/
    const maiuscula = /[A-Z]/ 
    const minuscula = /[a-z]/
    const sla = /[!@#$%^&*]/
    const numero= /\d/  
     
    const senhavalida = true
    
    if (!quantidade.test(senha)){
        alert("A senha deve conter pelo menos 8 caracteres")
        senhavalida = false
    }
    if (!maiuscula.test(senha)){
        alert("A senha deve conter pelo menos uma letra maiuscula")
        senhavalida = false
    }
    if (!minuscula.test(senha)){
        alert("A senha deve conter pelo menos uma letra minuscula")
        senhavalida = false
    }
    if (!numero.test(senha)){
        alert("A senha deve conter pelo menos um número")
        senhavalida = false
    }
    if (!sla.test(senha)){
        alert("A senha deve conter pelo menos um caractere especial")
        senhavalida = false
    }

    if (senhavalida){
        alert("Senha Valida!")
        document.getElementById("senha").value = ""
    }

   
  
}
 
