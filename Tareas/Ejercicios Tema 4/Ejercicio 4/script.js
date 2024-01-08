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
let numero = prompt("Introduce el numero del cual quieres saber la tabla");

function calcularTabla(numero){
    document.write("Tabla de multiplicar del " + numero + "<br>");
    for(let i=0; i<10; i++){
        document.write(numero + " por " + (i+1) + " = " + numero * (i+1) + "<br>");
    }
}

calcularTabla(numero);