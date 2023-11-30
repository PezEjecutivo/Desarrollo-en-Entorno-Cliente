//Cambiar estilo de la pagina y el boton
function cambiar() {
    if (document.getElementById("cuerpo").classList.contains("blanco")) {
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    } else {
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }
}

//Script para el ejercicio

//Crea una función llamada saludar que tome un nombre como parámetro y devuelva un saludo personalizado.
let nombre = "Pablo";
function saludar(nombre) {
    document.write(
        "Buenos dias " +
            nombre +
            ", espero que te este yendo genial!! Un saludo"
    );
}

//Escribe una función llamada cuadrado que tome un número como parámetro y devuelva su cuadrado.
let numero = 7;
function cuadrado(numero) {
    document.write("El cuadrado de " + numero + " es: " + numero * numero);
}

saludar(nombre);
document.write("<br>");
cuadrado(numero);
