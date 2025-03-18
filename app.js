let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo"); // Captura o valor do campo de entrada
    let nome = input.value.trim(); // Remove espaços extras no início e no fim

    if (nome === "") {
        alert("Por favor, insira um nome."); // Validação de entrada vazia
        return;
    }

    amigos.push(nome); // Adiciona o nome ao array de amigos
    atualizarLista();
    input.value = ""; // Limpa o campo de entrada
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos"); // Obtém o elemento da lista
    lista.innerHTML = ""; // Limpa a lista antes de atualizar

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li"); // Cria um novo elemento <li>
        item.textContent = amigos[i]; // Define o texto do <li> como o nome do amigo
        lista.appendChild(item); // Adiciona o item à lista
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear!");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length); // Gera um índice aleatório
    let amigoSorteado = amigos[indiceSorteado]; // Obtém o nome correspondente

    let resultado = document.getElementById("resultado"); // Obtém o elemento de resultado
    resultado.innerHTML = `<li>O amigo secreto é: <strong>${amigoSorteado}</strong></li>`; // Exibe o nome sorteado
}
