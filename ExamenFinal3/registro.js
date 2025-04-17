// Obtenemos referencias a los elementos del formulario
const registroForm = document.getElementById("registroForm");
const nombre = document.getElementById("nombre");
const fechaNacimiento = document.getElementById("fechaNacimiento");
const email = document.getElementById("email");
const ciudad = document.getElementById("ciudad");
const codigoPostal = document.getElementById("codigoPostal");
const categoria = document.getElementById("categoria");
const newsletter = document.getElementById("newsletter");

// Manejador del evento 'submit' del formulario
registroForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se envíe por defecto (sin validaciones)

    // Obtenemos la fecha actual en formato YYYY-MM-DD
    const fechaHoy = new Date().toISOString().split('T')[0];

    // Validación: no se puede seleccionar una fecha de nacimiento futura
    if (fechaNacimiento.value > fechaHoy) {
        alert("No puedes haber nacido mañana");
        fechaNacimiento.value = ""; // Resetea el campo
        return; // Cancela el envío del formulario
    }

    // Expresión regular para validar formato de correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    let message = "";

    // Validación del correo electrónico
    if (!emailRegex.test(email.value)) {
        message = "El correo electrónico no es válido.";
        alert(message);
        return; // Detiene el envío si el correo es inválido
    } else {
        message = "El formulario se ha enviado correctamente.";
        // Este mensaje es informativo, aunque no se muestra en pantalla (se podría usar en un alert o modal si quisieras)
    }

    // Validación del código postal: debe tener exactamente 5 dígitos
    if (codigoPostal.value.length != 5) {
        alert("No existe este código postal");
        codigoPostal.value = ""; // Limpia el campo
        return; // Cancela el envío
    }

    // Si todas las validaciones pasan, se guardan los datos en localStorage
    localStorage.setItem("nombre", nombre.value);
    localStorage.setItem("fechaNacimiento", fechaNacimiento.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("ciudad", ciudad.value);
    localStorage.setItem("codigoPostal", codigoPostal.value);
    localStorage.setItem("categoria", categoria.value);
    localStorage.setItem("newsletter", newsletter.checked); // Guarda true o false

    // Redirige al usuario a la página de perfil
    window.location.href = "Perfil.html";
});
