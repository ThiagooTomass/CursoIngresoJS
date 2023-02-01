/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let num1;
	let porcentaje;
	let resultado;

	num1=parseFloat(document.getElementById("txtIdImporte").value);

	porcentaje=prompt("Ingrese porcentaje a descontar");

	resultado=(num1-(num1*porcentaje/100));

	document.getElementById("txtIdResultado").value=resultado;
}
