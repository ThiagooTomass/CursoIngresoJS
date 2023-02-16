/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {

	let numeroMaximo;
	let numeroMinimo;
	let numeroIngresado;
	let respuesta;
	let banderadelprimero;

	numeroMaximo = 0;
	numeroMinimo = 0;
	banderadelprimero = 0;
	respuesta = "s";

	while (respuesta == "s") {
		numeroIngresado = prompt("Ingrese un numero");
		numeroIngresado = parseInt(numeroIngresado);

		if (banderadelprimero == 0) {
			numeroMaximo = numeroIngresado;
			numeroMinimo = numeroIngresado;
			banderadelprimero = 1;
		} else {
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			} else {
				if (numeroIngresado < numeroMinimo) {
					numeroMinimo = numeroIngresado;
				}
			}
		}

		respuesta = prompt("Desa seguirn ingresando datos?(s o n)");
	}
	document.getElementById("txtIdMaximo").value = numeroMaximo
	document.getElementById("txtIdMinimo").value = numeroMinimo
}//FIN DE LA FUNCIÓN