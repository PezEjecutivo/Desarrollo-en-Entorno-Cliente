//Cambiar estilo de la pagina y el boton
function cambiar(){
    if(document.getElementById("cuerpo").classList.contains("blanco")){
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    }else{
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }

}

//Script para el ejercicio
//Escribe una función que devuelva true si dos palabras que recibe como parámetros
//contienen las mismas letras, aunque se encuentre en posiciones distintas


palabra1 = prompt("Introduce la primera palabra");
palabra2 = prompt("Introduce la segunda palabra");

function mismasLetras(palabra1, palabra2){

    let iguales = 0;

    if(palabra1.length != palabra2.length){
        return false
    }

    for(let i=0; i<palabra1.length; i++){
        for(let j=0; j<palabra1.length; j++){
            if(palabra1.charAt(i)==palabra2.charAt(j)){
                iguales++;
                j=palabra1.length;
            }
        }
    }

    if(iguales==palabra1.length){
        return true;
    }
    return false;
}

if(mismasLetras(palabra1, palabra2)){
    document.write("Si contienen las mismas letras");
}else{
    document.write("No contienen las mismas letras");
}