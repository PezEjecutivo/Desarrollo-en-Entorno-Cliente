let frase = prompt("Introduce tu frase");

function checkMayus(frase){
    if(frase==frase.toUpperCase()){
        document.write("La frase entera esta en mayusculas");
    }else if (frase==frase.toLowerCase()){
        document.write("La frase entera esta en minusculas");
    }else{
        document.write("La frase usa una mezcla de masyuculas y minusculas");
    }
}

checkMayus(frase);