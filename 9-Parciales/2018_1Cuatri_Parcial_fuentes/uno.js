
function mostrar() {
    let respuesta;
    let nombre;
    let lugar;
    let temporada;
    let cantidadDias;
    let importe;
    let altura;
    let peso;
    let sexo;
    let equipoDeMano;
    let tipoDePago;
    let temporadaAlta;
    let temporadaBaja;
    let pesoAcumulado;
    let primerLugar;
    let segundoLugar;
    let tercerLugar;
    let importetotal;
    let banderadelprimero;
    let numeroMaximo;
    let numeroMinimo;
    let nombrePesado;
    let nombreLiviano;
    let primerflag;
    let primerMaximo;
    let segundaflag;
    let segundoMaximo;
    let tercerflag;
    let tercerMaximo;
    let flagMujer;
    let alturaMaximaDeMujer;
    let nombreDeMujerAlta;
    let contadorDeMercadoPago;
    let contadorDeEfectivo;
    let contadorDeTarjeta;
    let pasajerosPrimerLugar;
    let pasajerosegundoLugar;
    let pasajerosTercerLugar;
    let contadorConEquipo;
    let contadorSinEquipo;

    contadorConEquipo = 0;
    contadorSinEquipo = 0;
    primerflag = 0;
    segundaflag = 0;
    tercerflag = 0;
    banderadelprimero = 0;
    primerLugar = 0;
    segundoLugar = 0;
    tercerLugar = 0;
    pesoAcumulado = 0;
    temporadaBaja = 0;
    temporadaAlta = 0;
    respuesta = "s";

    while (respuesta == "s") {

        //Pedida de datos al usuario

        nombre = prompt("Ingrese nombre del titular");

        lugar = prompt("Ingrese lugar a viajar ( Puerto Madryn / Villa Gessel / Córdoba )");
        while (!(lugar == "Puerto Madryn" || lugar == "Villa Gessel" || lugar == "Cordoba")) {
            lugar = prompt("Ingreso mal el lugar a viajar. Ingrese: ( Puerto Madryn / Villa Gessel / Córdoba )");
        }

        temporada = prompt("Ingrese temporada ( Alta / Baja )");
        while (!(temporada == "Alta" || temporada == "Baja")) {
            temporada = prompt("Ingreso mal la temporada. Ingrese: ( Alta / Baja )");
        }

        cantidadDias = prompt("Ingrese cantidad de dias");
        cantidadDias = parseInt(cantidadDias);

        importe = prompt("Ingrese importe");
        importe = parseInt(importe);

        altura = prompt("Ingrese altura");
        altura = parseInt(altura);

        peso = prompt("Ingrese peso");
        peso = parseInt(peso);

        sexo = prompt("Ingrese sexo ( M / F / NB )");
        while (!(sexo == "M" || sexo == "F" || sexo == "NB")) {
            lugar = prompt("Ingreso mal el sexo. Ingrese: ( M / F / NB )");
        }

        //4K
        equipoDeMano = prompt("Viaja con equipaje de mano? ( s o n )");
        while (!(equipoDeMano == "s" || equipoDeMano == "n")) {
            equipoDeMano = prompt("Ingreso mal la opcion. Viaja con equipaje de mano? ( s o n )");
        }
        if (equipoDeMano == "s") {
            contadorConEquipo += 1;
        } else {
            contadorSinEquipo += 1;
        }
        cantidadTotal = contadorConEquipo + contadorSinEquipo;
        porcentajeNoTiene = contadorSinEquipo / cantidadTotal * 100;
        porcentajeTiene = contadorConEquipo / cantidadTotal * 100;

        tipoDePago = prompt("Paga con (Mercado Pago / Efectivo/ Tarjeta )");
        while (tipoDePago == "Mercado Pago" || tipoDePago == "Efectivo" || tipoDePago == "Tarjeta") {
            tipoDePago = prompt("Ingreso mal el tipo de pago. Ingrese: (Mercado Pago / Efectivo/ Tarjeta )");
        }

        //Acumuladores, banderas y demas

        //1A y 3I

        switch (temporada) {
            case "Alta": temporadaAlta += 1;
                break;
            case "Baja": temporadaBaja += 1;
        }

        //1B

        if (lugar == "Villa Gessel") {
            pesoAcumulado = pesoAcumulado + peso;
        }

        //1C y 2F y 3J

        switch (lugar) {
            case "Puerto Madryn":
                primerLugar += cantidadDias;

                pasajerosPrimerLugar = pasajerosPrimerLugar + 1;

                if (primerflag == 0) {
                    primerMaximo = importe;
                    primerflag = 1;
                } else {
                    if (importe > primerMaximo) {
                        numeroMaximo = peso;
                    }
                }

                break;

            case "Villa Gessel":
                segundoLugar += cantidadDias;

                pasajerosegundoLugar = pasajerosegundoLugar + 1;

                if (segundaflag == 0) {
                    segundoMaximo = importe;
                    segundaflag = 1;
                } else {
                    if (importe > numeroMaximo) {
                        segundoMaximo = importe;
                    }
                }

                break;

            case "Cordoba":
                tercerLugar += cantidadDias;

                pasajerosTercerLugar = pasajerosTercerLugar + 1;

                if (tercerflag == 0) {
                    tercerMaximo = importe;
                    tercerflag = 1;
                } else {
                    if (importe > tercerMaximo) {
                        tercerMaximo = importe;
                    }
                }

        }
        //1D
        importetotal += importe;

        //2E
        if (banderadelprimero == 0) {
            numeroMaximo = peso;
            numeroMinimo = peso;
            nombrePesado = nombre;
            nombreLiviano = nombre;
            banderadelprimero = 1;
        } else {
            if (peso > numeroMaximo) {
                numeroMaximo = peso;
                nombrePesado = nombre;
            } else {
                if (peso < numeroMinimo) {
                    numeroMinimo = peso;
                    nombreLiviano = nombre;
                }
            }
        }
        //2G
        switch (sexo) {
            case "F": if (flagMujer == 0) {
                alturaMaximaDeMujer = altura;
                nombreDeMujerAlta = nombre;
                flagMujer = 1;
            } else {
                if (altura > alturaMaximaDeMujer) {
                    alturaMaximaDeMujer = altura;
                    nombreDeMujerAlta = nombre;
                }
            }
        }
        //3H
        switch (tipoDePago) {
            case "Mercado Pago": contadorDeMercadoPago = contadorDePago + 1; break;
            case "Efectivo": contadorDeEfectivo = contadorDePago + 1; break;
            case "Tarjeta": contadorDeTarjeta = contadorDePago + 1; break;
        }

        respuesta = prompt("Desea seguir ingresando estadias? (s o n) ");
    }

    //Fuera del while

    //1A
    alert("La cantidad de personas que viajan en temporada alta son: " + temporadaAlta);
    alert("La cantidad de personas que viajan en temporada baja son: " + temporadaBaja);
    //1B
    alert(pesoAcumulado);
    //1C
    if (primerLugar > segundoLugar && primerLugar > tercerLugar) {
        alert("El lugar con la mayor cantidad de dias acumulados es Puerto Madryn con " + primerLugar + "dias");
    } else {
        if (segundoLugar > primerLugar && segundoLugar > tercerLugar) {
            alert("El lugar con la mayor cantidad de dias acumulados es Villa Gessel con " + segundoLugar + "dias");
        } else {
            alert("El lugar con la mayor cantidad de dias acumulados es Cordoba con " + tercerLugar + "dias");
        }
    }
    //1D
    alert(importetotal);

    //2E
    alert("El nombre del mas pesado es: " + nombrePesado);
    alert("El nombre del mas liviano es: " + nombreLiviano);
    //2F
    if (primerMaximo > segundoMaximo && primerMaximo > tercerMaximo) {
        alert("El lugar donde se pago el mayor importe fue Puerto Madryn");
    } else {
        if (segundoMaximo > primerMaximo && segundoMaximo > tercerMaximo) {
            alert("El lugar donde se pago el mayor importe fue Villa Gessel");
        } else {
            alert("El lugar donde se pago el mayor importe fue Cordoba");
        }
    }
    //3H
    if (contadorDeMercadoPago > contadorDeEfectivo && contadorDeMercadoPago > contadorDeTarjeta) {
        alert("La forma de pago mas utilizada fue mercado pago");
    } else {
        if (contadorDeEfectivo > contadorDeMercadoPago && contadorDeEfectivo > contadorDeTarjeta) {
            alert("La forma de pago mas utilizada fue efectivo");
        } else {
            alert("La forma de pago mas utilizada fue Tarjeta");
        }
    }
    //3I
    if (temporadaAlta > temporadaBaja) {
        alert("Se viajo mas en la temporada alta");
    } else {
        if (temporadaBaja > temporadaAlta) {
            alert("Se viajo mas en temporada baja");
        } else {
            alert("Se viajo lo mismo en temporada alta que en temporada baja");
        }
    }
    //3J
    if (pasajerosPrimerLugar > pasajerosegundoLugar && pasajerosPrimerLugar > pasajerosTercerLugar) {
        alert("El lugar con mas pasajeros fue Puerto Madryn");
    } else {
        if (pasajerosegundoLugar > pasajerosPrimerLugar && pasajerosegundoLugar > pasajerosTercerLugar) {
            alert("El lugar con mas pasajeros fue Villa Gessel");
        } else {
            alert("El lugar con mas pasajeros fue Cordoba");
        }

    }
    alert("La cantidad de pasajeros con equipos es: " + contadorConEquipo + "\n" + "La cantidad de pasajeros sin equipo es: " + contadorSinEquipo + "\n" + "\n" + "El porcentaje que tiene equipaje es: " + porcentajeTiene + "%" + "\n" + "El porcentaje que no lleva equipaje es: " + porcentajeNoTiene + "%");

}
