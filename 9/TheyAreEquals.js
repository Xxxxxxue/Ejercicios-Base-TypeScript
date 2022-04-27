function comparar() {
    var param = process.argv[2];
    var num = Math.round(Math.random() * 5 + 1);
    console.log("Numero aleatorio: " + num + "\n" + "NUmero ingresado: " + param +
        (num == +param ? "\nfalicidades!\n" : "\nIntenta de nuevo.\n"));
}
comparar();
