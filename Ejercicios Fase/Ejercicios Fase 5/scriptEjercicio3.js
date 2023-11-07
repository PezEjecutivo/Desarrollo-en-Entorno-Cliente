let lista = [];
let cantidad = prompt("Introduce la cantidad de elementos que quieres introducir: ");
for (let i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce un elemento:");
}

function eliminarRepe(lista){

    document.write("El array con las copias es: " + lista + "<br>");

    lista.sort();
    let posiciones = Array(lista.length);

    for(let i=0; i<lista.length; i++){
        if(!posiciones.includes(lista[i])){
            posiciones[i]=lista[i];
        }

    }

    document.write("El array sin las copias es: " + posiciones.filter(Boolean));

   
}

eliminarRepe(lista);

