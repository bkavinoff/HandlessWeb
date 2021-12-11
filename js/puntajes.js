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

    //genero mis tablas:
    GenerarDatosTablaPuntajes("general", ArrayUsuarios);

    //Nivel 1 lo cargo con AJAX desde un archivo para mostrar esa funcionalidad
    //GenerarDatosTablaPuntajes("nivel-1", ArrayUsuarios);
    GenerarDatosTablaPuntajes("nivel-2", ArrayUsuarios);
    GenerarDatosTablaPuntajes("nivel-3", ArrayUsuarios);
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
        console.log("Tiempo record del usuario " + user.nickname + ": General:" + user.tiemposRecord[0].tiempoString + " - Nivel 1:" + user.tiemposRecord[1].tiempoString + " - Nivel 2:" + user.tiemposRecord[2].tiempoString + " - Nivel 3:" + user.tiemposRecord[3].tiempoString);
    }
}

function OrdenarArrayUsuarios(arr, tabla) {
    let ordenado = [];
    switch (tabla) {
        case "general":
            {
                ordenado = arr.sort(OrdenarPorTiempoRecordGeneral);
                break;
            }
        case "nivel-1":
            {
                ordenado = arr.sort(OrdenarPorTiempoRecordNivel1);
                break;
            }
        case "nivel-2":
            {
                ordenado = arr.sort(OrdenarPorTiempoRecordNivel2);
                break;
            }
        case "nivel-3":
            {
                ordenado = arr.sort(OrdenarPorTiempoRecordNivel3);
                break;
            }
        default:
            {
                ordenado = arr.sort(OrdenarPorTiempoRecordGeneral);
                break;
            }
    }
    return ordenado;
}

function GenerarDatosTablaPuntajes(tabla, arrayAGenerar) {
    //obtengo el nodo padre:
    let tbl = $("#tbody-" + tabla);

    //limpio la tabla:
    tbl.empty();

    // obtengo el array ordenado:
    let arr = OrdenarArrayUsuarios(arrayAGenerar, tabla);

    let i = 0;
    for (const usuario of arr) {
        i++;

        let tiempo;
        switch (tabla) {
            case "general":
                {
                    tiempo = usuario.tiemposRecord[0].tiempoString;
                    break;
                }
            case "nivel-1":
                {
                    tiempo = usuario.tiemposRecord[1].tiempoString;
                    break;
                }
            case "nivel-2":
                {
                    tiempo = usuario.tiemposRecord[2].tiempoString;
                    break;
                }
            case "nivel-3":
                {
                    tiempo = usuario.tiemposRecord[3].tiempoString;
                    break;
                }
            default:
                {
                    tiempo = usuario.tiemposRecord[0].tiempoString;
                    break;
                }
        }


        //genero mi plantilla:
        //solo muestro el top 10:
        if (i > 10) { break; }

        let color = GetColorUserLogged(userLogged, usuario.email);
        let row = document.createElement("tr");
        row.innerHTML = `<td scope="row" ${color}>${i}</td>
        <td ${color}>${usuario.nickname}</td>
        <td ${color}>${tiempo}</td>`;

        tbl.append(row);
    }
}

function GetColorUserLogged(userLogged, email) {
    let color = "";
    if (userLogged == email) {
        color = "style='color:red;'"
    }

    return color;
}