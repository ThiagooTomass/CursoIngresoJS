function mostrar()
{

	let hora=parseInt(document.getElementById("txtIdHora").value);
	switch(hora){
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
			alert("Es de mañana");break;
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
			alert("Es de tarde");break;
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:		
		case 20:
		case 21:
		case 22:
		case 23:
		case 24:
			alert("Es de noche");break;


		default:alert("No existe esa hora");
	}
	/*
	let hora=parseInt(document.getElementById("txtIdHora").value);
	switch(hora>6 && hora<12){
default:alert("Es de mañana");break;
	}

	switch(hora>11 && hora<20){
		default:alert("Es de tarde");break;
			}
			
			switch(hora>19 && hora<25 || hora>=0 && hora<7){
				default:alert("Es de noche");break;
					}

					switch(hora>24){
						default:alert("La hora no existe");break;
							}
							*/
}//FIN DE LA FUNCIÓN