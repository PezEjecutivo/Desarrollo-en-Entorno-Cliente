var correo = prompt("Escribe tu correo electronico: ");
var clave = correo.split("@").pop();
document.write(correo.substring(0, 3) + "...@" + clave);