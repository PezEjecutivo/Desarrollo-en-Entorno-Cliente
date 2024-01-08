//Cambiar estilo de la pagina y el boton
function cambiar(){
    if(document.getElementById("cuerpo").classList.contains("blanco")){
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    }else{
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }

}

//Script del ejercicio
let dia = prompt("Introduce la inicial del dia de la semana: (L, M, X, J, V, S, D)");

switch(dia){
    case 'L':
        document.write("Los lunes toca: Ingles, Matematicas y Fisica");
        break;
    case 'M':
        document.write("Los martes toca: Quimica, Matematicas y Fisica");
        break;
    case 'X':
        document.write("Los miercoles toca: Lengua, Geologia y Fisica");
        break;
    case 'J':
        document.write("Los jueves toca: Ingles, Programacion y Alemana");
        break;
    case 'V':
        document.write("Los viernes toca: FOL, Derecho y Filosofia");
        break;
    case 'S':
        document.write("Los sabado toca: Lengua, Programacion y Quimica");
        break;
    case 'D':
        document.write("Los domingo toca: Ingles, Filosofia y Programacion");
        break;
    default:
        document.write("No has introducido bien la inicial del dia");
        break;
}