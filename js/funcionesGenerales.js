let userLogged;
$(() => {
    $("#btnCerrarSesion").on("click", Logout);

    CargarUsuarioLogueado();
    ActualizarMenuUsuario();
});

function Logout() {
    BorrarUsuarioLogueado();
    window.location.href = "/";
}

function ActualizarMenuUsuario() {
    if (userLogged == undefined || userLogged == null) {
        //no hay usuario logueado, muestro el menu de login y escondo el de usuario
        HideMenuByClass($("#menu-registro-login"), false); //oculto
        HideMenuByClass($("#menu-perfil-usuario"), true); //muestro
    } else {
        //hay un usuario logueado muestro el menu de usuario y escondo el menu de registro y login
        HideMenuByClass($("#menu-registro-login"), true); //oculto
        HideMenuByClass($("#menu-perfil-usuario"), false); //muestro
    }
}

function HideMenuByClass(element, hide) {
    if ($(element).hasClass("d-none") == true && hide == false) {
        //está oculto y tengo que mostrarlo
        $(element).removeClass("d-none");
        $(element).addClass("d-flex");
    }

    if ($(element).hasClass("d-flex") == true && hide == true) {
        //está oculto y tengo que mostrarlo
        $(element).removeClass("d-flex");
        $(element).addClass("d-none");
    }

    // if ($(element).hasClass("d-none") == false && hide == true) {
    //     $(element).removeClass("d-flex");
    //     //está visible, tengo que ocultarlo
    //     $(element).addClass("d-none");
    // }
}

function SetearUsuarioLogueado(userMail) {
    if (sessionStorage.getItem("UsuarioLogueado") == null) {
        sessionStorage.setItem("UsuarioLogueado", userMail);
    }
}

function CargarUsuarioLogueado() {
    if (sessionStorage.getItem("UsuarioLogueado") != null) {
        userLogged = sessionStorage.getItem("UsuarioLogueado");
    }
}

function BorrarUsuarioLogueado() {
    if (sessionStorage.removeItem("UsuarioLogueado"));
}

function BuscarUsuarioPorMailEnArray(email) {
    let usuario = null;
    for (user of ArrayUsuarios) {

        if (user.email == email) {
            usuario = user;
            break;
        }
    }
    return user;
}

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