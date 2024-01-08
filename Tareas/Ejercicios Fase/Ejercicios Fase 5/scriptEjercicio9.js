let cantidad = prompt("Cuantos dados quieres lanzar?");

function tiradaDados(cantidad){
    let mayor = 0;
    let menor = 7;
    for(let i=0; i<cantidad; i++){
        let dado = Math.floor((Math.random()*6)+1);
        
    
        if(dado>mayor){
            mayor=dado;
        }
        if(menor>=dado){
            menor=dado;
        }
    
        document.write("La tirada " + (i+1) + " ha sido: " + dado + "<br>");
    }

    document.write("El mayor ha sido " + mayor + "<br>");
    document.write("El menor ha sido " + menor + "<br>");
}

tiradaDados(cantidad);