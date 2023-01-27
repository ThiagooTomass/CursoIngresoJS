function mostrar()
{

	let edad=parseInt(document.getElementById("txtIdEdad").value);
	let estado=document.getElementById("estadoCivil").value;
	if(edad<=17 && edad!=estado){
alert("Es muy pequeño para NO ser soltero.")
	}else{
		alert("Usted tiene "+edad+" años y su estado civil es: "+estado)
	}

}//FIN DE LA FUNCIÓN