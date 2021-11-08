let ArrayUsuarios = [];

//-----------------------------Programa principal-----------------------------

CargarArrayUsuarios();

//Muestro los tiempos record en CONSOLA:
MostrarTiemposRecord();

//Muestro todos los datos de los usuarios ingresados, ordenados por nickname en CONSOLA
MostrarTodosLosDatos();

//genero mis rows:
GenerarDatosTablaPuntajesGeneral();

//-------------------------Funciones Tablas de Puntajes------------------------

function MostrarTiemposRecord() {
    console.log("Array ordenado por orden de ingreso:");
    for (const user of ArrayUsuarios) {
        console.log("Tiempo record del usuario " + user.nickname + ": " + user.tiempoRecord);
    }
}

function MostrarTodosLosDatos() {
    console.log("Array ordenado por tiempo:");
    let arr = OrdenarArrayUsuarios();
    for (const user of arr) {
        console.log(user);
    }
}

function OrdenarArrayUsuarios() {
    let ordenado = ArrayUsuarios.sort(OrdenarPorTiempoRecord);
    return ordenado;
}

function GenerarDatosTablaPuntajesGeneral() {
    //obtengo el nodo padre:
    let tablaGeneral = document.getElementById("tbody-general");

    //genero mi plantilla:
    let i = 0;
    for (const usuario of ArrayUsuarios) {
        i++;
        let row = document.createElement("tr")
        row.innerHTML = `<td scope="row">${i}</td>
        <td>${usuario.nickname}</td>
        <td>${usuario.tiempoRecord}</td>`;

        tablaGeneral.appendChild(row);
    }
}