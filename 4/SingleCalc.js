var param = process.argv;
var A = parseInt(param[2]);
var B = parseInt(param[3]);
if (!isNaN(A) && !isNaN(B)) {
    console.log("A: ", A);
    console.log("B: ", B);
    console.log("TOTAL: ", A + B);
}
else {
    console.log("ERROR: Uno de los parámetros no es un número");
}
