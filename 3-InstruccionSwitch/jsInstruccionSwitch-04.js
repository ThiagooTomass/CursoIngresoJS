function mostrar()
{
	var mes =txtIdMes.value;
	
	switch(mes){
	
	case "Febrero":alert(mes+" tiene 28 dias");break;

	case "Abril":
	case "Junio":
	case "Septiembre":
	case "Noviembre":alert(mes+"tiene 30 dias");break;


	default:alert(mes+" tiene 31 dias");
	}
}//FIN DE LA FUNCIÓN