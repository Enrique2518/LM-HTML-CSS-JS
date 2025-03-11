//Creamos las variables para el trabajo
let tarea = document.getElementById('tarea');
let anyadirT = document.getElementById("anyadirT");
let eliminarT = document.getElementById("eliminarT");
let todasTareas = document.getElementById("todasTareas");
let tareasActivas = document.getElementById("tareasActivas");
let tareasCompletadas = document.getElementById("tareasCompletadas");
let listaTareas = document.getElementById("listaTareas");
//Creamos un array donde guardaremos todas las tareas
var tareas = [];
let contador = 1;

//Creamos la funcion de añadirTareas a nuestro body del html cuando clickamos sobre el boton especificado
anyadirT.addEventListener('click', () => {

    //Creamos una variable que se llama texto que recogera la informacion de nuestro input
    const texto = document.forms["form1"]["tarea"].value;
    //Creamos una condicional que si el texto no esta vacio haremos esta funcion
    if (texto) {
        //Creamos la variable checkTarea que sera el checkbox de nuestra tarea pero primero ha de ser un input
        let checkTarea = document.createElement('input');
        //Aqui ya le decimos que el input es de tipo checkbox
        checkTarea.type = 'checkbox';
        //Creamos la variable label para que nos muestre la tarea que hemos escrito en nuestro input anterior
        let labelTarea = document.createElement('label');
        //Creamos la variable li para que tengamos un listado de las agrupaciones de tareas
        let liTarea = document.createElement('li');
        //La variable labelTarea tendra de contenido el texto que introducimos en el input con id=tarea
        labelTarea.textContent = texto;
        //Introducimos en el li tanto el label como el checkbox
        liTarea.appendChild(checkTarea);
        liTarea.appendChild(labelTarea);
        //El id de cada li sera diferente ya que hemos creado un contador que ira aumentando cada vez que creamos una tarea
        liTarea.id = contador;
        //Y tambien le damos una clase no marcar que la definimos en el css
        liTarea.className = "noMarcar"
        //Ahora en el listaTareas que es un ul en nuestro html le vamos a ir añadiendo cada una de las tareas que es un li
        listaTareas.appendChild(liTarea);
        //Aumentamos en uno el valor de contador
        contador++;
        //Añadimos la tarea (li) en nuestra array de tareas
        tareas.push(liTarea);

        //Ahora dentro de esta misma funcion creamos otra funcion que si el checkbox cambia de estado por ello el change, que tambien podria ser un click
        checkTarea.addEventListener('change', () => {
            //Creamos la condicional que si el checkTarea esta marcada
            if (checkTarea.checked) {
                //El conjunto de la tarea label e input por ello el li su clase cambiara a marcar
                liTarea.className = "marcar";
                //Pero si es al reves
            } else {
                //El conjunto de la tarea label e input por ello el li su clase cambiara a noMarcar
                liTarea.className = "noMarcar"
            }
        })

        //Creamos otra función que sera para eliminar las tareas que hayan sido marcadas
        eliminarTarMarcadas.addEventListener('click', () => {
            //Si la tarea su clase tiene como nombre marcar
            if (liTarea.className === "marcar") {
                //Esta tarea sera eliminada del body del html
                listaTareas.removeChild(liTarea)
            }
        })

        //Creamos la funcion que nos mostrara todas las tareas esten marcadas o no 
        todasTareas.addEventListener('click', ()=>{
            //Ya que marcaremos que todos los li se pongan como estilo el display block;
            liTarea.style.display = 'block';
        })

        //Creamos la funcion de solo enseñar las tareas que esten activas, que esten aun por hacer 
        tareasActivas.addEventListener('click', ()=>{
            //Creamos la condicion que si el li tiene de clase -> marcar
            if (liTarea.className === "marcar") {
                //Estas tareas no se mostraran
                liTarea.style.display = 'none';
            }
            //Creamos la condicion que si el li tiene de clase -> noMarcar
            if (liTarea.className === "noMarcar") {
                //Estas tareas se mostraran
                liTarea.style.display = 'block';
            }
        })

        //Creamos la funcion de solo enseñar las tareas que esten ya finalizadas 
        tareasCompletadas.addEventListener('click', ()=>{
            //Creamos la condicion que si el li tiene de clase -> marcar
            if (liTarea.className === "marcar") {
                //Estas tareas se mostraran
                liTarea.style.display = 'block';
            }
            //Creamos la condicion que si el li tiene de clase -> noMarcar
            if (liTarea.className === "noMarcar") {
                //Estas tareas no se mostraran
                liTarea.style.display = 'none';
            }
        })

    //Si el texto esta vacio se mostrara un mensaje por pantalla con una alerta
    } else {
        alert("Ingresa una tarea")
    }

})

//Creamos la funcion de liminar Tareas
eliminarT.addEventListener('click', () => {
    //Si el array de tareas es mayor a 0
    if (tareas.length > 0) {
        //Cogeremos la ultima tarea
        let eliminarT = tareas.pop();
        //Y la eliminaremos del body del html
        listaTareas.removeChild(eliminarT);
    //Si es 0 nos mostrara un mensaje por pantalla con un alert de que no hay mas tareas
    } else {
        alert("No hay mas tareas");
    }
})