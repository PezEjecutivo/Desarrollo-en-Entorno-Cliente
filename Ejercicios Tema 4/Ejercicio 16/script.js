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
//Crea un programa que simule el funcionamiento de un bingo.

//Creamos una funcion para generar cartones
function generarCarton(nombre) {
    let carton = [[], [], [], [], [], [], [], []];
    carton.nombre = nombre;
    return carton;
}

//Rellenamos el carton
function rellenarCarton(carton) {
    let contador = 0;
    do {
        let numero = Math.floor(Math.random() * 90 + 1);
        let fila = Math.floor(Math.random() * 8);

        if (carton[fila].length != 5) {
            carton[fila].push(numero);
            contador++;
        }
    } while (contador <= 20);

    return carton;
}

//Comprobamos los numeros
function comprobarNumeros(carton, numero) {
    for (let i = 0; i < carton.length; i++) {
        if (carton[i].includes(numero)) {
            document.write(
                "El " + carton.nombre + " tenia el numero " + numero + "<br>"
            );
        }
        carton[i] = carton[i].filter((elemento) => elemento != numero);
        //carton[i] = carton[i].filter((elemento) => elemento.trim() !== "");
    }
}

//Comprobamos si el carton esta vacio
function comprobarCarton(carton) {
    let vacio = 0;
    for (let i = 0; i < 8; i++) {
        if (carton[i].length == 0) {
            vacio++;
        }
    }
    if (vacio == 8) {
        document.write("El " + carton.nombre + " es el ganador");
        return true;
    } else {
        return false;
    }
}

let carton1 = generarCarton("Carton 1");
let carton2 = generarCarton("Carton 2");
let carton3 = generarCarton("Carton 3");
let carton4 = generarCarton("Carton 4");
let carton5 = generarCarton("Carton 5");

carton1 = rellenarCarton(carton1);
carton2 = rellenarCarton(carton2);
carton3 = rellenarCarton(carton3);
carton4 = rellenarCarton(carton4);
carton5 = rellenarCarton(carton5);

//Bingo
function bingo(carton1, carton2, carton3, carton4, carton5) {
    do {
        let numero = Math.floor(Math.random() * 90 + 1);

        comprobarNumeros(carton1, numero);
        comprobarNumeros(carton2, numero);
        comprobarNumeros(carton3, numero);
        comprobarNumeros(carton4, numero);
        comprobarNumeros(carton5, numero);
    } while (
        !comprobarCarton(carton1) &&
        !comprobarCarton(carton2) &&
        !comprobarCarton(carton3) &&
        !comprobarCarton(carton4) &&
        !comprobarCarton(carton5)
    );
}

bingo(carton1, carton2, carton3, carton4, carton5);
