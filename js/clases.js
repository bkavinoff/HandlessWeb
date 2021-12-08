//declaro mi clase usuario
class Usuario {
    constructor(email, nickname, password) {
        this.email = email;
        this.nickname = nickname;
        this.password = password;
        this.tiemposRecord = [];
    }
    CargarTiempoRecord = (tiemposRecord) => {
        this.tiemposRecord = tiemposRecord;
    };
}

//declaro mi clase tiempo
class Tiempo {
    constructor(minutos, segundos, miliSegundos) {
        this.minutos = minutos;
        this.segundos = segundos;
        this.miliSegundos = miliSegundos;
        this.tiempoString = "";
    }
    CargarTiempoString = () => {
        this.tiempoString = this.minutos + ":" + this.segundos + ":" + this.miliSegundos;
    }
}

//Funcion que genera un usuario
const GenerarUsuario = (email, nickname, password) => {
    let user = new Usuario(email, nickname, password);
    return user;
}

//Funcion que genera un tiempo
const GenerarTiempo = (minutos, segundos, miliSegundos) => {
    let time = new Tiempo(minutos, segundos, miliSegundos);
    time.CargarTiempoString();
    return time;
}