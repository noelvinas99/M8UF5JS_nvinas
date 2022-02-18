function validarcontrasenya() {
    var pas = document.getElementById("pass").value;
    var confpas = document.getElementById("pass2").value;
    if (pas == confpas) {
        alert("correcte");
    }
    else {
        alert("incorrecte");
    }
}
