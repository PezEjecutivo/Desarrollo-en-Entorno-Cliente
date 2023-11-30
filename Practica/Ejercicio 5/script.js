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

//Crea una función obtenerPromedio que tome un array de números y devuelva su promedio.
let numeros = [1, 2, 3, 4, 5];
function obtenerPromedio(numeros) {
    promedio = 0;

    for (let i = 0; i < numeros.length; i++) {
        promedio += numeros[i];
    }

    promedio /= numeros.length;

    document.write("El promedio es: " + promedio);
}

obtenerPromedio(numeros);

document.write("<br>");
//Implementa una función mayorNumero que acepte un array de números y devuelva el número más grande.
function mayorNumero(numeros) {
    numeros.sort();
    document.write("El numero mas grande es " + numeros[numeros.length - 1]);
}

mayorNumero(numeros);
