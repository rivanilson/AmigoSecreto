let listaDeAmigos = [];

function adicionarAmigo(){
    let nome = document.getElementById("amigo").value;
    if (nome==="") {
        alert('Por favor, insira um nome');
        
    //Verifica se o nome digitado ja consta na lista
    } else if (listaDeAmigos.includes(nome)){
        alert (['O nome', nome, 'ja está na lista'].join(' '));
        limparCampo();

    //inclui o nome a lista
    }else {
        listaDeAmigos.push(nome);
        limparCampo();
        atualizarLista();
    }   
}
    
function limparCampo(){
    nome = document.getElementById("amigo");
    nome.value = '';
}

function atualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    listaDeAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaDeAmigos.length < 2) {
        alert("Adicione 2 ou mais amigos à lista antes de realizar o sorteio.");
        return;
    }
    let sorteado = listaDeAmigos[Math.floor(Math.random() * listaDeAmigos.length)];
    document.getElementById("resultado").textContent = "Amigo sorteado:" + sorteado;
}

