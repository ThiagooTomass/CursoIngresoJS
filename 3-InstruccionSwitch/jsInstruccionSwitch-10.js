function mostrar()
{
	var estacion =txtIdEstacion.value;
	var destino =txtIdDestino.value;
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":alert("Se viaja");break;
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":alert("No se viaja");}break;
		
		case "Verano":
			switch(destino){
				case "Mar del plata":
				case "Cataratas":alert("Se viaja");break;
				case "Cordoba":
				case "Bariloche":alert("No se viaja");}break;
		case "Otoño":
			switch(destino){
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
				case "Cordoba":alert("Se viaja");}break;
		case "Primavera":
			switch(destino){
			case "Cataratas":
			case "Mar del plata":
			case "Cordoba":alert("Se viaja");break;
			case "Bariloche":alert("No se viaja");}
	}
}

//FIN DE LA FUNCIÓN