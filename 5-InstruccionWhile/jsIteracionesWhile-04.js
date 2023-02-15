/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
	let numeroIngresado;
	numeroIngresado = document.getElementById("txtIdNumero").value;
	numeroIngresado = parseInt(numeroIngresado);

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");

	while (!(numeroIngresado >= 0 && numeroIngresado <= 9)) {
		alert("NO Ingreso un numero del 0 al 9");
		numeroIngresado = prompt("Re ingrese numero entre 0 y 9");
	}
	document.getElementById("txtIdNumero").value = numeroIngresado;

}//FIN DE LA FUNCIÓN