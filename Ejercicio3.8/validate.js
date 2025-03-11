document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir el envío del formulario hasta que se validen los campos

    // Obtener los valores de los campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const description = document.getElementById("description").value;

    // Mensaje de error
    let message = "";

    // Expresión regular para el correo electrónico
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validaciones
    if (!name || !email || !subject || !description) {
        message = "Todos los campos son obligatorios.";
    } else if (!emailRegex.test(email)) {
        message = "El correo electrónico no es válido.";
    } else {
        message = "El formulario se ha enviado correctamente.";
        // Aquí podrías añadir el código para realmente enviar el formulario si fuera necesario
    }

    // Mostrar el mensaje de validación
    document.getElementById("message").textContent = message;
});