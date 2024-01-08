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

let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

function completarArray(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor((Math.random() * 100) + 1);
    }
    document.write(array.sort(function (a, b) { return a % 10 == 0 }));
}

completarArray(array);