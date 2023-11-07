var lista = new Array(10);
lista[0] = true;
lista[1] = true;
lista[2] = false;
lista[3] = true;
lista[4] = true;
lista[5] = true;
lista[6] = false;
lista[7] = false;
lista[8] = true;
lista[9] = true;
console.log("x")
do {
    document.write("Esta en la posicion " + lista.indexOf(true) + " del Array<br>");
    lista[lista.indexOf(true)] = false;
} while (lista.indexOf(true) != -1);
