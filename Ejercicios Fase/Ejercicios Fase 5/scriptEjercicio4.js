let lista = [];
let cantidad = prompt("Introduce la cantidad de elementos que quieres introducir: ");
for (let i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce un elemento:");
}
let listaSinCopias = new Set(lista);
console.log(listaSinCopias);
