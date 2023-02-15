function mostrar()
{
	let numero;
	numero = Math.round(Math.random()*(10-1)+1);

	if(numero==9 || numero==10){
		alert("EXCELENTE, "+numero)
	}else{
		if(numero>=4 && numero<=8){
			alert("APROBO, "+numero)
		}else{
			alert("Vamos, la proxima se puede, "+numero)
		}
	}

}//FIN DE LA FUNCIÓN