function mostrar()
{
	let contador;
	let acumulador;
	let numeroIngresado;
	let promedio;
	let i=0;
	acumulador=0;
	
	while(i<5){
	numeroIngresado=prompt("Ingrese una nota");
	numeroIngresado=parseInt(numeroIngresado);
	acumulador= acumulador + numeroIngresado;
	i++;
	}
	promedio=acumulador/i;
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=promedio;

}//FIN DE LA FUNCIÓN