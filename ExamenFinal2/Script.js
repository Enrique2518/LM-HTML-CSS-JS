//Creamos las variables para los botones de sumar y reiniciar
const botonSumar = document.getElementById("sumar");
const botonReiniciar = document.getElementById("reiniciar");
//Inicializamos el boton reiniciar como inactivo
botonReiniciar.classList.add('inactivo');

//Creamos la variable para el elemento que mostrará el número
const numeroString = document.getElementById("numero");

//Creamos la funcion para sumar el número
function sumar() {
    //Recogemos el número actual y lo convertimos a entero
    let numero = parseInt(numeroString.textContent);
    
    //Si el número es menor a 10, lo incrementamos en 1 y lo mostramos
    if (numero < 10) {
        numero = numero + 1;
        numeroString.textContent = numero + ""
        console.log(numero)
    //Si el número es 10 o mayor, desactivamos el botón de sumar y activamos el de reiniciar
    } else if (numero >= 10) {
        botonSumar.classList.remove('activo');
        botonSumar.classList.add('inactivo');
        botonReiniciar.classList.remove('inactivo');
        botonReiniciar.classList.add('activo');
    }
}

//Creamos la funcion para reiniciar el contador
function reiniciar() {
    //Restablecemos el número a 0 y actualizamos la interfaz
    numeroString.textContent = "0";
    botonReiniciar.classList.remove('activo');
    botonReiniciar.classList.add('inactivo');
    botonSumar.classList.remove('inactivo');
    botonSumar.classList.add('activo');
}

//Creamos la variable para el contenedor de los comentarios
const comentarios = document.getElementById('comentarios');
//Creamos una variable para almacenar el párrafo a añadir
var parrafoAnyadir;
//Creamos un array para almacenar todos los párrafos añadidos
var parrafos = [];

//Creamos la función para añadir un nuevo párrafo de texto
function anyadirP() {
    //Recogemos el texto desde el formulario
    const texto = document.forms["form1"]["textoAnyadir"].value;
    //Creamos un nuevo párrafo
    parrafoAnyadir = document.createElement('p');
    //Le asignamos el texto al párrafo
    parrafoAnyadir.textContent = texto;
    //Lo añadimos al contenedor de comentarios
    comentarios.appendChild(parrafoAnyadir);
    //Añadimos el párrafo al array de párrafos
    parrafos.push(parrafoAnyadir);
}

//Creamos la función para eliminar el último párrafo añadido
function eliminarP() {
    //Comprobamos si hay párrafos en el array
    if (parrafos.length > 0) {
        //Sacamos el último párrafo del array
        var eliminarParrafo = parrafos.pop();
        //Lo eliminamos del contenedor de comentarios
        comentarios.removeChild(eliminarParrafo);
    }
}
