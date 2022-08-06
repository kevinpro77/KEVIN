 class Fraccion {

     constructor(numerador, denominador) {
         this.setNumerador(numerador);
         this.setDenominador(denominador);
     }

     setNumerador(numerador) {
         this.numerador = numerador;
     }
     setDenominador(denominador) {
             if (denominador === 0) {
                 throw "El denominador debe ser distinto de 0";
             }
             this.denominador = denominador;
         }
         // Ayudantes

     maximoComunDivisor(a, b) {
         let temporal; //Para no perder b
         while (b != 0) {
             temporal = b;
             b = a % b;
             a = temporal;
         }
         return a;
     }

     minimoComunMultiplo(a, b) {
             return (a * b) / this.maximoComunDivisor(a, b);
         }
         // Operaciones

     suma(otra) {
         const mcm = this.minimoComunMultiplo(this.denominador, otra.denominador);
         const diferenciaFraccionActual = mcm / this.denominador;
         const diferenciaOtraFraccion = mcm / otra.denominador;
         const resultado = new Fraccion();
         resultado.setNumerador(
             (diferenciaFraccionActual * this.numerador) + (diferenciaOtraFraccion * otra.numerador));
         resultado.setDenominador(mcm);
         return resultado;
     }

     resta(otra) {
         const mcm = this.minimoComunMultiplo(this.denominador, otra.denominador);
         const diferenciaFraccionActual = mcm / this.denominador;
         const diferenciaOtraFraccion = mcm / otra.denominador;
         const resultado = new Fraccion();
         resultado.setNumerador(
             (diferenciaFraccionActual * this.numerador) - (diferenciaOtraFraccion * otra.numerador));
         resultado.setDenominador(mcm);
         return resultado;
     }

     producto(otra) {
         return new Fraccion(this.numerador * otra.numerador, this.denominador * otra.denominador);
     }

     cociente(otra) {
         return new Fraccion(this.numerador * otra.denominador, this.denominador * otra.numerador);
     }


     simplifica() {
         const mcd = this.maximoComunDivisor(this.numerador, this.denominador);
         return new Fraccion(this.numerador / mcd, this.denominador / mcd);
     }
     toString() {
         return `${this.numerador}/${this.denominador}`;
     }

     equals(otra) {
         return this.numerador === otra.numerador && this.denominador === otra.denominador;
     }
 }

 const mini = new Fraccion(15, 5);
 const max = new Fraccion(8, 4);
 console.log(`${mini.toString()} + ${max.toString()} = ${mini.suma(max).toString()}`);
 console.log(`${mini.toString()} - ${max.toString()} = ${mini.resta(max).toString()}`);
 console.log(`${mini.toString()} * ${max.toString()} = ${mini.producto(max).toString()}`);
 console.log(`${mini.toString()} / ${max.toString()} = ${mini.cociente(max).toString()}`);