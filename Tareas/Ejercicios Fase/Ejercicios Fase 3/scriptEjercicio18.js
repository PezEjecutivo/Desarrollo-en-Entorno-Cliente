var frase = prompt("Frase en la que vamos a contar la palabra: ");
var buscar = prompt("Palabra que se quiere contar: ");
var contador = 0;

var fraseSeparada = frase.split(" ");
for (var i = 0; i<frase.length; i++){
    if(fraseSeparada[i]==buscar){
        contador++;
    }
}

document.write("Se ha encontrado " + contador + " veces la palabra: " + buscar);
document.write("<br>En la frase: " + frase);