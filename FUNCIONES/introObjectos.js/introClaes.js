//Objectos estado y comportamiento
//var x = 2;// las variables tradicionales solo tienen objectos
class Animal {
    constructor(nombre) {
            this._nombre = nombre;
            // console.log('Se activo el onstrictor')
        }
        //ca,eññ case
        // get nombre
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
    mensaje() {
        console.log('soy un mensaje')
    }


}
var objecto1 = new Animal('conejo');
console.log(objecto1)
    //objecto1.setNombre(''liebre)
objecto1.nombre = 'conejo domestico'
console.log(objecto1.nombre)
objecto1.mensaje();
console.log(typeof(objecto1))




class Numeros {
    constructor(vector) {
        this._vector = vector;
    }
    llenarVector(tam) {
        for (let i = 0; i < tam; i++) {
            this._vector[i] = Math.round(Math.random() * 100)

        }
    }
    get vectpr() {
        return this._vector;
    }
}
let vec = []
let ob = new Numeros(vec);
ob.llenarVector(10);
console.log(ob._vector);