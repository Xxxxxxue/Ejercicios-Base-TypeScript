
let param: string[] = process.argv;
let A: number = parseInt(param[2]);
let B: number = parseInt(param[3]);

if (!isNaN(A) && !isNaN(B)) {
    console.log("A: ", A);
    console.log("B: ", B);
    console.log("TOTAL: ", A + B);
} else {
    console.log("ERROR: Uno de los parámetros no es un número");
}