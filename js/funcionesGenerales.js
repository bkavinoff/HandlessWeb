function CargarArrayUsuarios() {
    if (localStorage.getItem("ArrayUsuarios") != null) {
        ArrayUsuarios = JSON.parse(localStorage.getItem("ArrayUsuarios"));
        //let tipo = typeof(ArrayUsuarios);
        //console.log(tipo);
    }
}

function OrdenarPorTiempoRecordGeneral(a, b) {
    if (a.tiemposRecord[0].tiempoString < b.tiemposRecord[0].tiempoString) {
        return -1;
    }
    if (a.tiemposRecord[0].tiempoString > b.tiemposRecord[0].tiempoString) {
        return 1;
    }
    return 0;
}

function OrdenarPorTiempoRecordNivel1(a, b) {
    if (a.tiemposRecord[1].tiempoString < b.tiemposRecord[1].tiempoString) {
        return -1;
    }
    if (a.tiemposRecord[1].tiempoString > b.tiemposRecord[1].tiempoString) {
        return 1;
    }
    return 0;
}

function OrdenarPorTiempoRecordNivel2(a, b) {
    if (a.tiemposRecord[2].tiempoString < b.tiemposRecord[2].tiempoString) {
        return -1;
    }
    if (a.tiemposRecord[2].tiempoString > b.tiemposRecord[2].tiempoString) {
        return 1;
    }
    return 0;
}

function OrdenarPorTiempoRecordNivel3(a, b) {
    if (a.tiemposRecord[3].tiempoString < b.tiemposRecord[3].tiempoString) {
        return -1;
    }
    if (a.tiemposRecord[3].tiempoString > b.tiemposRecord[3].tiempoString) {
        return 1;
    }
    return 0;
}

function ObtenerNumeroConCeros(esCentesima, numero) {
    let numeroConCeros = numero;

    //horas y minutos:
    if (esCentesima == false && numero < 10) {
        numeroConCeros = "0" + numero
    } else {
        numeroConCeros = "" + numero + ""
    }

    //centesimas:
    if (esCentesima == true && numero < 10) {
        numeroConCeros = "00" + numero
    } else if (esCentesima == true && numero >= 10 && numero < 100) {
        numeroConCeros = "0" + numero
    }
    return numeroConCeros;
}