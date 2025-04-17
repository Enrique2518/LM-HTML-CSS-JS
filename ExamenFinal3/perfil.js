// Recupera los datos almacenados en localStorage
var nombreRes = localStorage.getItem("nombre");
var fechaNacimientoRes = localStorage.getItem("fechaNacimiento");
var emailRes = localStorage.getItem("email");
var ciudadRes = localStorage.getItem("ciudad");
var codigoPostalRes = localStorage.getItem("codigoPostal");
var categoriaRes = localStorage.getItem("categoria");
var newsletterRes = localStorage.getItem("newsletter");

// Asigna los valores recuperados a los campos del formulario
document.getElementById("nombrePerfil").value = nombreRes;
document.getElementById("fechaNacimientoPerfil").value = fechaNacimientoRes;
document.getElementById("emailPerfil").value = emailRes;
document.getElementById("ciudadPerfil").value = ciudadRes;
document.getElementById("codigoPostalPerfil").value = codigoPostalRes;
document.getElementById("categoriaPerfil").value = categoriaRes;

// Convierte el valor de 'newsletter' a booleano y lo asigna al checkbox
// Esto es necesario ya que localStorage guarda todo como texto
document.getElementById("suscripcionPerfil").checked = (newsletterRes === 'true');

// Referencias a botones
const modificar = document.getElementById("modificar");
const guardar = document.getElementById("guardar");

// Elementos para gestionar autores favoritos
const autorInput = document.getElementById("autorInput");
const anadirAutor = document.getElementById("anadirAutor");
let listaAutores = document.getElementById("listaAutores");
let eliminarTodosAutores = document.getElementById("eliminarTodosAutores");

// Array para almacenar los autores añadidos
var autores = [];

// Evento para añadir autor a la lista
anadirAutor.addEventListener('click', () => {
    const texto = autorInput.value;

    console.log(texto); // Muestra el texto ingresado en consola (para depuración)

    if (texto) {
        // Crear botón para eliminar autor individual
        let boton = document.createElement('button');
        boton.textContent = "Eliminar";
        boton.id = "eliminar";

        // Crear etiqueta con el nombre del autor
        let labelAutor = document.createElement('label');
        labelAutor.textContent = texto;

        // Crear elemento de lista y agregarle el botón y el nombre
        let liAutor = document.createElement('li');
        liAutor.appendChild(boton);
        liAutor.appendChild(labelAutor); 
        listaAutores.appendChild(liAutor);

        // Permite eliminar un autor individualmente
        boton.addEventListener("click", () => {
            liAutor.remove();
        });

        // Guarda el autor en el array (opcional, útil si quieres guardar luego)
        autores.push(liAutor);

        // Limpia el campo de texto
        autorInput.value = "";
    } else {
        alert("Ingresa una tarea"); // Mensaje si el campo está vacío
    }
});

// Evento para eliminar todos los autores de la lista
eliminarTodosAutores.addEventListener('click', () => {
    listaAutores.innerHTML = "";
});

// Función que habilita los campos para edición
function editarParametros() {
    modificar.style.display = "none";   // Oculta el botón 'Modificar'
    guardar.style.display = "block";    // Muestra el botón 'Guardar'

    // Habilita todos los campos y los marca como editables visualmente
    document.getElementById("nombrePerfil").disabled = false;
    document.getElementById("nombrePerfil").readOnly = false;
    document.getElementById("nombrePerfil").classList.add("editable");

    document.getElementById("fechaNacimientoPerfil").disabled = false;
    document.getElementById("fechaNacimientoPerfil").readOnly = false;
    document.getElementById("fechaNacimientoPerfil").classList.add("editable");

    document.getElementById("emailPerfil").disabled = false;
    document.getElementById("emailPerfil").readOnly = false;
    document.getElementById("emailPerfil").classList.add("editable");

    document.getElementById("ciudadPerfil").disabled = false;
    document.getElementById("ciudadPerfil").readOnly = false;
    document.getElementById("ciudadPerfil").classList.add("editable");

    document.getElementById("codigoPostalPerfil").disabled = false;
    document.getElementById("codigoPostalPerfil").readOnly = false;
    document.getElementById("codigoPostalPerfil").classList.add("editable");

    document.getElementById("categoriaPerfil").disabled = false;
    document.getElementById("categoriaPerfil").readOnly = false;
    document.getElementById("categoriaPerfil").classList.add("editable");

    document.getElementById("suscripcionPerfil").disabled = false;
    document.getElementById("suscripcionPerfil").readOnly = false;
    document.getElementById("suscripcionPerfil").classList.add("editable");
}

// Evento para activar la edición de campos
modificar.addEventListener("click", () => {
    editarParametros();
});

// Evento para guardar los cambios y volver a bloquear los campos
guardar.addEventListener("click", () => {
    guardar.style.display = "none"; 
    modificar.style.display = "block";

    // Bloquea y desactiva todos los campos nuevamente
    document.getElementById("nombrePerfil").disabled = true;
    document.getElementById("nombrePerfil").readOnly = true;
    document.getElementById("nombrePerfil").classList.remove("editable");

    document.getElementById("fechaNacimientoPerfil").disabled = true;
    document.getElementById("fechaNacimientoPerfil").readOnly = true;
    document.getElementById("fechaNacimientoPerfil").classList.remove("editable");

    document.getElementById("emailPerfil").disabled = true;
    document.getElementById("emailPerfil").readOnly = true;
    document.getElementById("emailPerfil").classList.remove("editable");

    document.getElementById("ciudadPerfil").disabled = true;
    document.getElementById("ciudadPerfil").readOnly = true;
    document.getElementById("ciudadPerfil").classList.remove("editable");

    document.getElementById("codigoPostalPerfil").disabled = true;
    document.getElementById("codigoPostalPerfil").readOnly = true;
    document.getElementById("codigoPostalPerfil").classList.remove("editable");

    document.getElementById("categoriaPerfil").disabled = true;
    document.getElementById("categoriaPerfil").readOnly = true;
    document.getElementById("categoriaPerfil").classList.remove("editable");

    document.getElementById("suscripcionPerfil").disabled = true;
    document.getElementById("suscripcionPerfil").readOnly = true;
    document.getElementById("suscripcionPerfil").classList.remove("editable");
});

// Evento para cerrar sesión
document.getElementById("cerrarSesion").addEventListener("click", function() {
    localStorage.clear(); // Elimina todos los datos almacenados
    window.location.href = "Registro.html"; // Redirige al usuario al inicio o registro
});
