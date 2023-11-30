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

//Define una función externa llamada operacionMatematica que tome dos números y una operación
//(suma, resta, multiplicación, división) como parámetros.
//Dentro de esta función, implementa funciones internas para realizar cada operación y devuelve el resultado.

function operacionMatematica(numero1, numero2, operacion) {
    switch (operacion) {
        case "suma":
            function suma() {
                result = numero1 + numero2;
                return result;
            }
            result = suma();
            break;
        case "resta":
            function resta() {
                result = numero1 - numero2;
                return result;
            }
            result = resta();
            break;
        case "multiplicacion":
            function multiplicacion() {
                result = numero1 * numero2;
                return result;
            }
            result = multiplicacion();
            break;
        case "division":
            function division() {
                result = numero1 / numero2;
                return result;
            }
            result = division();
            break;
    }

    document.write(result);
}

operacionMatematica(2, 2, "suma");

document.write("<br>");

//Escribe una función externa saludoCompleto que tome un nombre y un título como parámetros, y dentro de ella,
//utiliza una función interna para generar un saludo completo.

function saludoCompleto(nombre, titulo) {
    function saludo() {
        let saludo = "Hola " + nombre + " bonito titulo " + titulo;
        return saludo;
    }
    document.write(saludo());
}

saludoCompleto("Pablo", "El rompe camiones");
