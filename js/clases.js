//declaro mi clase usuario
class Usuario {
    constructor(email, nickname, password) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.tiempoRecord = "0";
    }
    CargarTiempoRecord = (tiempo) => {
        this.tiempoRecord = tiempo;
    };
}

//Funcion que genera un usuario
const GenerarUsuario = (email, nickname, password) => {
    let user = new Usuario(email, nickname, password);
    return user;
}