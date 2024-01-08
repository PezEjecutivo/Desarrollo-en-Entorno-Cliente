var numero = prompt("Introduce el numero del cual quieres su factorial");

function factorial(numero){

    var factorial = numero;
    var resultado = 1;

    for(numero; numero>0; numero--){

        resultado *=numero;
    }

    document.write("El facotiral de " + factorial + " es: " + resultado);
}

factorial(numero);