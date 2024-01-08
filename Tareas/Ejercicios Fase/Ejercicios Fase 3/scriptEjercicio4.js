var frase = prompt("Introduce la frase: ");

if (frase.length==1){
    document.write("Hay " + frase.length + " caracter o espacio");
}else {
    document.write("Hay " + frase.length + " caracteres y/o espacios");
}

