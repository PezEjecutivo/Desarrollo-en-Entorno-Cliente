var hoy = new Date().getTime();
var navidad = new Date('2023-12-25').getTime();
var diff = navidad - hoy;
document.write("Quedan " + (parseInt(diff / (1000 * 60 * 60 * 24)) + 1) + " dias para navidad<br>");