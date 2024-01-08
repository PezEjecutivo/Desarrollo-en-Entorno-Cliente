var clave = prompt("Introduce la clave");
var confirmacion = prompt("Vuelve a introduce la clave");

if(clave==confirmacion){
    document.write("Has introduce la clave correctamente.");
}else{
    document.write("Las claves introducidas no son iguales.");
}