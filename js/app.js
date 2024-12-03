//clonando repositorio = git clone link // no power shell
//git status = ve os status
//apos uma alteração:
//git add .
//git commit -m "oq vc mudou"
//git log ve alteração
//git remote = ve o ngc pra mandar o commit
//git push origin main = envair alteração no git do site
//tem que aceitar a pessoa la no github
//git pull origin main = vai biaxar o que ta no site


let amigos = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == ''){
        alert('digite um nome do viado arrombado filho da puta')
        return;
    }
    if(amigos.includes(amigo.value)){
        alert('nome ja adicionado');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    amigos.push(amigo.value);
    if(lista.textContent == ''){
        lista.textContent = amigo.value; //se tiver ngm ele apenas bota
    } else{
        lista.textContent = lista.textContent + ', ' + amigo.value; //se tiver alguem ele bota e adiciona uma ,
    }
    amigo.value = '';
}

function sortear(){
    if(amigos.length < 4){
        alert('minimo 4');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++){
        
        if (i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[0] + '<br>'; //i e a lista (.lenght) e 0 pq ngm pega ele
        } else{
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + '--->' + amigos[i + 1] + '<br>'; //i e a lista (.lenght) e +1 pega o proximo
        }
        
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
    
}



function reiniciar(){
    amigos = [];
    
    document.getElementById('nome-amigo').textContent = '';
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}