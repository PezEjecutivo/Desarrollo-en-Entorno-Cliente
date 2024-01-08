var numero1 = prompt("Introduce el numero 1");
var numero2 = prompt("Introduce el numero 2");
var numero3 = prompt("Introduce el numero 3");

if(numero1==numero2 && numero1==numero3){
    document.write("todos los numeros son iguales")
}else if(numero1> numero2 && numero1> numero3){
    document.write("El numero mas alto es el: " + numero1);
}else if(numero2>numero3 && numero2 > numero1){
    document.write("El numero mas alto es el: " + numero2);
}else{
    document.write("El numero mas alto es el: " + numero3);
}