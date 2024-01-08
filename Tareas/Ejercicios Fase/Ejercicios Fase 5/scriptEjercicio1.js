

var cantidad = prompt("Hasta cuanto quieres que llegue la espiral de Fibonacci?");

function Fibonacci(cantidad){

    var n1 = 1;
    var n2 = 0;
    var fibonacci = 0;

    document.write("La esperial de fibonacci hasta " + cantidad + " es: 0, 1, " );
    for(var i=0; i < cantidad; i++){

        

        fibonacci = n1+n2;
        n2=n1;
        n1=fibonacci;

        if((i+1)!=cantidad){
            document.write(fibonacci + ", ");
        }else{
            document.write(fibonacci);
        }


    }
}

Fibonacci(cantidad);