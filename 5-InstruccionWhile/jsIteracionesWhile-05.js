/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	let f;
	let m;
	sexoIngresado=document.getElementById("txtIdSexo").value;
	f="f";
	m="m";
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!=f && sexoIngresado!=m){
		alert("Sexo NO valido");
		sexoIngresado=prompt("RE ingrese sexo");
	}
	document.getElementById("txtIdSexo").value=sexoIngresado

}//FIN DE LA FUNCIÓN