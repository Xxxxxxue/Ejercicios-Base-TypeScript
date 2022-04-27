/**Necesita instalar typing
 * npm install -g typings
 * typings install env~node --global --save
 * En mi caso no funciona instalacion
 */
var parametros = process.argv;
var miPalabraParaImprimir = parametros[2];
console.log("Escribiste la palabra: ", miPalabraParaImprimir);
