/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temp = parseFloat(document.getElementById("txtIdTemperatura").value);
    

    alert(temp+" grados Farhenheit equivalen a "+((temp-32)/1.8).toFixed(2)+" grados centigrados");
}

function CentigradosFahrenheit () 
{
	let temp = parseFloat(document.getElementById("txtIdTemperatura").value);
    

    alert(temp+" grados Centigrados equivalen a "+((temp*1.8+32).toFixed(2))+" grados Farhenheit");
}
