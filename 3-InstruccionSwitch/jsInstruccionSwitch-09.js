function mostrar()
{
	let destino=document.getElementById("txtIdDestino").value;
	let estacion=document.getElementById("txtIdEstacion").value;
	let mensaje;
	let descuento=0;
	let aumento=0;
	switch(estacion){
		case "Invierno":
			switch(destino){
				case "Bariloche":aumento=20;
				break;

				case "Cataratas":
				case "Cordoba":	descuento=10;
				break;

				case "Mar del plata":descuento=20;
				break;

			}break;

		case "Verano":
			switch(destino){
				case "Bariloche":descuento=20;
				break;

				case "Cataratas":
				case "Cordoba":	aumento=10;
				break;

				case "Mar del plata":aumento=20;
				break;

			}break;
			
		case "Otoño":
		case "Primavera":
			switch(destino){
				case "Bariloche":
				case "Mar del plata":
				case "Cataratas":aumento=10;
				break;

				case "Cordoba":	alert("El precio del voleto a "+destino+" en "+estacion+" es de "+15000);
				break;
				
			}
	}
	if(aumento!=0){
	precio_f=15000+(15000*aumento/100);
	alert(mensaje="El precio del voleto a "+destino+" en "+estacion+" es de "+precio_f);
}else{
	precio_f=15000-(15000*descuento/100);
	alert(mensaje="El precio del voleto a "+destino+" en "+estacion+" es de "+precio_f);
}
}//FIN DE LA FUNCIÓN