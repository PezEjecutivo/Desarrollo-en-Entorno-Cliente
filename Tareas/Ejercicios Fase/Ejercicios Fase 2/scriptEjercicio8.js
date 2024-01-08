var numeroRandom = parseInt((Math.random() * 10) + 1);
var numero = prompt("Introduce el numero que crees que es, del 1 al 10");
if (numeroRandom == parseInt(numero)) {
    document.write("Buen trabajo!!!<br>");
} else {
    document.write("No coincide :(<br>");
}