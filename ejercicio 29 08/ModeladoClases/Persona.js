class Persona {
    constructor(nombre, documento) {
      this._nombre = nombre;
      this._documento = documento;
    }
    set nombre(nombre) {
      this._nombre = nombre;
    }
    set documento(documento) {
      this._documento = documento;
    }
    get nombre() {
      return this._nombre;
    }
    get nombre() {
      return this._nombre;
    }
  }
  
  module.exports=Persona;