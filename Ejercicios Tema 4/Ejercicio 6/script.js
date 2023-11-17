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

//Script del ejercicio
let array = [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]];

function diagonal(array){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<3; j++){
            if(i!=j){
                array[i][j] = 0;
            }
            document.write(array[i][j]);
        }
        document.write("<br>");
    }

    
}

diagonal(array);