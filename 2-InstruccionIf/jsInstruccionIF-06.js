function mostrar()
{
	let edad
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	if(edad>17){
alert("Ustes es adulto y tiene "+edad+" años")
	}else{
		if(edad>=13 && edad<=17){
			alert("Ustes es adolesente y tiene "+edad+" años")
		}else{
			alert("Usted en un niño y tiene "+edad+" años")
		}
	}



}//FIN DE LA FUNCIÓN