const Persona=require('./Persona');
class Aprendiz extends Persona {
    constructor(nombre, documento, ficha) {
      super(nombre, documento);
      this._ficha = ficha;
    }
    set ficha(ficha) {
      this._ficha = ficha;
    }
    get ficha() {
      return this._ficha;
    }
    imprimirTodo(){
      console.log(this._nombre)
      console.log(this._documento)
      console.log(this._ficha)
  
    }
  }
 module.exports=Aprendiz;