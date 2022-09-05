//objetos estado y comportamiento
//var x=12;// las variables tradicionales
//solo tienen estado
class Animal {
    constructor(nombre) {
            this._nombre = nombre;
            //console.log('Se activo el constructor');
        }
        //camell case
        // getNombre(){
        //     return this.nombre;
        // }
    get nombre() {
            return this._nombre;
        }
        // setNombre(nombre){
        //     this.nombre=nombre;
        // }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    mensaje() {
        console.log('Soy un mensaje');
    }
}
var objeto1 = new Animal('Conejo');
console.log(objeto1)
    //objeto1.setNombre('Liebre')
objeto1.nombre = 'Conejo Doméstico'
    //console.log(objeto1.getNombre())
console.log(objeto1.nombre);
//console.log(typeof(objeto1))

// function suma(num1,num2){
//     return num1+num2;
// }

// suma(100,200);
// suma(objeto1, "sirve?");


class Numeros {
    constructor(vector) {
        this._vector = vector;
    }
    llenarVector(tam) {
        for (let i = 0; i < tam; i++) {
            this._vector[i] = Math.round(Math.random() * 100)

        }
    }

    get vector() {
        return this._vector;
    }

}

let vec = []
let ob = new Numeros(vec);
ob.llenarVector(10);
console.log(ob.vector);