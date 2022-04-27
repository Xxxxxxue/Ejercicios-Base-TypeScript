
var titulo: string = "Node says...";
var letras: string = "abcdefghijk";

var longWord: number = Math.random()*5 + 5; //de 5 a 10


function salida() {
    var word = "";
    for(let i=0;i<longWord;i++) {
        word += letras.charAt(Math.random()*letras.length);
    }
    console.log(titulo + word);
}
salida();



