let frase = prompt("Introduce la frase");

function palindromo(frase){
    let contador = 0;
    for(let i=0; i<frase.length; i++){
        if(frase.charAt(i)==frase.charAt(frase.length-i-1)){
            contador++;
        }
    }
    if(contador==frase.length){
        document.write("Es palindromo");
    }else{
        document.write("No es palindromo");
    }
    document.write("Hola");
}

palindromo(frase);