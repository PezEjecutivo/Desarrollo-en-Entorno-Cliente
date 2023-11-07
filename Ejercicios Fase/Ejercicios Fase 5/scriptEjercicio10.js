let entrada = [NaN, 0, 15, false, -22, '',undefined, 47, null];

function eliminarNoValidos(entrada){
    let resultado = entrada.filter(Boolean);
    document.write(resultado);
}

eliminarNoValidos(entrada);
