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

//Implementa una función calcularEdad que tome el año de nacimiento como parámetro y devuelva la edad.
function calcularEdad(nacimiento) {
    anioActual = new Date();
    anioActual = anioActual.getFullYear();

    result = anioActual - nacimiento;

    document.write("Tienes " + result + " años");
}

calcularEdad(2003);

document.write("<br>");
//Escribe una función esPositivo que tome un número como argumento y devuelva true si es positivo y false si es negativo o cero.
function esPositivo(numero) {
    if (numero >= 0) {
        return true;
    } else return false;
}

if (esPositivo(-7)) {
    document.write("Es positivo");
} else document.write("No es positivo");
