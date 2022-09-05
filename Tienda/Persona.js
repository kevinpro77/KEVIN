class Persona {
    constructor(Id, Documento,Nombres,Apellidos,Genero,Correo,Rol) {
        this._documento = Id;
        this._nombre = Documento;
        this._documento = Nombres;
        this._documento = Apellidos;
        this._documento = Genero;
        this._documento = Correo;
        this._documento = Rol;
    }
    set Id(Id) {
      this._Id = Id;
    }
    set Documento(Documento) {
      this._Documento = Documento;
    }
    set Nombres(Nombres) {
        this._Nombres=Nombres;
      }
      set Apellidos(Apellidos) {
        this._Apellidos =Apellidos;
      }
      set Genero(Genero) {
        this._Genero =Genero;
      }    
      set Rol(Rol) {
        this._Rol = Rol;
      }
    get Id() {
      return this._Id;
    }
    get Documento() {
        return this._Documento;
      }
      get Nombres() {
        return this._Nombres;
      }
      get Apellidos() {
        return this._Apellidos;
      }
      get Genero() {
        return this._Genero;
      }
      get Rol() {
        return this._Rol;
      }
  }
  
  module.exports=Persona;