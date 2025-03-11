//Ejercicio1
const text = document.getElementById('texto');
var tamanyoTexto = parseInt(20);

function masGrande() {
    tamanyoTexto = parseInt(2 + tamanyoTexto);
    text.style.fontSize = tamanyoTexto + 'px';
}

function masPequenya() {
    tamanyoTexto = parseInt(tamanyoTexto - 2);
    text.style.fontSize = tamanyoTexto + 'px';
}

function cambiarColor(){
    const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF', '#FF9900'];
    var currentColor = text.style.color;

    var newColor = colores[Math.floor(Math.random() * colores.length)];

    while (currentColor == newColor) {
        var newColor = colores[Math.floor(Math.random() * colores.length)];
    }

    text.style.color = newColor;
}


//Ejercicio2
var texto1;
var parrafoA;
var parrafos = [];

function anyadirP() {
    texto1 = prompt("Añade un texto: ");
    parrafoA = document.createElement('p');
    parrafoA.textContent = texto1;
    document.body.appendChild(parrafoA);
    parrafos.push(parrafoA);
}

function eliminarP() {
    if (parrafos.length > 0) {
    parrafoEliminar = parrafos.pop();
    document.body.removeChild(parrafoEliminar);
    }else{
        alert("No hay mas parrafos para eliminar");
    }
}


//Ejercicio3
const text2 = document.getElementById('texto2');

function anyadirEstilo() {
    text2.style.fontStyle = 'italic';
}

function eliminarEstilo() {
    text2.style.fontStyle = 'normal';
}

//Ejercicio4
const traducir = document.getElementById("traducir");
const raton = document.getElementById("raton");
const textoTraduccion = document.getElementById("textoTraduccion");

const textoA = "Hola, como estas?"
const textoB = "Hello, how are you?"

textoTraduccion.textContent = textoA;

traducir.addEventListener('click', function() {
    if (textoTraduccion.textContent === textoA) {
        textoTraduccion.textContent = textoB;
    }else{
        textoTraduccion.textContent = textoA;
    }
});

raton.addEventListener('mouseover', function () {
    raton.style.backgroundColor = "lightblue";
});

raton.addEventListener('mouseout', function () {
    raton.style.backgroundColor = "";
});