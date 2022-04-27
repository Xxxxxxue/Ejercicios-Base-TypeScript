var parametros = process.argv;
var paramNombre = parametros[2];
var paramAnio = parametros[3];
var objetoBase = {
    "name": "jhon",
    "year": 20
};
var referenciaObjetoBase = objetoBase;
if (typeof paramNombre !== "undefined") {
    referenciaObjetoBase.name = paramNombre;
}
if (typeof paramAnio !== "undefined") {
    referenciaObjetoBase.year = paramAnio;
}
console.log("objetoBase", JSON.stringify(objetoBase, null, 2));
console.log("referenciaObjetoBase", JSON.stringify(referenciaObjetoBase, null, 2));
