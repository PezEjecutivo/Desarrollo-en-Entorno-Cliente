let palabra = "albondigas";
let oculto = "";
let adivinar = ["a", "n", "d", "s", "o"];
let resultado = "";

for(let i=0; i<palabra.length; i++){

    oculto = "-" + oculto;
}
oculto = oculto.split("");

function adivina(letra){
    for(let i=0; i<palabra.length; i++){
        for(let j=0; j<letra.length; j++){
            if(palabra.charAt(i)==letra[j]){
                oculto[i]=letra[j];
            }
        }
    }

    for(let i=0; i<oculto.length; i++){
        resultado = resultado + oculto[i];
    }
    document.write("Asi queda la palabra despues de tus letras " + resultado);
}

adivina(adivinar);


