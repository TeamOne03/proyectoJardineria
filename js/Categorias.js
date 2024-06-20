document.addEventListener("DOMContentLoaded", function() {
var dropdownToggle = document.querySelector(".desplegable-desplasado"); /* toma la informacion de el menu para poder desplegarlo */
var dropdownMenu = document.querySelector(".desplegable-menu");

dropdownToggle.addEventListener("click", function() { /* este es el codigo para hacer que se despliegue */ 
    if (dropdownMenu.style.display === "none") {
    dropdownMenu.style.display = "block";
    } else {
    dropdownMenu.style.display = "none";
    }
});
});
