function CargarArrayUsuarios() {
    if (localStorage.getItem("ArrayUsuarios") != null) {
        ArrayUsuarios = JSON.parse(localStorage.getItem("ArrayUsuarios"));
        //let tipo = typeof(ArrayUsuarios);
        //console.log(tipo);
    }
}

function OrdenarPorTiempoRecord(a, b) {
    if (a.tiempoRecord < b.tiempoRecord) {
        return -1;
    }
    if (a.tiempoRecord > b.tiempoRecord) {
        return 1;
    }
    return 0;
}