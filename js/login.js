let ArrayUsuarios = [];
//let userLogged = null;
//document.ready:
$(() => {

    //-----------------------------Programa principal-----------------------------
    $("#btnEnviarLogin").on("click", ClickLoginUsuario);
});

function ClickLoginUsuario(e) {
    e.preventDefault();
    CargarArrayUsuarios();
    SetErrorRegistro(null);

    let emailLogin = $("#emailLogin").val();
    let passwordLogin = $("#passwordLogin").val();

    //valido si mail y password son correctos
    if (ValidarEmailPasswordLogin(emailLogin, passwordLogin) == true) {
        console.log("Usuario logueado");
        SetearUsuarioLogueado(emailLogin);
        window.location = "../index.html";
    } else {
        SetErrorRegistro("Mail o Password incorrecto.");
    }
}

function ValidarEmailPasswordLogin(emailLogin, passwordLogin) {
    let valido = false;
    for (user of ArrayUsuarios) {

        if (user.email == emailLogin && user.password == passwordLogin) {
            valido = true;
            break;
        }
    }
    return valido;
}

function SetErrorRegistro(texto) {
    $("#errorContainer").empty();
    if (texto != null) {
        $("#errorContainer").append(
            `<div id="divErrorRegistro" class="errorRegistro">
            <p4 style="color:red;"><strong>${texto}</strong></p4>
            </div>`
        );

        $("#divErrorRegistro")
            .slideDown(300)
            .fadeIn(300)
            .fadeOut(300)
            .fadeIn(300)
            .fadeOut(300)
            .fadeIn(300);
    }
}