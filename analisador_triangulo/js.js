function analisar(){
    const um = +(document.getElementById("um").value)
    const dois = parseFloat(document.getElementById("dois").value)
    const tres = parseFloat(document.getElementById("tres").value)

    let triangulo = true
    let resposta

    if (um + dois > tres && um + tres > dois && dois + tres > um) {
      triangulo = true
      
}
 else{
    triangulo = false
    alert("Esses valores não formam um triângulo")
 }

 if(triangulo){
    if(um === dois && dois === tres){
        resposta = "Equilátero"
    }
    else if(um === dois || dois === tres || tres === um){
       resposta = "Isóceles"
    }
    else{
        resposta = "Escaleno"
     }
 }
 
const respostaa = document.getElementById("resposta")
respostaa.style.display = "block"

   if(triangulo){
    respostaa.innerHTML = `
É um triângulo <u> ${resposta} </u> ` 

   }
}