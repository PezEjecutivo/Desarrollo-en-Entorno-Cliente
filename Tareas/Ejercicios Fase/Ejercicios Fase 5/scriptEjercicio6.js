let cantidad = prompt("Introduce la cantidad de modulos");
//nombre, duracion y alumnos
let nombre = [cantidad];
let duracion = [cantidad];
let alumnos = [cantidad];

for(let i=0; i<cantidad; i++){
    
    nombre[i] = prompt("Introduce el nombre del modulo");
    duracion[i] = prompt("Introduce la duracion del modulo");
    alumnos[i] = prompt("Introduce la cantidad de alumnos");

}
let modulos = [cantidad];
for(let i=0; i<cantidad; i++){
    let modulo = 
        {
            "Nombre": nombre[i],
            "Duracion": duracion[i],
            "Alumnos": alumnos[i]
        }

    modulos[i]=modulo;
}

for(let i=0; i<cantidad; i++){
    console.log(modulos[i]);
}