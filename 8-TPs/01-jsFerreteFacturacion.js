/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let num1;
    let num2;
    let num3;
    let resultado;
	num1=document.getElementById("txtIdPrecioUno").value;
    num2=document.getElementById("txtIdPrecioDos").value;
    num3=document.getElementById("txtIdPrecioTres").value;

    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);

    resultado=num1+num2+num3;

    resultado=resultado.toFixed(2);

    alert("La suma es: "+resultado);

}
function Promedio () 
{
    
    let num1;
    let num2;
    let num3;
    let resultado;
	num1=document.getElementById("txtIdPrecioUno").value;
    num2=document.getElementById("txtIdPrecioDos").value;
    num3=document.getElementById("txtIdPrecioTres").value;

    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);
            

    resultado=(num1+num2+num3)/3;

    resultado=resultado.toFixed(2);

    alert("El promedio es: "+resultado);	
}
function PrecioFinal () 
{
    
    let num1;
    let num2;
    let num3;
    let iva;
    let resultado;
    num1=document.getElementById("txtIdPrecioUno").value;
    num2=document.getElementById("txtIdPrecioDos").value;
    num3=document.getElementById("txtIdPrecioTres").value;

    num1=parseFloat(num1);
    num2=parseFloat(num2);
    num3=parseFloat(num3);

    iva=((num1+num2+num3)*21/100);

    resultado=iva+num1+num2+num3;

    resultado=resultado.toFixed(2);

    alert("El precio final es: "+resultado);
}