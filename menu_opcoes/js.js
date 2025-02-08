let adicionado = []; 



/////////////////////////////////////////////////////////////////////////
function criar() {
    const nome = prompt("Digite o nome do produto:");
    const preco = prompt("Digite o preço do produto:");
    
    if (nome && preco) {
   
        adicionado.push({ nome, preco })   //esse push coloca os atributos nome e preço no array adicionado que incialmente esta vazio
        alert("Produto cadastrado!");
    } else {
        alert("Preencha todos os campos.");
    }
}

//////////////////////////////////////////////////////////////////////////////


function listar() {
    
    const produtos = document.getElementById("produtos");
      produtos.innerHTML = ""


    if (adicionado.length === 0) { // esse "length" retorna o número de elementos no array
        produtos.innerHTML = "<p>Nenhum produto cadastrado.</p>";
    } else {
       
        adicionado.forEach((produto, index) => {
            const listar = document.createElement("div");
           listar.classList.add("produto");

            listar.innerHTML = ` <p><strong>Produto ${index + 1}:</strong> ${produto.nome}</p>
     <p><strong>Preço:</strong> R$ ${produto.preco}</p>
            <button onclick="editar(${index})">Editar</button>
            <button onclick="apagar(${index})">Apagar</button>
            `;
            produtos.appendChild(listar);
        });
    }
}


/////////////////////////////////////////////////////////////////////////

function editar(index) {
    const novoNome = prompt("Digite o novo nome do produto:", adicionado[index].nome);
    const novoPreco = prompt("Digite o novo preço do produto:", adicionado[index].preco);

    if (novoNome && novoPreco) {
    
        adicionado[index].nome = novoNome;
        adicionado[index].preco = novoPreco;

        alert("Produto editado!");
    } else {
        alert("Preencha todos os campos.");
    }

 
    listar()
}



//////////////////////////////////////////////////////////////////////////////////


function apagar(index) {
    if (confirm("Tem certeza que deseja excluir este produto?")) {
       
        adicionado.splice(index, 1);

        alert("Produto apagado!");
    }
    listar();
}
