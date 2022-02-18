function validarcontrasenya() {
    var contrasenya1 = document.getElementById("pass").value;
    var contrasenya2 = document.getElementById("pass2").value;
    var validarusuari = document.getElementById("usuarii").value;
    if (contrasenya1 == "1234" && contrasenya2 == contrasenya1 && validarusuari == "ibai") {
        alert("correcte");
    }
    else {
        alert("incorrecte");
    }
}