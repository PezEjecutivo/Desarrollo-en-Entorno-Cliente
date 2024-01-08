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
let numero = prompt("Escribe un numero:");
function esMultiplo10(numero){
    if(numero%10==0){
        document.write("El numero que has introducido (" + numero + ") es multiplo de 10");
    }else{
        document.write("El numero que has introducido (" + numero + ") no es multiplo de 10");
    }
}

esMultiplo10(numero);
