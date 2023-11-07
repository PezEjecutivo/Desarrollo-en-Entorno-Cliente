var cadena1 = prompt("Introduce la primera cadena de texto: ");
var cadena2 = prompt("Introduce el texto que quieres añadir: ");
var posicion = prompt("Introduce en que posicion quieres añadirlo: ");

document.write(cadena1.substring(0 , posicion) + cadena2 + cadena1.substring(posicion));