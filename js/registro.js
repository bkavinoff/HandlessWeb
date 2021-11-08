let ArrayUsuarios = [];

//-----------------------------Programa principal-----------------------------

//asigno el evento al botón de registro
let botonRegistro = document.getElementById("btnEnviarRegistro");
botonRegistro.addEventListener("click", ClickRegistroUsuario);

let btnOKRegistroExitoso = document.getElementById("btnOKRegistroExitoso");
botonRegistro.addEventListener("click", LimpiarFormularioRegistro);

//-------------------------Funciones Registro Usuarios------------------------

function LimpiarFormularioRegistro(e) {
    document.querySelector("#formularioRegistro").reset();
}

function ClickRegistroUsuario(e) {
    e.preventDefault();
    CargarArrayUsuarios();
    SetErrorRegistro(null);
    let emailRegistro = document.querySelector("#emailRegistro").value;
    let usuarioRegistro = document.querySelector("#usuarioRegistro").value;
    let passwordRegistro = document.querySelector("#passwordRegistro").value;
    let password2Registro = document.querySelector("#password2Registro").value;

    //verifico si la password coincide:
    if (VerificarPassword(passwordRegistro, password2Registro) == true) {

        //genero el objeto usuario
        let user = GenerarUsuario(emailRegistro, usuarioRegistro, passwordRegistro);

        //GenerarTiemposUsuario
        user.CargarTiempoRecord(GenerarTiemposRecord());

        //lo guardo en el storage:
        GuardarUsuarioEnStorage(user);
    } else {
        SetErrorRegistro("El password no coincide");
    }
}

function VerificarPassword(p1, p2) {
    return (p1 == p2);
}

function SetErrorRegistro(texto) {
    let errorText = document.querySelector("#errorRegistroUsuario");
    errorText.innerHTML = texto;
}

function GuardarUsuarioEnStorage(user) {
    //guardo mi usuario en el array de usuarios
    ArrayUsuarios.push(user);

    //paso el objeto a json (texto plano):
    let objeto = JSON.stringify(ArrayUsuarios);

    //y vuelvo a grabar el array en el storage
    localStorage.setItem("ArrayUsuarios", objeto);
}

function MostrarError(mensaje) {
    alert(mensaje);
}

function GenerarTiemposRecord() {
    let tiempo = "";
    let minutos = Math.floor(Math.random() * 60);
    let segundos = Math.floor(Math.random() * 60);
    let centesimas = Math.floor(Math.random() * 100);

    let minutosTexto = ObtenerNumeroConCeros(false, minutos);
    let segundosTexto = ObtenerNumeroConCeros(false, segundos);
    let centesimasTexto = ObtenerNumeroConCeros(true, centesimas);
    tiempo = (minutosTexto + ":" + segundosTexto + ":" + centesimasTexto);
    return tiempo;
}

function ObtenerNumeroConCeros(esCentesima, numero) {
    let numeroConCeros = numero;

    //horas y minutos:
    if (esCentesima == false && numero < 10) {
        numeroConCeros = "0" + numero
    }

    //centesimas:
    if (esCentesima == true && numero < 10) {
        numeroConCeros = "00" + numero
    } else if (esCentesima == true && numero >= 10 && numero < 100) {
        numeroConCeros = "0" + numero
    }
    return numeroConCeros;
}