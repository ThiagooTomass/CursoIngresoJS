/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let claveIngresada;
	let clave;
	clave="utn750";
	claveIngresada = prompt("ingrese el número clave.");
	while(claveIngresada!=clave){
		alert("Acceso denegado");
		claveIngresada=prompt("Re ingrese la clave");
	}
	alert("Clave ingresada con exito");

}//FIN DE LA FUNCIÓN
