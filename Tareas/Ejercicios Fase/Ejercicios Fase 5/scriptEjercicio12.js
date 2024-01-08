let check = 0;
let numero = 0;
do {
    if(check!=0){
        alert("El numero que has introducido no es impar");
    }
    numero = prompt("Introduce el numero que quieres");
    check++;
} while (numero%2==0);

function dibujarX(numero){
    let medio=numero-2;
    let izq = 0;
    let linea ="";
    let contador = 0;
    console.log(Math.floor(numero/2));

    //Parte de arriba
    //Dividimos el numero por la mitad y lo rendondeamos para que haga la mitad superior
    for(let i=0; i<Math.floor(numero/2); i++){
        linea="";
        //Hacemos los espacios a la izquierda
        for(let j=0; j<izq; j++){
            //Ponemos los espacios en la izquierda
            linea =" " + linea;
        }
        //Sumamos un espacio a la izquierda para la siguiente
        izq+=1;
        //Añadimos la primera X
        linea = linea + "X";

        //Hecamos los espacios en el medio
        for(let j=0; j<medio; j++){
            linea = linea + " ";
        }
        //Restamos los espacios en el medio para la siguiente
        //Uno por el de la izquierda y otro para ajustarse
        medio-=2;

        //Juntamos todo y lo mostramos
        linea = linea + "X";
        console.log(linea);

        //Aumentamos el contador para la X central
        contador++;
    }

    //Medio
    linea = "";
    for(let i=0; i<contador; i++){

        linea = " " + linea;
    }
    linea = linea + "X";
    console.log(linea);


    //Parte de abajo
    //Dividimos el numero por la mitad y lo rendondeamos para que haga la mitad inferior
    linea = "";
    for(let i=0; i<Math.floor(numero/2); i++){
        linea="";
        //Restamos los espacios antes de ponerlo
        //ya que tiene como los de arriba
        izq-=1;
        //Hacemos los espacios a la izquierda
        for(let j=0; j<izq; j++){
            linea = " " + linea; 
        }
        //Juntamos la X con los espacios en la izquierda
        linea = linea + "X";
        
        //Sumamos la distancia del medio, que hemos restado antes
        medio+=2;
        //Ponemos los espacios en el medio
        for(let j=0; j<medio; j++){
            linea = linea + " ";
        }
        //Juntamos la X con todo
        linea = linea + "X";

        //Lo mostramos
        console.log(linea);
    }

}

dibujarX(numero);