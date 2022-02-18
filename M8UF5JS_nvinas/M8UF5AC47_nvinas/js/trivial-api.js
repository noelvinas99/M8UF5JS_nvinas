var contingut = document.querySelector('#contingut') 
function agafar() { 
fetch('https://randomuser.me/api/') 
.then(res => res.json()) 
.then(data => { 
console.log(data.results['0']) 
contingut.innerHTML = ` 
<img src="${data.results['0'].picture.large}" 
width="100px" class="img-fluid rounded-circle"> 
<p>Nombre: ${data.results['0'].name.last}</p> 
` 
}) 
}
function accedir() {
    var edad = document.getElementById("edat").value;
    if (edad >= 18 ) {
        location.replace("web/trivial-api2.htm");
        alert("Pots accedir al joc");
    }
    else {
        alert("No pots jugar, ets menor d'edat :(");
    }
}