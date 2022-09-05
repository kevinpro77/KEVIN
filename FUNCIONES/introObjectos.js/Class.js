class persona{
    constructor(nombre,documento){
        this._nombre=nombre;
        this._documento=documento;
    }
    get nombre (){
        return this._nombre;
    }
set nombre(_nombre){
    return this._nombre= this._nombre;

}
}


class aprendiz extends persona{
    constructor(nombre, documento,ficha){
        super(nombre,documento);
        this._ficha=ficha;
    }
    get nombre (){
        return this._nombre=this._nombre;
    }
    set nombre(_nombre){
        return this._nombre=this._nombre;
    }
}


let ob1=new persona('Maria Gomez',12312);
let ob2=new aprendiz('Mike Gonzales', 1231231, 'ADSI');
console.log(ob1)
console.log(ob2)
ob1._nombre='laura';
console.log(ob1.nombre);
ob2._nombre='manuel';
console.log(ob2.nombre);