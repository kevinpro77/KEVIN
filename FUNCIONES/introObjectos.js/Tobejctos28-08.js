// ejercicio  clase y función para sumar  números 


class sumaNumeros {
    constructor(num1, num2, num3) {
        this._num1 = num1;
        this._num2 = num2;
        this._num3 = num3;

    }
    sumar(_num1, _num2, _num3) {
        return new sumaNumeros(console.log('la suma es', this._num1 + this._num2 + this._num3));
    }
}
let objecto1 = new sumaNumeros(4, 8, 23);
console.log(objecto1._num1);
console.log(objecto1._num2);
console.log(objecto1._num3);
objecto1.sumar();




//ejercicio para hallar promedio
class promedioNumeros {
    constructor(num1, num2, num3) {
        this._num1 = num1;
        this._num2 = num2;
        this._num3 = num3;
    }

    promedio(_num1, _num2, _num3) {
        return new promedioNumeros(console.log('El promedio es', this._num1 + this._num2 + this._num3 / 3));

    }
}

let objecto2 = new promedioNumeros(40, 58, 87);
console.log(objecto2._num1);
console.log(objecto2._num2);
console.log(objecto2._num3);
objecto2.promedio();







//hallar el numero menor y mayor

/*Menor */
class numeroMayor {
    constructor(numero1, numero2) {
        this._numero1 = numero1;
        this._numero2 = numero2;

    }
    menor(_numero1, _numero2) {


        if (this._numero1 < this._numero2) {
            console.log('El numero menor es ' + this._numero1)
        } else {
            console.log('El numero menor es ' + this._numero2)

        }


    }
}
let objecte = new numeroMayor(Math.round(Math.random() * 20), Math.round(Math.random() * 20))
console.log(objecte._numero1)
console.log(objecte._numero2)
objecte.menor();




/*MAYOR */

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class numeroMayor {
    constructor(numero1, numero2) {
        this._numero1 = numero1;
        this._numero2 = numero2;

    }
    mayor(_numero1, _numero2) {


        if (this._numero1 > this._numero2) {
            console.log('El numero mayor es ' + this._numero1)
        } else {
            console.log('El numero mayor es ' + this._numero2)

        }


    }
}
let objecto = new numeroMayor(Math.round(Math.random() * 100), Math.round(Math.random() * 100))
console.log(objecto._numero1)
console.log(objecto._numero2)
objecto.mayor();


// ejercicio iva
class impuestoIva {
    constructor(producto, precioproducto) {
        this._producto = producto;
        this._precioproducto = precioproducto
        this._iva = 1.19

    }
    conIva(_precioproducto) {

        return new impuestoIva(console.log('el precio del producto con iva es : ', this._precioproducto * this._iva))

    }
    sinIva(_precioproducto) {
        return new impuestoIva(console.log('El precio del producto sin iva es ', this._precioproducto + this._iva - this._iva))
    }
    get producto() {
        return this._producto;

    }
    set producto(producto) {
        return this._producto = producto;
    }
}

var objecto3 = new impuestoIva('queso', 8000)
objecto3.conIva()
objecto3.sinIva()





////////// ejercicios del libro

class Persona {
    constructor(pnombre, papellido) {
        this._pnombre = pnombre;
        this._papellido = papellido;
    }
    saludar() {
        console.log("hola mi nombre es, ", this._pnombre, this._papellido);
    }
    get nombre() {
        return this._pnombre;
    }
    set nombre(pnombre) {
        this._pnombre = pnombre;
    }
}
let petro = new Persona("kevin", "palencia");
petro.saludar();
petro.nombre = 'juan', '';
petro.saludar();


class persona {
    constructor(pnombre, papellido) {
        this.pnombre = pnombre;
        this.papellido = papellido;
    }
    saludar() {
        console.log("Hola a todos");
    }
    compliment(nombre, objecto) {
        return "eso es maravilloso " + objecto + ", " + nombre;
    }

}

let p = new persona("kevin", "palencia");
p.saludar();
let compliment = p.compliment("kevin", "camisa");
console.log(compliment);


///////////////////////////////////////////////////////////

class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let ps = new Person("kevin", "palencia");
console.log("hola", p.pnombre, p.papellido);

///////////////////////////////////////////////////////


class Person {
    firstname;
    lastname;
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}
let pa = new Person("Maria", "Saga");
console.log();



constructor(firstname, lastname); {
    if (firstname.startsWith("M")) {
        this.firstname = firstname;
    } else {
        this.firstname = "M" + firstname;
    }
    this.lastname = lastname;
}

let pt = new Person("kay", "Moon");