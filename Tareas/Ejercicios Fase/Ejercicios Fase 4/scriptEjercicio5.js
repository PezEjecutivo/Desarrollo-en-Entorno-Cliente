var lista = [];
var cantidad = prompt("Introduce la cantidad de elementos que quieres introducir: ");
for (var i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce el elemento que quieres:");
}
var mensajeUnido = "";
for(var i=0; i<lista.length; i++){
    mensajeUnido +=lista[i];
}
document.write("El mensaje completo es: " + mensajeUnido);