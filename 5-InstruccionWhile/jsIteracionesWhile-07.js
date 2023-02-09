/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	contador=0;
	acumulador=0;
	respuesta='si';
while(respuesta=="si"){
num=prompt("Ingrese un numero");
num=parseInt(num);
respuesta=prompt("Desea ingresar numeros? ");
acumulador=acumulador+num;
contador++;
}
promedio=acumulador/contador;
promedio=promedio.toFixed(2);
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;


}//FIN DE LA FUNCIÓN