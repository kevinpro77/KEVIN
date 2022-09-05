class Login {
    constructor(Usuario,Contraseña){
        this._Usuario=Usuario;
        this._Contraseña=Contraseña;
    }
    set usuario(Usuario){
        this._Usuario=Usuario;
    }
    set Contraseña(Contraseña){
        this._Contraseña=Contraseña;
    }
    Validacion(){
        return'el usuario es correcto'
    }
}
module.exports=Login;
