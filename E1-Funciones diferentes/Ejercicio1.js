//Ejercicio 3.1
//Constantes y variables
//Usamos document.getElementById() para obtener elementos HTML 
// específicos usando sus IDs. Esto nos permite interactuar con esos 
// elementos en JavaScript.
const texto = document.getElementById("texto1");
const botonGrande = document.getElementById("botonGrande");
const botonPequenyo = document.getElementById("botonPequenyo");
const cambiarColor = document.getElementById("cambiarColor");
var currentSize;
var currentColor;
//Creamos un array de colores para que pueda ir variando
const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF', '#FF9900'];

//Funciones
//¿Qué hace este bloque?
//botonGran.addEventListener('click', ...): Esto escucha cuando el 
// botón con el ID botonGran es clickeado.
botonGrande.addEventListener('click', () =>{
    //window.getComputedStyle(text).fontSize: Aquí estamos obteniendo el 
    // estilo actual del texto. getComputedStyle() nos da todos los 
    // estilos aplicados al elemento text, y .fontSize nos da el tamaño 
    // actual de la fuente (por ejemplo, "16px").
    currentSize = window.getComputedStyle(texto).fontSize;
    //parseInt(currentSize): El valor de fontSize es un string que incluye 
    // la unidad de medida ("px"), por lo que necesitamos convertirlo a un 
    // número entero para poder sumarle.
    currentSize = parseInt(currentSize) + 2;
    //text.style.fontSize = (currentSize + 2) + 'px': Aumentamos el tamaño 
    // de la fuente en 2 píxeles y lo volvemos a aplicar al texto.
    texto.style.fontSize = currentSize + "px";
});

botonPequenyo.addEventListener('click', ()=>{
    currentSize = window.getComputedStyle(texto).fontSize;
    currentSize = parseInt(currentSize) - 2;
    texto.style.fontSize = currentSize + "px";
});

//¿Qué hace este bloque?
//Escucha cuando llamamos al boton(lo clickamos) BotonColor que es el que nos servira
//para cambiar de color nuestro texto
cambiarColor.addEventListener('click', ()=> {
    //Recogemos el color activo ahora mismo en nuestro texto
    currentColor = window.getComputedStyle(texto).color;
    //Creamos una let porque necesitamos que pueda variar con un 
    //Math.floor para que redondee y un Math.random para que nos escoja
    //un color random de nuestro array creado anteriormente
    var newColor = colores[Math.floor(Math.random() * colores.length)];
    //Creamos un bucle que nos indique que hasta que el color no sea el
    //mismo que el actual, no parara de repetir el bucle de escoger otro 
    // color
    while (currentColor == newColor) {
        newColor = colores[Math.floor(Math.random() * colores.length)];
    }
    //Si el color acaba siendo diferente saldremos del bucle y nuestro
    //cambiara de color al indicado en el bucle 
    texto.style.color = newColor;
})


//Ejercicio 3.2
//Constantes y variables
var parrafo;
const parrafos = [];

//Funciones
//Funcion para añadir un parrafo nuevo en nuestro html
anyadirP.addEventListener('click', ()=>{
    //Creamos una variable para añadir un texto
    var texto = prompt("Añade un parrafo: ")
    //Creamos una variable parrafo que en nuestro documento sera un nuevo parrafo
    parrafo = document.createElement('p');
    //En el parrafo que se mostrara en el html le damos el valor del texto que hemos introducido anteriormente
    parrafo.textContent = texto;
    //Introducimos en nuestro documento en el body el parrafo anteriormente indicado
    document.body.appendChild(parrafo);
    //Introducimos el parrafo en el array de parrafos
    parrafos.push(parrafo);
})

//Funcion para añadir un parrafo nuevo en nuestro html
eliminarP.addEventListener('click', ()=>{
    //Creamos una condicional que primero indique si hay parrafos en nuestro array de parrafos
    if (parrafos.length > 0) {
        //Si es asi cogeremos el ultimo parrafo y lo eliminaremos de nuestra array
        var parrafoE = parrafos.pop();
        //Y tambien lo eliminaremos de nuestro body en el html
        document.body.removeChild(parrafoE);
    }else{
        //Si esque no hay mas parrafos nos mostrara esta alerta
        alert("No hay mas parrafos")
    }
})

//Ejercicio 3.3
//Creamos una funcion que nos añada un estilo a la letra
anyadirE.addEventListener('click', ()=>{
    //Cogemos la variable donde esta nuestro texto y le añadiremos el estilo negrita creada en el css
    texto.classList.add('negrita');
})

//Creamos una funcion que nos elimine un estilo a la letra
eliminarE.addEventListener('click', ()=>{
    //Cogemos la variable donde esta nuestro texto y le eliminaremos el estilo negrita creada en el css
    texto.classList.remove('negrita');
})

//Ejercicio 3.4
//Creamos las variables para traducir un texto
const textoATraducir = document.getElementById("textoATraducir");
const botonRat = document.getElementById("botonRaton");
const textoES = "Hola Mundo";
const textoIN = "Hello World";

textoATraducir.textContent = textoES

//Cramos una funcion que nos traduzca el texto que hay en nuestro documento
traducirTexto.addEventListener('click', ()=>{
    //Creamos una condicional que si el contenido del texto es el texto español
    if (textoATraducir.textContent == textoES) {
        //Cuando le demos click al boton de traducir texto se traducira en ingles
        textoATraducir.textContent = textoIN;
        //Pero si el contenido del texto esta en ingles lo hara a la inversa traducira del ingles al español
    }else if(textoATraducir.textContent == textoIN){
        textoATraducir.textContent = textoES;
    }
})

//Creamos una funcion que si el raton pasa por encima del boton, por ello mouseover, el color dol boton cambiara a verde
botonRat.addEventListener('mouseover', ()=>{
    botonRat.style.backgroundColor = 'green';
})

//Si el raton no esta encima del boton por ello mouseout, no se le dara ningun color al boton.
botonRat.addEventListener('mouseout', ()=>{
    botonRat.style.backgroundColor = "";
})