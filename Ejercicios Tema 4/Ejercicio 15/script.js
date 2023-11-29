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
let cantidad = prompt("Cuantas veces quieres lanzar el dado?");

function tiradaDados(cantidad) {
    for (let i = 0; i < cantidad; i++) {
        let dado1 = Math.floor(Math.random() * 6 + 1);
        let dado2 = Math.floor(Math.random() * 6 + 1);

        if (dado1 > dado2) {
            document.write("El ganador es el dado 1 con un " + dado1 + "<br>");
        } else {
            document.write("El ganador es el dado 2 con un " + dado2 + "<br>");
        }
    }
}

tiradaDados(cantidad);
