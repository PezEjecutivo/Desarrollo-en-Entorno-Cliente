var hoy = new Date().getTime();
var miCumple = new Date(prompt("Introduce la fecha: (Ejemplo 2023-10-21)")).getTime();
var diff = miCumple - hoy;
document.write("Quedan " + (parseInt(diff / (1000 * 60 * 60 * 24)) + 1) + " dias para la fecha indicada<br>");