/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{

	let num1=parseFloat(document.getElementById("txtIdSueldo").value);
	
	let resultado=((num1*10/100)+num1);

	document.getElementById("txtIdResultado").value=resultado;

}
