var boton = document.getElementById("itachi");
var imagen = document.getElementById("imagen");
var butonclose = document.getElementById("close")
boton.addEventListener("click", function(event) {
    event.preventDefault();
    imagen.style.display = "flex";
});
butonclose.addEventListener("click", function(event) {
    event.preventDefault();
    imagen.style.display = "none";
});