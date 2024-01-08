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
let mensaje = "Un enano te ofrece una galleta, que haces?";
let respuesta = confirm(mensaje);
alert("Has elegido: " + respuesta);
console.log("%c «FIN DEL PROGRAMA»", "color:blue; font-weigth: bold;");