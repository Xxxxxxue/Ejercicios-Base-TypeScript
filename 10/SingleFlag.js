var pasaEntero = function () {
    var num = Math.random() * 100;
    var param = process.argv[2];
    console.log("numero aleatorio: " + num);
    if (param === "--integer")
        console.log("numero aleatorio en integer: " + Math.round(num));
    else
        console.log("Para mostrar un numero entero debe usar --integer");
};
pasaEntero();
