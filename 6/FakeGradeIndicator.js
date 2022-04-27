window.onload = function () {
    var indicador = document.getElementById("indicador");
    setInterval(function () {
        //genero el numero aleatorio
        var gradoAleatorio = Math.random() * 100;
        //Ingreso el nuevo valor en el elemento para mostrarlo
        indicador.innerHTML = gradoAleatorio.toString();
    }, 500);
};
