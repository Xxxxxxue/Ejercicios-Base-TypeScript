let param: string[] = process.argv;
let operador: string = param[2];

let numbersToParse: string[] = param.slice(3, param.length);
let numbersToOperate: number[] = [];
let result: number = 0;

/*if(!operador.search(/[+-\/*]/g)) {
    console.log("El primer parametro debe ser un operador.");
}*/

numbersToParse.map(function(numberToParse) {
    let numberParsed: number = parseInt(numberToParse);
    if (!isNaN(numberParsed)) {
        numbersToOperate.push(numberParsed);
    } else {
        console.log("ERROR: El valor ", numberToParse, ", no es un número");
    }
});

if (numbersToOperate.length) {
    result = numbersToOperate[0];
}

for (let i=1; i < numbersToOperate.length; i++) {
    let numberToOperate: number = numbersToOperate[i];

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