/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
let porcentaje;
let num1;
let resultado;

	num1=parseFloat(document.getElementById("txtIdSueldo").value);

	porcentaje=prompt("Ingrese porsentaje a incrementar");
	
	resultado=((num1*porcentaje/100)+num1);

	document.getElementById("txtIdResultado").value=resultado;

}
