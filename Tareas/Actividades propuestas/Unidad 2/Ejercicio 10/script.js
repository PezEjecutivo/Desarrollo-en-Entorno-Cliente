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

//Script del ejercicio
let adivinar = "";
adivinar = prompt("¿Cual letra crees que es? ");
while(adivinar!="s"){
    console.log("No ha habido suerte :(");
    adivinar = prompt("¿Cual letra crees que es? ");
}
console.log("Bien hecho!! la letra secreta era la s");