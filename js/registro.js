let ArrayUsuarios = [];

//document.ready:
$(() => {
    //-----------------------------Programa principal-----------------------------
    $("#btnEnviarRegistro").on("click", ClickRegistroUsuario);

    //al mostrarse el modal, limpio el formulario
    $("#modalRegistroOK").on("shown.bs.modal", function() {
        formularioRegistro.reset();
    });
});
//-------------------------Funciones Registro Usuarios------------------------

function ClickRegistroUsuario(e) {
    e.preventDefault();
    CargarArrayUsuarios();
    SetErrorRegistro(null);
    let emailRegistro = $("#emailRegistro").val();
    let usuarioRegistro = $("#usuarioRegistro").val();
    let passwordRegistro = $("#passwordRegistro").val();
    let password2Registro = $("#password2Registro").val();

    //Verifico si el correo ingresado ya está registrado
    if (VerificarCampoExiste("email", emailRegistro) == true) {
        SetErrorRegistro("El correo ya se encuentra registrado.");
        return;
    }

    //Verifico si el nickname ingresado ya está registrado
    if (VerificarCampoExiste("nickname", usuarioRegistro) == true) {
        SetErrorRegistro("El usuario ya se encuentra registrado.");
        return;
    }

    //verifico si la password coincide:
    if (PasswordOK(passwordRegistro, password2Registro) == true) {

        //genero el objeto usuario
        let user = GenerarUsuario(emailRegistro, usuarioRegistro, passwordRegistro);

        //GenerarTiemposUsuario
        user.CargarTiempoRecord(GenerarTiemposRecord());

        //lo guardo en el storage:
        GuardarUsuarioEnStorage(user);

        //muestro el modal:
        $('#modalRegistroOK').modal("toggle");
    } else {
        SetErrorRegistro("El password no coincide");
    }
}

function VerificarCampoExiste(parametro, valor) {

    //recorro mi array de usuarios
    for (const user of ArrayUsuarios) {

        //según sea el parámetro, verifico el campo correspondiente
        switch (parametro) {
            case "email":
                if (user.email == valor) {
                    return true;
                }
                break;
            case "nickname":
                if (user.nickname == valor) {
                    return true;
                }
                break;
        }
    }
    return false;
}

function PasswordOK(p1, p2) {
    return (p1 == p2);
}

function SetErrorRegistro(texto) {
    $("#errorContainer").empty();
    if (texto != null) {
        $("#errorContainer").append(
            `<div id="divErrorRegistro" class="errorRegistro">
            <p4 style="color:red;"><strong>${texto}</strong></p4>
            </div>`
        );

        $("#divErrorRegistro").fadeIn(1000);
    }
}

function GuardarUsuarioEnStorage(user) {
    //guardo mi usuario en el array de usuarios
    ArrayUsuarios.push(user);

    //paso el objeto a json (texto plano):
    let objeto = JSON.stringify(ArrayUsuarios);

    //y vuelvo a grabar el array en el storage
    localStorage.setItem("ArrayUsuarios", objeto);
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