document.addEventListener('DOMContentLoaded', function() {
    const contadorElement = document.getElementById('contador');
    const imagenElement = document.getElementById('imagen');
    let contador = 0;

     // Agregar un evento de clic a la imagen
    imagenElement.addEventListener('click', function() {
        contador++;
        contadorElement.textContent = contador;
    });
});