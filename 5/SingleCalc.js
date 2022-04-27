var param = process.argv;
var operador = param[2];
var numbersToParse = param.slice(3, param.length);
var numbersToOperate = [];
var result = 0;
/*if(!operador.search(/[+-\/*]/g)) {
    console.log("El primer parametro debe ser un operador.");
}*/
numbersToParse.map(function (numberToParse) {
    var numberParsed = parseInt(numberToParse);
    if (!isNaN(numberParsed)) {
        numbersToOperate.push(numberParsed);
    }
    else {
        console.log("ERROR: El valor ", numberToParse, ", no es un número");
    }
});
if (numbersToOperate.length) {
    result = numbersToOperate[0];
}
for (var i = 1; i < numbersToOperate.length; i++) {
    var numberToOperate = numbersToOperate[i];
    switch (operador) {
        case "+":
            result += numberToOperate;
            break;
        case "-":
            result -= numberToOperate;
            break;
        case "x":
            result *= numberToOperate;
            break;
        case "/":
            result /= numberToOperate;
            break;
    }
}
console.log("Números ingresados: ", numbersToOperate);
console.log("TOTAL :", result);
