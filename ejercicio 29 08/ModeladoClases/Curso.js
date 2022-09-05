const Aprendiz=require('./Aprendiz');

class Curso{
    constructor(nombre,numero,lista){
        this._nombre=nombre;
        this._numero=numero;
        this._lista=lista;
    }
    get lista(){
        return this._lista;
    }
    agregarAprendiz(nuevoAprendiz){
        this._lista.push(nuevoAprendiz)
    }   
    
    generarAprendiz(){
        this._lista.push(new Aprendiz('Maria Suarez',555,2515397))
    }
}

module.exports=Curso;