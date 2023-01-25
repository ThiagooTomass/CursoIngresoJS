/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let num1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let num2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let num3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    let resultado=num1+num2+num3;

    alert(resultado)

}
function Promedio () 
{
	let num1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let num2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let num3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    let resultado=(num1+num2+num3)/3;

    alert(resultado)	
}
function PrecioFinal () 
{
    let num1=parseFloat(document.getElementById("txtIdPrecioUno").value);
    let num2=parseFloat(document.getElementById("txtIdPrecioDos").value);
    let num3=parseFloat(document.getElementById("txtIdPrecioTres").value);

    let iva=((num1+num2+num3)*21/100);
    let resultado=iva+num1+num2+num3
    alert(resultado)
}