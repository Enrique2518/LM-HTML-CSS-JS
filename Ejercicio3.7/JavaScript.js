function buscar() {

    const buscar = document.getElementById('buscador').value.toLowerCase();

    document.querySelectorAll('.videojuego').forEach(function (producto) {
        
        const nombreProducto = producto.querySelector('h4').textContent.toLowerCase();

        if (nombreProducto.includes(buscar)) {
            producto.style.display = 'block';
        }else{
            producto.style.display = 'none';
        }

    })
    
}