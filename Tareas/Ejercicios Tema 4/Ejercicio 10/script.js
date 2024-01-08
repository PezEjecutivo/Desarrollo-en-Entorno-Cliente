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
let primo = prompt("Introduce un numero");

function esPrimo(primo) {
  for (let i = 2; i < primo; i++) {
    if (primo % i == 0) {
      return false;
    }
  }
  return true;
}

if (esPrimo(primo)) {
  document.write("El numero introducido es primo");
} else {
  document.write("El numero introducido no es primo");
}
