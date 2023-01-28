function mostrar()
{

	var estacion =txtIdEstacion.value;
	var destino =txtIdDestino.value;
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+((15000*20/100)+15000));break;
				case "Cataratas":
				case "Cordoba":	alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000-(15000*10/100)));break;
				case "Mar del plata":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000-(15000*20/100)));break;
			}break;
		case "Verano":
			switch(destino){
				case "Bariloche":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000-(15000*20/100)));break;
				case "Cataratas":
				case "Cordoba":	alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000+(15000*10/100)));break;
				case "Mar del plata":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000+(15000*20/100)));break;
			}break;
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000+(15000*10/100)));break;
				case "Cataratas":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000+(15000*10/100)));break;
				case "Cordoba":	alert("El precio del voleto a "+destino+" en "+estacion+" es de "+15000);break;
				case "Mar del plata":alert("El precio del voleto a "+destino+" en "+estacion+" es de "+(15000+(15000*10/100)));break;
			}
	}

}//FIN DE LA FUNCIÓN