var nota1 = prompt("Intrudce la nota 1");
var nota2 = prompt("Intrudce la nota 2");
var nota3 = prompt("Intrudce la nota 3");
var media = parseInt(nota1) + parseInt(nota2) + parseInt(nota3);
if ((media / 3) >= 7) {
    document.write("Usted ha promocionado!! ");
} else
    document.write("Usted ha suspendido :(");