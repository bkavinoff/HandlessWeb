let ArrayUsuarios = [];

//document.ready:
$(() => {

    //-----------------------------Programa principal-----------------------------
    CargarArrayUsuarios();

    //Muestro los tiempos record en CONSOLA:
    MostrarTiemposRecord();

    //genero mis rows:
    GenerarDatosTablaPuntajesGeneral();
});


//-------------------------Funciones Tablas de Puntajes------------------------

function MostrarTiemposRecord() {
    console.log("Array ordenado por orden de ingreso:");
    for (const user of ArrayUsuarios) {
        console.log("Tiempo record del usuario " + user.nickname + ": " + user.tiempoRecord);
    }
}

function OrdenarArrayUsuarios() {
    let ordenado = ArrayUsuarios.sort(OrdenarPorTiempoRecord);
    return ordenado;
}

function GenerarDatosTablaPuntajesGeneral() {
    //obtengo el nodo padre:
    let tablaGeneral = $("#tbody-general");

    //genero mi plantilla:
    let i = 0;
    let arr = OrdenarArrayUsuarios();
    for (const usuario of arr) {
        i++;

        //solo muestro el top 10:
        if (i > 10) { break; }

        let row = document.createElement("tr")
        row.innerHTML = `<td scope="row">${i}</td>
        <td>${usuario.nickname}</td>
        <td>${usuario.tiempoRecord}</td>`;

        tablaGeneral.append(row);
    }
}