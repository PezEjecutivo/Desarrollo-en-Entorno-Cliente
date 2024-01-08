var numero1 = prompt("Introduce el numero 1");
var numero2 = prompt("Introduce el numero 2");

if(numero1 == numero2){
    document.write("Como los valores son iguales, aqui tienes el triple de la suma: " + (parseInt(numero1)+parseInt(numero2))*3);
}else{
    document.write("La suma de los dos numeros es: " + (parseInt(numero1)+parseInt(numero2)));
}