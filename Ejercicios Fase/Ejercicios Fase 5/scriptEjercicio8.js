let dni = prompt("Introduce tu dni");

function letraDNI(dni){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    let numero = dni.substring(0,8);
    let letra = numero%23;
    if(numero<0 || numero>99999999){
        document.write("El numero no es valido");
    }else{
        letra=letras[letra];
    }
    if(dni.charAt(dni.length-1)==letra){
        document.write("La letra introducida es correcta");
    }else{
        document.write("La letra es incorrecta");
    }
}

letraDNI(dni);