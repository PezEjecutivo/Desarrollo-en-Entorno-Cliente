var lista = [];
var cantidad = prompt("Introduce la cantidad de elementos que quieres introducir: ");
for (var i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce un elemento:");
}
var borrar = prompt("Introduce el elemento que quieres borrar:");
for (var i=0; i<lista.length; i++){
    if(borrar==lista[i]){
        lista[i]="";
    }
}
document.write(lista.filter(Boolean));