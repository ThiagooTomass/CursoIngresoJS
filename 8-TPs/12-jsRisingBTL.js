/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso() {
	//definicion de variables
	let edadIngresada;
	let sexoIngresado;
	let estadoCivilIngresado;
	let sueldoBruto;
	let numeroLegajo;
	let nacionalidad;

	nacionalidad = "b";
	numeroLegajo = 0;
	sueldoBruto = 0;
	edadIngresada = 0;
	sexoIngresado = "A";

	//A)

	while (!(edadIngresada >= 18 && edadIngresada <= 90)) {
		edadIngresada = prompt("Ingrese edad");
		edadIngresada = parseInt(edadIngresada);
	}
	document.getElementById("txtIdEdad").value = "Edad: " + edadIngresada;

	//--------------------------->

	//B)

	while (sexoIngresado != "M" && sexoIngresado != "F") {
		sexoIngresado = prompt("Ingrese sexo (M O F)");
		sexoIngresado = sexoIngresado.toUpperCase();
	}

	document.getElementById("txtIdSexo").value = "Sexo: " + sexoIngresado;
	//--------------------------->

	//C)

	while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4) {
		estadoCivilIngresado = prompt("Ingrese estado civil (1: soltero. 2: casado. 3: divorciado. 4: viudo)")
		estadoCivilIngresado = parseInt(estadoCivilIngresado);
	}
	document.getElementById("txtIdEstadoCivil").value = "Estado civil: " + estadoCivilIngresado

	//--------------------------->

	//D)

	while (!(sueldoBruto >= 8000)) {
		sueldoBruto = prompt("Ingrese sueldo bruto");
		sueldoBruto = parseInt(sueldoBruto);
	}
	document.getElementById("txtIdSueldo").value = "Sueldo bruto: " + sueldoBruto

	//--------------------------->

	//E)

	while (!(numeroLegajo >= 1000 && numeroLegajo <= 9999)) {
		numeroLegajo = prompt("Ingrese numero de legajo (XXXX)");
		numeroLegajo = parseInt(numeroLegajo);
	}
	document.getElementById("txtIdLegajo").value = "Legajo: " + numeroLegajo;

	//--------------------------->

	//F)
	while (nacionalidad != "A" && nacionalidad != "E" && nacionalidad != "N") {
		nacionalidad = prompt("Ingrese nacionalidad: (A:argentino. E:extranjeros. N:nacionalizados)");
		nacionalidad = nacionalidad.toUpperCase();
	}
	document.getElementById("txtIdNacionalidad").value = "Nacionalidad: " + nacionalidad;
}
