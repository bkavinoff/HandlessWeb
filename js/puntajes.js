let ArrayUsuarios = [];
let ArrayUsuariosNivel1 = [];
const URLJSONLevel1 = "../data/jugadores.json";
//document.ready:
$(() => {
    $("#btnCargarPuntajesNivel1AJAX").on("click", CargarPuntajesNivel1AJAX);
    //-----------------------------Programa principal-----------------------------
    CargarArrayUsuarios();

    //Muestro los tiempos record en CONSOLA:
    MostrarTiemposRecord();

    //genero mis rows:
    GenerarDatosTablaPuntajes("general", ArrayUsuarios);
});


//-------------------------Funciones Tablas de Puntajes------------------------

function CargarPuntajesNivel1AJAX(e) {
    e.preventDefault();
    $.ajax({
        method: "GET",
        url: URLJSONLevel1,
        success: function(respuesta) {
            GenerarDatosTablaPuntajes("nivel-1", respuesta);
        }
    })
}

function MostrarTiemposRecord() {
    console.log("Array ordenado por orden de ingreso:");
    for (const user of ArrayUsuarios) {
        console.log("Tiempo record del usuario " + user.nickname + ": " + user.tiempoRecord);
    }
}

function OrdenarArrayUsuarios(arr) {
    let ordenado = arr.sort(OrdenarPorTiempoRecord);
    return ordenado;
}

function GenerarDatosTablaPuntajes(tabla, arrayAGenerar) {
    //obtengo el nodo padre:
    let tbl = $("#tbody-" + tabla);

    //limpio la tabla:
    tbl.empty();

    // obtengo el array ordenado:
    let arr = OrdenarArrayUsuarios(arrayAGenerar);

    let i = 0;
    for (const usuario of arr) {
        i++;

        //genero mi plantilla:
        //solo muestro el top 10:
        if (i > 10) { break; }

        let row = document.createElement("tr");
        row.innerHTML = `<td scope="row">${i}</td>
        <td>${usuario.nickname}</td>
        <td>${usuario.tiempoRecord}</td>`;

        tbl.append(row);
    }
}