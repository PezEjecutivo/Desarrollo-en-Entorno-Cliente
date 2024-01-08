var numero = prompt("Introduce un numero");
if(numero>13){
    document.write("Como tu numero es mayor a 13, el doble de la diferencia a 13 es: " + parseFloat((numero-13)*2))
}else{
    document.write("La diferencia de tu numero a 13 es: " + parseFloat((13-numero)));
}