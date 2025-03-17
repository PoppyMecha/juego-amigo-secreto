// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
let nombreSorteado = [];


function agregarAmigo() {
    let nombreAmigo = document.querySelector('#amigo');
    let amigo = nombreAmigo.value;

    nombreAmigo.focus();

    if (amigo == '') {
        alert('Ingrese un nombre válido');
    } else {
        if (listaAmigos.includes(amigo)){
            alert("Amigo ya ingresado, intenta con otro nombre");
            nombreAmigo.value = "";
        } else {
            listaAmigos.push(amigo);
            nombreAmigo.value = "";
            mostrarListaAmigos();
        }  
    }  
}


function mostrarListaAmigos() {
    let listaImpresa = document.getElementById("listaAmigos");
    listaImpresa.innerHTML = "";
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        listaImpresa.appendChild(li);
    }
    return;
}


function sortearAmigo() {
    let amigoSorteado = listaAmigos[Math.floor(Math.random()*listaAmigos.length)];
    let resultado = document.getElementById("resultado");
    if (listaAmigos.length == 0){
        alert('Lista de amigos vacía, ingrese al menos un nombre');
        return;
    } else {
        if (listaAmigos.length == nombreSorteado.length){
            alert('Se sortearon todos los amigos');
        } else {
            if (nombreSorteado.includes(amigoSorteado)){
                return sortearAmigo();
            } else {
                resultado.innerHTML = `Tu amigo secreto es ${amigoSorteado}!!!`;
                nombreSorteado.push(amigoSorteado)
                console.log(nombreSorteado)
            }
        }
    }
}