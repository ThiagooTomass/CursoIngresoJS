function mostrar()
{
	let edad
	edad=document.getElementById("txtIdEdad").value;
	edad=parseInt(edad);
	if(edad>=18){
		alert("Usted es mayor")
	}else{
		alert("Usted es menor")
	}

}//FIN DE LA FUNCIÓN