const formulario = document.getElementById("formulario");
const busqueda = document.getElementById("busqueda");
const origen = document.getElementById("origen");
const destino = document.getElementById("destino");
const aeropuertosOrigen = ["palma", "madrid", "barcelona"];
const aeropuertosDestino = ["palma", "madrid", "barcelona", "londres", "paris", "roma"];
const aviso = document.getElementById("aviso");
const frase1 = document.getElementById("frase1");
const frase2 = document.getElementById("frase2");
const frase3 = document.getElementById("frase3");
const fechaInicio = document.getElementById("fechaInicio");
const fechaFin = document.getElementById("fechaFin");
const numAdultos = document.getElementById("numAdultos"); // Si tienes un input con id="numAdultos"
const numNinos = document.getElementById("numNinos"); // Si tienes un input con id="numNinos"
const residente = document.getElementById("residente");
const famNum = document.getElementById("famNum");

const origenVuelo = document.getElementById("origenVuelo");
const dsestinoVuelo = document.getElementById("dsestinoVuelo");

//Recoge la informacion dentro de las etiquetas
origenVuelo.addEventListener('change', ()=>{
    console.log(origenVuelo.options[origenVuelo.selectedIndex].textContent);
})

//Ponemos aqui el evento porque tenemos una accion en el html
formulario.addEventListener('submit', (event)=>{

    // Evitar que el formulario se envíe y la página se recargue.
    event.preventDefault();

    const textoOrigen = origen.value.toLowerCase();
    const textoDestino = destino.value.toLowerCase();

    if (textoOrigen === textoDestino) {
        frase1.className = 'activo';
    }else{
        frase1.className = 'inactivo'
    }

    if (!aeropuertosOrigen.includes(textoOrigen)) {
        frase2.className = 'activo';
    }else{
        frase2.className = 'inactivo'
    }

    if (!aeropuertosDestino.includes(textoDestino)) {
        frase3.className = 'activo';
    }else{
        frase3.className = 'inactivo'
    }

    const fechaHoy = new Date().toISOString().split('T')[0];

    if (fechaInicio.value < fechaHoy) {
        alert("No puedes viajar en un dia del pasado");
    }

    if (fechaFin.value < fechaHoy || fechaFin.value < fechaInicio.value) {
        alert("No puedes hacer el viaje de vuelta en este dia, no te puedes teletransportar.")
    }

    //Tambien puedes hacerlo de otra manera el selector de los aeropuertos
    //cosnt origen = document.querySelector("option:checked").textContent;
    //Y asi te cargas la cosntannte de arriba ye le puedes hacer directamente
    //un localStorage -> localStorage.setItem("origen", origen);

    /*
    Para el get en un formulario seria asi:
    var urlCompleta = "Resultados.html?paramOrigen=" + encodeURIComponent(origen);
    urlCompleta += "&paramDestino" + encodeURIComponent(destino);
    urlCompleta += "&paramFechaInicio" + encodeURIComponent(fecha_inicio);
    window.location.href = urlCompleta;
    */


    //Guardamos localmente las variables
    //donde ponemos el "origen" es donde nos referenciaremos a ello, y el texto origen 
    // es a la variable que se referenciara "origen"
    localStorage.setItem("origen", textoOrigen);
    localStorage.setItem("destino", textoDestino);
    //Ponemos options[origenVuelo.selectedIndex].textContent en vez de value 
    // o textContent a squeas porque el valor esta dendro de los
    //mayor que o menor que "<> y </>" por eso se pone options[origenVuelo.selectedIndex].textContent
    // y no value o textContent
    localStorage.setItem("origenVuelo", origenVuelo.options[origenVuelo.selectedIndex].textContent);
    localStorage.setItem("destinoVuelo", dsestinoVuelo.options[dsestinoVuelo.selectedIndex].textContent);
    localStorage.setItem("fechaInicio", fechaInicio.value);
    localStorage.setItem("fechaFin", fechaFin.value);
    localStorage.setItem("numAdultos", numAdultos.value);
    localStorage.setItem("numNinos", numNinos.value);
    localStorage.setItem("residente", residente.checked ? "Sí" : "No");
    localStorage.setItem("famNum", famNum.checked ? "Sí" : "No");

    // Redirigimos la pagina actual a "Resultados.html"
    window.location.href = "Resultados.html";

})

residente.addEventListener('change', ()=>{
    const textoOrigen = origen.value.toLowerCase();
    const textoDestino = destino.value.toLowerCase();

    if ((textoOrigen === 'palma' || textoOrigen === 'madrid' || textoOrigen === 'barcelona') && (textoDestino === 'palma' || textoDestino === 'madrid' || textoDestino === 'barcelona') && (textoDestino !== textoOrigen) && (textoOrigen === 'palma' || textoDestino === 'palma')) {
        alert("Es posible el descuento de residente.")
    }else{
        alert("No es posible el descuento de residente.")
        residente.checked = false;
    }

    const origenSeleccionado = origenVuelo.value;
    const destinoSeleccionado = dsestinoVuelo.value;

    // Verificar si el origen y destino son válidos para aplicar el descuento
    if (
        (origenSeleccionado === '1' || origenSeleccionado === '2' || origenSeleccionado === '3') && // Palma, Madrid, Barcelona
        (destinoSeleccionado === '1' || destinoSeleccionado === '2' || destinoSeleccionado === '3') && // Palma, Madrid, Barcelona
        origenSeleccionado !== destinoSeleccionado // El origen no puede ser igual al destino
    ) {
        alert("Es posible el descuento de residente.");
    } else {
        alert("No es posible el descuento de residente.");
        residente.checked = false; // Desmarcar el checkbox de residente si no es posible
    }

})