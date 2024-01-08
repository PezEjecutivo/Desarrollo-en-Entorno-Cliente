var lista = [];
var cantidad = prompt("Introduce la cantidad de numero que quieres introducir: ");
for (var i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce un numero:");
}
var maximo = 0;
for(var i=0; i<lista.length; i++){
    if(maximo < lista[i]){
        maximo = lista[i];
    }
}
document.write("El numero mas alto del array: " + maximo);