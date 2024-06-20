document.addEventListener("DOMContentLoaded", function() {
  var decreaseButton = document.getElementById("decrease"); /*toma la informacion del boton de decremento*/
  var increaseButton = document.getElementById("increase"); /*toma la informacion del boton de incremento*/
  var quantityInput = document.getElementById("quantity"); /*toma la informacion de la cantidad*/

  decreaseButton.addEventListener("click", function() { 
    var currentValue = parseInt(quantityInput.value); /* este codigo es para que cuando se interactue con el boton decremento reste uno a la cantidad*/
    if (currentValue > 1) {
      quantityInput.value = currentValue - 1;
    }
  });

  increaseButton.addEventListener("click", function() {
    var currentValue = parseInt(quantityInput.value); /* este codigo es para que cuando se interactue con el boton incremento sume uno a la cantidad*/
    if (currentValue < 99) { /* este es el limite que puede alcanzar */
      quantityInput.value = currentValue + 1;
    }
  });
});
