var frase = prompt("Frase en la que vamos a contar la palabra: ");
var buscar = prompt("Palabra que se quiere contar: ");
var encontrado = false;

var fraseSeparada = frase.split(" ");
for (var i = 0; i<frase.length; i++){
    if(fraseSeparada[i]==buscar){
        encontrado=true;
    }
}
if (encontrado==true){
    document.write("Se ha encontrado la palabra que buscabas!!");
} else{
    document.write("No se ha encontrado la palabra :(");
}