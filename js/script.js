alert("Bienvenido al sistema de registro de usuarios");
let ArrayUsuarios = [];

//declaro mi clase usuario
class Usuario {
    //constructor(nombre, apellido, nickname, edad) {
    constructor(nickname) {
        //this.nombre = nombre;
        //this.apellido = apellido;
        this.nickname = nickname;
        //this.edad = edad;
        this.tiempoRecord = 0;
    }
    CargarTiempoRecord = (tiempo) => {
        this.tiempoRecord = tiempo;
    };
}

//Funcion que genera un usuario
const GenerarUsuario = (i) => {
    let num = i + 1;
    //let nombreUsuario = prompt("Ingrese el nombre del usuario " + num);
    //let apellidoUsuario = prompt("Ingrese el apellido del usuario " + num);
    let nickname = prompt("Ingrese nickname del usuario " + num);
    //let edadUsuario = Number(prompt("Ingrese edad del usuario " + num));

    //let user = new Usuario(nombreUsuario, apellidoUsuario, nickname, edadUsuario);
    let user = new Usuario(nickname);
    //console.log(user);
    return user;
}

//-----------------------------Programa principal-----------------------------

//solicito cantidad de usuarios a ingresar
let cantidadUsuarios = SolicitarCantidadDeUsuarios();

//verifico que la cantidad sea mayor a cero:
if (ValidarPositivo(cantidadUsuarios)) {
    //es positivo, comienzo:
    for (let i = 0; i < cantidadUsuarios; i++) {
        let user = GenerarUsuario(i);
        ArrayUsuarios.push(user);
    }
    //let promedioEdad = CalcularPromedioEdad();

    //muestro el promedio:
    //MostrarResultado(promedioEdad);
} else {
    MostrarError("Debe ingresar un número positivo");
}

//le agrego un tiempo record solo a los usuarios pares
GenerarTiemposRecord();

//Muestro los tiempos record en CONSOLA:
MostrarTiemposRecord();

//Muestro todos los datos de los usuarios ingresados, ordenados por nickname en CONSOLA
MostrarTodosLosDatos();

//genero mis rows:
GenerarDatosTablaPuntajesGeneral();

alert("Fin del programa");

//----------------------------------FUNCIONES----------------------------------

function SolicitarCantidadDeUsuarios() {
    let cantidad = parseInt(prompt("Cuántos usuarios desea registrar?"));
    return cantidad;
}

// function CalcularPromedioEdad() {
//     let sumaEdades = 0;

//     for (const user of ArrayUsuarios) {
//         sumaEdades += user.edad;
//     }

//     let promedio = sumaEdades / ArrayUsuarios.length;
//     return promedio;
// }

// function MostrarResultado(promedioEdad) {
//     alert("Se ingresaron " + ArrayUsuarios.length + " usuarios. Promedio de edad: " + promedioEdad + " años");
// }

function MostrarError(mensaje) {
    alert(mensaje);
}

function ValidarPositivo(numero) {
    return (numero > 0);
}

function GenerarTiemposRecord() {
    //recorro el array
    for (i = 0; i < ArrayUsuarios.length; i++) {
        ArrayUsuarios[i].CargarTiempoRecord("1:23:5" + i);
    }
}

function MostrarTiemposRecord() {
    console.log("Array ordenado por orden de ingreso:");
    for (const user of ArrayUsuarios) {
        console.log("Tiempo record del usuario " + user.nickname + ": " + user.tiempoRecord);
    }
}

function MostrarTodosLosDatos() {
    console.log("Array ordenado por nickname:");
    let arr = OrdenarArrayUsuarios();
    for (const user of arr) {
        console.log(user);
    }
}

function OrdenarArrayUsuarios() {
    let ordenado = ArrayUsuarios.sort(OrdenarPorNickName);
    return ordenado;
}

function OrdenarPorNickName(a, b) {
    if (a.nickname < b.nickname) {
        return -1;
    }
    if (a.nickname > b.nickname) {
        return 1;
    }
    return 0;
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