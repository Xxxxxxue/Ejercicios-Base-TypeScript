let parametros:string[] = process.argv;

let paramNombre:string = parametros[2];
let paramAnio:string   = parametros[3];

let objetoBase:Object = {
    "name": "jhon",
    "year": 20
};

let referenciaObjetoBase:any = objetoBase;

if(typeof paramNombre !== "undefined"){
    referenciaObjetoBase.name = paramNombre;
}
if(typeof paramAnio !== "undefined"){
    referenciaObjetoBase.year = paramAnio;
}

console.log("objetoBase", JSON.stringify( objetoBase , null, 2));
console.log("referenciaObjetoBase", JSON.stringify( referenciaObjetoBase , null, 2));