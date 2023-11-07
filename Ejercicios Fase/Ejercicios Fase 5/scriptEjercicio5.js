let lista = [];
let cantidad = prompt("Introduce la cantidad de elementos que quieres introducir: ");
for (let i=0; i<cantidad; i++){
    lista[i] = prompt("Introduce un elemento:");
}

function mantenerRepes(lista){
    lista.sort();
    let posiciones = Array(lista.length);
    for(let i=0; i<lista.length; i++){
        if(i==0){
            if(lista[i]==lista[i+1]){
                posiciones[i]=lista[i];
            }
        }else if(i==lista.length-1){
            if(lista[i]==lista[i-1]){
                posiciones[i]=lista[i];
            }

        }else if(lista[i]==lista[i+1] || lista[i]==lista[i-1]){
            posiciones[i]=lista[i];
        }
    }

    document.write(posiciones.filter(Boolean));
}

mantenerRepes(lista);

