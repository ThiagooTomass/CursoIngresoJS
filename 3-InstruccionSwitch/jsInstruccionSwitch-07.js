function mostrar()
{

	let destino=document.getElementById("txtIdDestino").value;

	switch(destino){
		case "Bariloche":
			alert("Oeste");
			break;

		case "Cataratas":
			alert("Este");
			break;

		case "Mar del plata":
			alert("Norte");
			break;

		case "Ushuaia":
			alert("sur");
	}

}//FIN DE LA FUNCIÓN