var titulo = "Node says...";
var letras = "abcdefghijk";
var longWord = Math.random() * 5 + 5; //de 5 a 10
function salida() {
    var word = "";
    for (var i = 0; i < longWord; i++) {
        word += letras.charAt(Math.random() * letras.length);
    }
    console.log(titulo + word);
}
salida();
