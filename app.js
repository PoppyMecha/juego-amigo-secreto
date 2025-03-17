// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigoSecreto = [];
let nombreSorteado = [];
let cantidadDeAmigos = listaAmigoSecreto.length;


function agregarAmigo() {
    let nombreDeAmigo = document.querySelector('#amigo').value;
    
    if (nombreDeAmigo == ''){
        alert('Ingrese un nombre válido');
    } else {
        listaAmigoSecreto.push(nombreDeAmigo);
        limpiarCaja();
    }
    console.log(listaAmigoSecreto);
}


function limpiarCaja() {
    document.getElementById('amigo').value ='';
}

function sortearAmigo() {
    let amigoSorteado = parseInt(Math.floor(Math.random()*cantidadDeAmigos));
}