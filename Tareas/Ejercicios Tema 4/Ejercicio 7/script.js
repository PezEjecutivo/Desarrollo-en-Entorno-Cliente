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

//Script para los ejercicios
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

(async = async function (){
    document.getElementById("texto").innerHTML = "Comenzando";
    await sleep(1000);
    document.getElementById("texto").innerHTML = "Comenzando.";
    await sleep(1000);
    document.getElementById("texto").innerHTML = "Comenzando..";
    await sleep(1000);
    document.getElementById("texto").innerHTML = "Comenzando...";
    await sleep(1000);
    document.getElementById("texto").innerHTML = "Finalizado";

})();


