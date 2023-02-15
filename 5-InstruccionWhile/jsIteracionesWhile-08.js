/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
	let contador;
	let respuesta;
	let sumaPositivos;
	let multiplicacionNegativos;
	let num;
	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 0;

	respuesta = 'si';
	while (respuesta == "si") {
		num = prompt("Ingrese un numero");
		num = parseInt(num);
		if (num >= 0) {
			sumaPositivos = sumaPositivos + num;

		} else {
			multiplicacionNegativos = multiplicacionNegativos + num;
			contador++;

		}

		respuesta = prompt("Desea ingresar numeros? ");
	}

	multiplicacionNegativos = multiplicacionNegativos * contador;

	document.getElementById("txtIdSuma").value = sumaPositivos;
	document.getElementById("txtIdProducto").value = multiplicacionNegativos;

}//FIN DE LA FUNCIÓN