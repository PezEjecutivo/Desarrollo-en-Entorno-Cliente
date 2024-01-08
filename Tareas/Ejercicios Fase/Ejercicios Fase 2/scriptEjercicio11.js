var tipo = prompt("Introduce al tipo que quieres convertir, C para Celsius y F para farenheit");
var temperatura = prompt("Introduce la temperatura");
if (tipo.toUpperCase() == 'C') {
    var tempConver = (temperatura - 32) * 5 / 9;
    document.write("La temperatura en Celsius es: " + tempConver + " ºC");
} else if (tipo.toUpperCase() == 'F') {
    var tempConver = parseInt(temperatura * 9 / 5) + 32;
    document.write("La temperatura en Farenheits es: " + tempConver + " ºF");
} else {
    document.write("No has introducido un tipo valido");
}