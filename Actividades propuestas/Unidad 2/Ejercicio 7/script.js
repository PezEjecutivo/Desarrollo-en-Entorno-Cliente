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
let primero = 9%5;
let segundo = 7;
let tercero = 7;
let cuarto = 7;
let potencia = 2**3;
let verdad = true;
document.write("9%5 devuleve " + primero + "<br>");
document.write("Usamos 7++ = " + (segundo++) + " Usamos ++7 = "+ (++segundo) + "<br>");
document.write("Usamos 7-- = " + (tercero--) + " Usamos --7 = "+ (--tercero) + "<br>");
document.write("La potencia de 2 a 3 es: " + potencia + "<br>");
document.write("Si añadimos - a 7 es: " + (-cuarto) + "<br>");
document.write("+true es: " + (+verdad) + "<br>");