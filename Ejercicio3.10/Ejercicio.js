const nivelFacil = document.getElementById("nivelFacil");
const nivelMedio = document.getElementById("nivelMedio");
const nivelDificil = document.getElementById("nivelDificil");
const reiniciar = document.getElementById("reiniciar");

const juego = document.getElementById("juego");

nivelFacil.addEventListener('click', ()=>{
    let texto1 = document.createElement('p');
    texto1.textContent = "Adivina el numero entre 1 y 10";
    let numeroInp = document.createElement('input');
    numeroInp.type = 'number';
    let texto2 = document.createElement('p');

    let botonRevisar = document.createElement('button');
    botonRevisar.textContent = "Revisar";

    let numeroRandom = parseInt((Math.random() * 10) + 1);
    
    juego.appendChild(texto1);
    juego.appendChild(numeroInp);
    juego.appendChild(botonRevisar);
    console.log(numeroRandom);

    let numeroInt = parseInt(0);
    console.log(numeroInt);

    botonRevisar.addEventListener('click', ()=>{
        let numeroIntr = parseInt(numeroInp.value);
        if (numeroIntr == numeroRandom) {
            let textoAdivinado = document.createElement('p');
            textoAdivinado.textContent = "Felicidades has adivinado el número";
            juego.appendChild(textoAdivinado);
        }else{
            let textoNoAd = document.createElement('p');
            textoNoAd.textContent = "Vuelve a intentarlo";
            juego.appendChild(textoNoAd);
            if (numeroIntr > numeroRandom) {
                let textoMayor = document.createElement('p');
                textoMayor.textContent = "El número es más pequeño";
                juego.appendChild(textoMayor);
            }else if(numeroIntr < numeroRandom){
                let textoMenor = document.createElement('p');
                textoMenor.textContent = "El número es más grande";
                juego.appendChild(textoMenor);
            }
        }
        numeroInt++;
        console.log(typeof(numeroInt));
        console.log(numeroInt);
        texto2.textContent = "Numero de intentos: " + numeroInt;
        juego.appendChild(texto2);
    })
    
})

nivelMedio.addEventListener('click', ()=>{
    let texto1 = document.createElement('p');
    texto1.textContent = "Adivina el numero entre 1 y 50";
    let numeroInp = document.createElement('input');
    numeroInp.type = 'number';
    let texto2 = document.createElement('p');

    let botonRevisar = document.createElement('button');
    botonRevisar.textContent = "Revisar";

    let numeroRandom = parseInt((Math.random() * 50) + 1);
    
    juego.appendChild(texto1);
    juego.appendChild(numeroInp);
    juego.appendChild(botonRevisar);
    console.log(numeroRandom);

    let numeroInt = parseInt(0);
    console.log(numeroInt);

    botonRevisar.addEventListener('click', ()=>{
        let numeroIntr = parseInt(numeroInp.value);
        if (numeroIntr == numeroRandom) {
            let textoAdivinado = document.createElement('p');
            textoAdivinado.textContent = "Felicidades has adivinado el número";
            juego.appendChild(textoAdivinado);
        }else{
            let textoNoAd = document.createElement('p');
            textoNoAd.textContent = "Vuelve a intentarlo";
            juego.appendChild(textoNoAd);
            if (numeroIntr > numeroRandom) {
                let textoMayor = document.createElement('p');
                textoMayor.textContent = "El número es más pequeño";
                juego.appendChild(textoMayor);
            }else if(numeroIntr < numeroRandom){
                let textoMenor = document.createElement('p');
                textoMenor.textContent = "El número es más grande";
                juego.appendChild(textoMenor);
            }
        }
        numeroInt++;
        console.log(typeof(numeroInt));
        console.log(numeroInt);
        texto2.textContent = "Numero de intentos: " + numeroInt;
        juego.appendChild(texto2);
    })
    
})

nivelDificil.addEventListener('click', ()=>{
    let texto1 = document.createElement('p');
    texto1.textContent = "Adivina el numero entre 1 y 100";
    let numeroInp = document.createElement('input');
    numeroInp.type = 'number';
    let texto2 = document.createElement('p');

    let botonRevisar = document.createElement('button');
    botonRevisar.textContent = "Revisar";

    let numeroRandom = parseInt((Math.random() * 100) + 1);
    
    juego.appendChild(texto1);
    juego.appendChild(numeroInp);
    juego.appendChild(botonRevisar);
    console.log(numeroRandom);

    let numeroInt = parseInt(0);
    console.log(numeroInt);

    botonRevisar.addEventListener('click', ()=>{
        let numeroIntr = parseInt(numeroInp.value);
        if (numeroIntr == numeroRandom) {
            let textoAdivinado = document.createElement('p');
            textoAdivinado.textContent = "Felicidades has adivinado el número";
            juego.appendChild(textoAdivinado);
        }else{
            let textoNoAd = document.createElement('p');
            textoNoAd.textContent = "Vuelve a intentarlo";
            juego.appendChild(textoNoAd);
            if (numeroIntr > numeroRandom) {
                let textoMayor = document.createElement('p');
                textoMayor.textContent = "El número es más pequeño";
                juego.appendChild(textoMayor);
            }else if(numeroIntr < numeroRandom){
                let textoMenor = document.createElement('p');
                textoMenor.textContent = "El número es más grande";
                juego.appendChild(textoMenor);
            }
        }
        numeroInt++;
        console.log(typeof(numeroInt));
        console.log(numeroInt);
        texto2.textContent = "Numero de intentos: " + numeroInt;
        juego.appendChild(texto2);
    })
    
})


reiniciar.addEventListener('click', ()=>{
    document.getElementById("juego").innerHTML = "";
})