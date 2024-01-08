var lista = [];
var cantidad = prompt("Introduce la cantidad de numero que quieres introducir: ");
for (var i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce un numero:");
}
var total = 1;
for(var i=0; i<lista.length; i++){
    total *=parseInt(lista[i]);
}
document.write("El producto del array es: " + total);