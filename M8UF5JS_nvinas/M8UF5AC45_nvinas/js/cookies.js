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
function guardardades() {
    var nom = document.getElementById("nom").value;
    var cognom = document.getElementById("cognom").value;
    localStorage.setItem("nom", nom);
    localStorage.setItem("cognom", cognom);
    document.getElementById("nom").value = "";
    document.getElementById("cognom").value = "";
}
function recuperardades() {
    var nombree = localStorage.getItem("nom");
    var apellidoo = localStorage.getItem("cognom");
    /*localStorage.getItem("nombre", nombree);
    localStorage.getItem("apellido", apellidoo);*/
    document.getElementById("nom").value = nombree;
    document.getElementById("cognom").value = apellidoo;
}
function esborrardades() {
    localStorage.clear();
    document.getElementById("nom").value = "";
    document.getElementById("cognom").value = "";
}