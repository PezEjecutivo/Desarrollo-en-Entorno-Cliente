const mapCiudades = new Map();

const inciar = document.querySelector('#iniciar')
const salir = document.querySelector('#salir')
const div = document.querySelector('#botones')
inciar.addEventListener('click', () => {
  div.style.display = 'block'
})
salir.addEventListener('click', () => {
  div.style.display = 'none'
})

mapCiudades.set("El Puerto de Santa Maria", "11500");
mapCiudades.set("Catral, Alicante", "03158");
mapCiudades.set("Peralada, Barcelona", "17491");
mapCiudades.set("Madrid", "28001");
mapCiudades.set("Murcia", "30001");

function consulta(){
    let CP = prompt("Introduce el codigo postal que quieres consultar");
    for (let codigo of mapCiudades.values()){
        if(CP==codigo){
            alert("Su codigo postal esta en la base de datos!");
            
        }
    }
    //alert("Su codigo postal no esta registrado en la base de datos");
}

function borrar(){
    let ciudad = prompt("Introduce la ciudad que quieres eliminar");
    for(let nombre of mapCiudades.keys()){
        if(ciudad==nombre){
            mapCiudades.delete(ciudad);
            alert("Se ha eliminado con existo de la base de datos");
            
        }
    }
    //alert("La ciudad que ha introducido no esta registrada en la base de datos");
}

function mostrar(){
    for(let ciudades of mapCiudades.entries()){
        console.log(ciudades);
    }
    alert("Se ha mostrado por consola");
}

function modificar(){
    let ciudad = prompt("Introduce la ciudad que quieres modificar su codigo postal");
    for(let nombre of mapCiudades.keys()){
        if(ciudad==nombre){
            let codigo = prompt("Introduce el codigo que quieres poner");
            mapCiudades.set(nombre, codigo);
            alert("El cogido postal se ha cambiado correctamente");
            
        }
    }
    //alert("La ciudad que ha introducido no esta registrada en la base de datos");
}
