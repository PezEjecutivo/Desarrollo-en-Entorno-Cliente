var numero = prompt("Introduce un numero");
if(numero>19){
    document.write("Como tu numero es mayor a 19, el triple de la diferencia a 19 es: " + parseInt((numero-19)*3))
}else{
    document.write("La diferencia de tu numero a 19 es: " + parseInt((19-numero)));
}