//Cambiar estilo de la pagina y el boton
function cambiar(){
    if(document.getElementById("cuerpo").classList.contains("blanco")){
        document.getElementById("cuerpo").classList.remove("blanco");
        document.getElementById("cuerpo").classList.add("oscuro");
        document.getElementById("cambiarEstilo").classList.remove("btn-dark");
        document.getElementById("cambiarEstilo").classList.add("btn-light");
    }else{
        document.getElementById("cuerpo").classList.remove("oscuro");
        document.getElementById("cuerpo").classList.add("blanco");
        document.getElementById("cambiarEstilo").classList.remove("btn-light");
        document.getElementById("cambiarEstilo").classList.add("btn-dark");
    }

}

//Script para el ejercicio
function matematica(){

    let cantidad = prompt("Introduce cuantos numeros quieres introducir:");
    let suma = 0;
    let media = 0;
    let primero = 0;
    let segundo = 0;
    let penultimo = 0;
    let ultimo = 0;

    for(let i=0; i<cantidad; i++){

        let numero = prompt("Introduce un numero");

        suma +=numero;

        if(i==0){
            let primero = numero;
        }else if(i==1){
            let segundo = numero;
        }else if(i==(cantidad-2)){
            let penultimo = numero;
        }else if(i==(cantidad-1)){
            let ultimo = numero;
        }

    }

    media = suma/cantidad;
    multiplicacion = primero*ultimo;
    division = segundo*penultimo;

    

    document.write("La suma es: " + suma);
    document.write("La media es: " + media);
    document.write("La multiplicación es: " + multiplicacion);
    document.write("La división es: " + division);

}

matematica();