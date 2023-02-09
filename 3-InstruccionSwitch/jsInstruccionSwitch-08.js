function mostrar()
{

	let destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Frio");
			break;

		case "Cataratas":
			alert("Calor");
			break;

		case "Mar del plata":
			alert("Calor");
			break;

		case "Ushuaia":
			alert("Frio");
	}

}//FIN DE LA FUNCIÓN