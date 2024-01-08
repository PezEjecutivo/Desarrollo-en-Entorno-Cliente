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
let cantidad = prompt("Introduce cuantas veces quieres que salga");

function fibonacci(valor1, valor2, cantidad) {
    let suma = valor1 + valor2;
    document.write(suma + " ");
    if (cantidad > 1) {
        return fibonacci(valor2, suma, cantidad - 1);
    }
}

fibonacci(0, 1, cantidad);
