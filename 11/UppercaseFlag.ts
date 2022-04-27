var pasaUpper = function () {
    
    let str = process.argv[2]
    
    let param = process.argv[3];

    console.log("String ingresado: "+ str);
    
    if(param === "--upper")
        console.log("String uppercase: " + str.toUpperCase());
    else
        console.log("Para mostrar un string Uppercase debe usar --upper");
}

pasaUpper();