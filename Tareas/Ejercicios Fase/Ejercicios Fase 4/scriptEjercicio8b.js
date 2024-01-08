let lista = [];
let cantidad = prompt("Introduce la cantidad de elementos que quieres introducir");
for(let i=0; i<cantidad; i++){
    lista[i]=prompt("Introduce el elemento:");
}

function masFrecuente(lista){

    lista.sort();
    let mayor = 0;
    let masFrecuente = "";
    for(let i=0; i<lista.length; i++){
        let contador = 0;
        for(let j=i+1; j<lista.length; j++){
            if(lista[j]==lista[i]){
                ++contador;
                if(contador>mayor){
                    mayor=contador;
                    masFrecuente=lista[i];
                }
            }
        }

    }
    document.write("El elemento mas frecuente en la matriz es: " + masFrecuente);

}

masFrecuente(lista);
