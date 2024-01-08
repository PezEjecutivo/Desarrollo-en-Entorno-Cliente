var archivo = prompt("Introduce el nombre del archivo con la extension:");
var extension = archivo.split(".").pop();
document.write(extension);