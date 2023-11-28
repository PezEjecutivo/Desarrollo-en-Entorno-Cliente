//Cambiar estilo de la pagina y el boton
function cambiar() {
  if (document.getElementById("cuerpo").classList.contains("blanco")) {
    document.getElementById("cuerpo").classList.remove("blanco");
    document.getElementById("cuerpo").classList.add("oscuro");
    document.getElementById("cambiarEstilo").classList.remove("btn-dark");
    document.getElementById("cambiarEstilo").classList.add("btn-light");
  } else {
    document.getElementById("cuerpo").classList.remove("oscuro");
    document.getElementById("cuerpo").classList.add("blanco");
    document.getElementById("cambiarEstilo").classList.remove("btn-light");
    document.getElementById("cambiarEstilo").classList.add("btn-dark");
  }
}

//Script para ell ejercicio

class telefonoMovil {
  CPU = "AMD";
  RAM = 16;
  Almacenamiento = "1 TB";
  Ancho = "12";
  Alto = "23";
  numCamaras = "4";

  constructor(CPU, RAM, Almacenamiento, Ancho, Alto, numCamaras) {
    this.CPU = CPU;
    this.RAM = RAM;
    this.Almacenamiento = Almacenamiento;
    this.Ancho = Ancho;
    this.Alto = Alto;
    this.numCamaras = numCamaras;
  }

  toString() {
    console.log(
      `CPU = ${this.CPU} \nRAM = ${this.RAM} \nAlmacenamiento = ${this.Almacenamiento} \nAncho = ${this.Ancho} \nAlto = ${this.Alto} \nNumero de camaras = ${this.numCamaras} \n`
    );
  }
}

const telefono1 = new telefonoMovil("Snapdragon 865", "8 GB", "128 GB", 6.2, 15.1, 3);
const telefono2 = new telefonoMovil("carabante 990", "6 GB", "64 GB", 6.0, 14.5, 2);
const telefono3 = new telefonoMovil("Apple A14 Bionic", "4 GB", "256 GB", 5.8, 13.8);
const telefono4 = new telefonoMovil("valladares 980", "12 GB", "256 GB", 6.4, 16.0, 4);

telefono1.toString();
telefono2.toString();
telefono3.toString();
telefono4.toString();
