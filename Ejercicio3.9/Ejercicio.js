//Creamos las variables para los elementos del HTML
let imagen = document.getElementById("imagen");

let imagenA = document.getElementById("imagenA");
let eliminarTotes = document.getElementById("eliminarTotes");

let listaImagenes = document.getElementById("listaImagenes");
//Creamos un array donde guardaremos las imágenes
let imagenes = [];

//Creamos la funcion para añadir una imagen a la lista cuando clickamos sobre el boton especificado
imagenA.addEventListener('click', () => {

    //Recogemos el valor de la url de la imagen desde el formulario
    const urlImagen = document.forms["form1"]["imagen"].value;

    //Comprobamos que el texto no esté vacío
    if (urlImagen) {
        //Creamos una nueva imagen con el src especificado
        let nuevaImg = document.createElement('img');
        nuevaImg.src = urlImagen;
        //Creamos el boton para eliminar la imagen
        let bottonEliminar = document.createElement('button');
        //Creamos el boton para cambiar el marco de la imagen
        let cambiarMarco = document.createElement('button');
        bottonEliminar.textContent = "Eliminar imagen";
        bottonEliminar.id = "bottonEliminar";
        cambiarMarco.textContent = "Cambiar marco";
        cambiarMarco.id = "cambiarMarco";

        //Creamos el li para agregar la imagen, el boton de eliminar y el de cambiar marco
        let liImagen = document.createElement('li');
        liImagen.appendChild(nuevaImg);
        liImagen.appendChild(bottonEliminar);
        liImagen.appendChild(cambiarMarco);
        liImagen.classList.add('marco');
        // liImagen.style.borderWidth = 200;
        // liImagen.style.borderStyle = 'solid';
        // liImagen.style.borderColor = 'aqua'

        //Añadimos la imagen (li) a la lista de imágenes
        listaImagenes.appendChild(liImagen);
        //Añadimos la imagen al array de imágenes
        imagenes.push(liImagen);

        //Creamos la función para eliminar todas las imágenes al hacer click en el boton eliminarTotes
        eliminarTotes.addEventListener('click', () => {
            //Primera manera de eliminar todos los elementos (iterando sobre el array de imágenes)
            for (let index = 0; index < imagenes.length; index++) {
                listaImagenes.removeChild(imagenes[index]);
            }
            //Segunda manera de eliminar todos los elementos (limpiando el innerHTML del contenedor)
            //document.getElementById("listaImagenes").innerHTML = "";
        })

        //Creamos la funcion para eliminar una imagen individual al hacer click en el boton de eliminar
        bottonEliminar.addEventListener('click', () => {
            //Le damos la clase eliminar a la imagen y la eliminamos de la lista
            liImagen.className = "eliminar";
            if (liImagen.className === "eliminar") {
                listaImagenes.removeChild(liImagen);
            }
        })

        //Creamos la funcion para cambiar el marco de la imagen al hacer click en el boton correspondiente
        cambiarMarco.addEventListener('click', () => {
            //Definimos un array de colores para los marcos
            const colores = ['#FF5733', '#33FF57', '#3357FF', '#FF33FF', '#FF9900'];
            let currentColor = liImagen.style.borderColor;
            //Seleccionamos un color aleatorio para el marco
            var newColor = colores[Math.floor(Math.random() * colores.length)];
            //Nos aseguramos de que el nuevo color no sea el mismo que el anterior
            while (currentColor == newColor) {
                var newColor = colores[Math.floor(Math.random() * colores.length)];
            }
            //Cambiamos el color del marco
            liImagen.style.borderColor = newColor;
        })

        //Si no se ingresa una url, mostramos un mensaje de alerta
    } else {
        alert("Ingresa una url de una imagen")
    }
})