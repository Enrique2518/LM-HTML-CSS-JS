// Obtenenemos los valores de la otra pagina web, es decir
    //en la cosntante origenResultado guardaremos el valor de "origen"
    //que teniamos en el otro java script es decir
    //"origen" = textoOrigen -> origenResultados = "origen" = textoOrigen;
    const origenResultados = localStorage.getItem("origen");
    const destinoResultados = localStorage.getItem("destino");
    const origenResultadosSel = localStorage.getItem("origenVuelo");
    const destinoResultadosSel = localStorage.getItem("destinoVuelo");
    const fechaInicioResultados = localStorage.getItem("fechaInicio");
    const fechaFinResultados = localStorage.getItem("fechaFin");
    const numAdultosResultados = localStorage.getItem("numAdultos");
    const numNinosResulltados = localStorage.getItem("numNinos");
    const residenteResultados = localStorage.getItem("residente");
    const famNumResultados = localStorage.getItem("famNum");

    // Mostrar los valores en los elementos correspondientes
    document.getElementById("resOrig").textContent = origenResultados;
    document.getElementById("resDest").textContent = destinoResultados;
    document.getElementById("resOrigSel").textContent = origenResultadosSel;
    document.getElementById("resDestSel").textContent = destinoResultadosSel;
    document.getElementById("resFechIni").textContent = fechaInicioResultados;
    document.getElementById("resFechFin").textContent = fechaFinResultados;
    document.getElementById("resNumAdul").textContent = numAdultosResultados;
    document.getElementById("resNumNiñ").textContent = numNinosResulltados;
    document.getElementById("resDescRes").textContent = residenteResultados;
    document.getElementById("resFamNum").textContent = famNumResultados;

    //Para eliminar datos del local storage se hace con removeItem
    //localStorage.removeItem("")
     // Función para limpiar localStorage y volver al inicio
     document.getElementById("reinicio").addEventListener("click", function() {
        // Eliminar todo el localStorage
        localStorage.clear();
        // Redirigir a la página de inicio (puedes ajustar la URL si es necesario)
        window.location.href = "Ejercicio.html";  // Asegúrate de poner la URL correcta de la página de inicio
    });
