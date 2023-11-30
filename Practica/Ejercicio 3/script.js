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

//Define una función sumar que acepte dos números como parámetros y devuelva la suma de ambos.

function sumar(numero1, numero2) {
    document.write(
        "El resultado de la suma de " +
            numero1 +
            " y " +
            numero2 +
            " es:" +
            (numero1 + numero2)
    );
}

//Crea una función concatenarPalabras que tome tres palabras como argumentos y las concatene en una sola cadena.

function concatenarPalabras(palabra1, palabra2, palabra3) {
    document.write(palabra1 + " " + palabra2 + " " + palabra3);
}

sumar(7, 8);
document.writeln("<br>");
concatenarPalabras("hola", "como", "estas");
