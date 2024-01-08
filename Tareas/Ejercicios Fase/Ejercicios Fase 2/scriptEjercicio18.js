var numero1 = prompt("Introduce el numero 1");
var numero2 = prompt("Introduce el numero 2");

if(parseInt(numero1)==50 || parseInt(numero2)==50){
    document.write("Verdadero");
}else if (parseInt(numero1)+parseInt(numero2)==50){
    document.write("Verdadero");
}else{
    document.write("Falso");
}