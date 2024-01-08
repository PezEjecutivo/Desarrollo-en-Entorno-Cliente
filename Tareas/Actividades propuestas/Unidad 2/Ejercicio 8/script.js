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
let nombre = prompt("Introduce tu nombre");
let edad = prompt("Introduce tu edad");
let mensaje = "";

if(edad<=12){
    mensaje="Niño";
}else if(edad>=13 && edad<=17){
    mensaje="Adolescente";
}else if(edad>=18 && edad<=64){
    mensaje="Trabajador";
}else{
    mensaje="Jubilado";
}

console.log("%c " + nombre + " tiene " + edad + " años y por tanto es " + mensaje, "color: green; font-weigth: bold;");
