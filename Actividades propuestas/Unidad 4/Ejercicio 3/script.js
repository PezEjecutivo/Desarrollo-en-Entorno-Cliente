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

//Script del Ejercicio
let palabra = "albondigas";
let oculto = "";
let adivinar = ["a", "n", "d", "s", "o"];
let resultado = "";

for(let i=0; i<palabra.length; i++){

    oculto = "-" + oculto;
}
oculto = oculto.split("");

function adivina(letra){
    for(let i=0; i<palabra.length; i++){
        for(let j=0; j<letra.length; j++){
            if(palabra.charAt(i)==letra[j]){
                oculto[i]=letra[j];
            }
        }
    }

    for(let i=0; i<oculto.length; i++){
        resultado = resultado + oculto[i];
    }
    document.write("Asi queda la palabra despues de tus letras " + resultado);
}

adivina(adivinar);