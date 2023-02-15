/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;

	numeroMaximo=0;
	numeroMinimo=0;


	respuesta='si';
	while(respuesta=="si")
	{
		numeroIngresado=prompt("Ingrese un numero");
		numeroIngresado=parseInt(numeroIngresado);

		if(numeroIngresado>numeroMaximo){

			numeroMaximo=numeroIngresado;
			
		}else{
		if(numeroIngresado<numeroMaximo){
			numeroMinimo=numeroIngresado;
		}
	}
		respuesta=prompt("desea continuar?");
	}
	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;

}//FIN DE LA FUNCIÓN