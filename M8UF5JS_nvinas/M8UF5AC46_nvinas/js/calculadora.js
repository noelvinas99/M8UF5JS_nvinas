function calcula(numero) {
    document.getElementById("textpantalla").value += numero
}
function borradototal() {
    document.getElementById("textpantalla").value = ""
}
function igualar() {
    document.getElementById("textpantalla").value = eval(document.getElementById("textpantalla").value);
}