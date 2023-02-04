/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temp;
    let resultado;
	temp = document.getElementById("txtIdTemperatura").value;

    temp=parseFloat(temp);

    resultado=(temp-32)/1.8;

    resultado=resultado.toFixed(2);

    alert(temp+" grados Farhenheit equivalen a "+resultado+" grados centigrados");
}

function CentigradosFahrenheit () 
{
    let temp;
    let resultado;

	temp = document.getElementById("txtIdTemperatura").value;
    temp=parseFloat(temp);

    resultado=(temp*1.8+32);

    resultado=resultado.toFixed(2);

    alert(temp+" grados Centigrados equivalen a "+resultado+" grados Farhenheit");
}
