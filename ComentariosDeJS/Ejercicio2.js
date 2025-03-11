//Usamos document.getElementById() para obtener elementos HTML 
// específicos usando sus IDs. Esto nos permite interactuar con esos 
// elementos en JavaScript.
const text = document.getElementById('texto')
const BotonGran = document.getElementById('BotonGran')
const BotonPetit = document.getElementById('BotonPetit')
const BotonColor = document.getElementById('BotonColor')

//Declaramos la variable de los pixeles que tiene nuestro texto
var sizeText = 20;
//Declaramos en una variable que el tamaño actual sera el valor de SizeText como numero entero
var currentSize = parseInt(sizeText);

//¿Qué hace este bloque?
//botonGran.addEventListener('click', ...): Esto escucha cuando el 
// botón con el ID botonGran es clickeado.
BotonGran.addEventListener('click', () =>{
    //window.getComputedStyle(text).fontSize: Aquí estamos obteniendo el 
    // estilo actual del texto. getComputedStyle() nos da todos los 
    // estilos aplicados al elemento text, y .fontSize nos da el tamaño 
    // actual de la fuente (por ejemplo, "16px").
    currentSize = window.getComputedStyle(text).fontSize;
    //parseInt(currentSize): El valor de fontSize es un string que incluye 
    // la unidad de medida ("px"), por lo que necesitamos convertirlo a un 
    // número entero para poder sumarle.
    currentSize = parseInt(currentSize) + 2 ;
    //text.style.fontSize = (currentSize + 2) + 'px': Aumentamos el tamaño 
    // de la fuente en 2 píxeles y lo volvemos a aplicar al texto.
    text.style.fontSize = currentSize + 'px';
});


//Creamos una nueva funcion mas pequeño 
function mesPetit() {
    //Hacemos que currentSize se disminuya 2 de tamaño
    currentSize = (currentSize - 2) ;
    //Le aplicamos el valor de currentSize que sera con 2 px menos a el valor de fontSize de nuestro texto
    text.style.fontSize = currentSize + 'px';
}


//Este bloque hace lo mismo solo que disminuye dos px en vez de aumentarlo
/*BotonPetit.addEventListener('click', () => {
    let currentSize = window.getComputedStyle(text).fontSize;
    currentSize = parseInt(currentSize);
    text.style.fontSize = (currentSize - 2) + 'px'
});*/



//¿Qué hace este bloque?
//Escucha cuando llamamos al boton(lo clickamos) BotonColor que es el que nos servira
//para cambiar de color nuestro texto
BotonColor.addEventListener('click', () => {
    //Creamos un array de colores para que pueda ir variando
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF', '#FF9900'];
    //Recogemos el color activo ahora mismo en nuestro texto
    const currentColor = text.style.color;
    //Creamos una let porque necesitamos que pueda variar con un 
    //Math.floor para que redondee y un Math.random para que nos escoja
    //un color random de nuestro array creado anteriormente
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    //Creamos un bucle que nos indique que hasta que el color no sea el
    //mismo que el actual, no parara de repetir el bucle de escoger otro 
    // color
    while (newColor == currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    //Si el color acaba siendo diferente saldremos del bucle y nuestro
    //cambiara de color al indicado en el bucle 
    text.style.color = newColor;
    
});
