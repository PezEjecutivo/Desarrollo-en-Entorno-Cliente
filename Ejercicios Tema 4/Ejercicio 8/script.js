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

//Script para los ejercicios

let uno = [[4, 4, 4, 4],
[2, 2, 2, 2],
[2, 2, 2, 2],
[1, 1, 1, 1]];

let dos = [[1, 1, 1, 1],
[2, 2, 2, 2],
[3, 3, 3, 3],
[4, 4, 4, 4]];

function conservarComunes(array1, array2) {
    let resultado = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],];

    for (let i = 0; i < resultado.length; i++) {
        for (let j = 0; j < resultado.length; j++) {
            if (array1[i][j] == array2[i][j]) {
                resultado[i][j] = array1[i][j];
            }
        }

    }
    document.write(resultado[0] + "<br>" + resultado[1] + "<br>" + resultado[2] + "<br>" + resultado[3]);
}

conservarComunes(uno, dos);