function mostrar()
{
	let edad;
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	if(edad<13 || edad>17){
		alert("Ustes no adolesente y tiene "+edad+" años")
	}

}//FIN DE LA FUNCIÓN