/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar() {

	let respuesta;
	let num;
	let sumaPositivos;
	let sumaNegativos;
	let contadorNegativo;
	let contadorPositivo;
	let pares;
	let contadoresPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	let contadorCeros;

	num = 0;
	sumaPositivos = 0;
	contadorPositivo = 0;
	promedioPositivos = 0;
	sumaNegativos = 0;
	contadorNegativo = 0;
	promedioNegativos = 0;
	diferencia = 0;
	pares = 0;
	contadoresPares = 0;
	contadorCeros = 0;


	respuesta = "si";

	while (respuesta == "si") {
		num = prompt("Ingrese un numero");
		num = parseInt(num);

		if (num >= 0) {
			//2)
			sumaPositivos = sumaPositivos + num;
			//3)
			contadorPositivo++;

		} else {
			//1)
			sumaNegativos = (sumaNegativos + num);
			//4)
			contadorNegativo++;
		}
		if (num == 0) {
			//5)
			contadorCeros++;
		}
		//6)
		pares = num % 2;
		if (pares == 0) {
			contadoresPares++;
		}
		respuesta = prompt("desea continuar?");
	}

/*1*/ 	alert(sumaNegativos);
/*2*/	alert(sumaPositivos);
/*3*/	alert(contadorPositivo);
/*4*/	alert(contadorNegativo);
/*5*/	alert(contadorCeros);
/*6*/	alert(contadoresPares);
/*7*/	if (contadorPositivo > 0) {
		promedioPositivos = sumaPositivos / contadorPositivo;
		alert(promedioPositivos);
	}
/*8*/	if (contadorNegativo > 0) {
		promedioNegativos = sumaNegativos / contadorNegativo;
		alert(promedioNegativos);
	}
/*9*/	diferencia = promedioPositivos - promedioNegativos;
	alert(diferencia);
}//FIN DE LA FUNCIÓN