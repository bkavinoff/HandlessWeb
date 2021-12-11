let ArrayUsuarios = [];

$(() => {
    CargarArrayUsuarios();

    let user = BuscarUsuarioPorMailEnArray(userLogged);
    console.log(user);
    $("#email").val(user.email);
});