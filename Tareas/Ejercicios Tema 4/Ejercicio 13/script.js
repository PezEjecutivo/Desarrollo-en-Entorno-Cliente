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
//Programa una función que reciba un array de cadenas de caracteres y que
//por medio del método filter devuelva aquellos caracteres que no forma
//parte del alfabeto español. Prueba la función incluyendo palabras con
//caracteres como ^, $ o &

let array = ["dew", "yt", "gre", "^", "$", "&", "Aµtoµio"];
const reexAlfabetoEspañol = /[a-zA-ZáéíóúüñÁÉÍÓÚÜÑ¡¿]/;

function noEspanol(array) {
    let resultado = array.map((palabra) =>
        palabra
            .split("")
            .filter((letra) => !reexAlfabetoEspañol.test(letra))
            .join("")
    );

    let resultadoFinal = resultado.filter((element) => element.trim() !== "");

    return resultadoFinal;
}

console.log(noEspanol(array));
