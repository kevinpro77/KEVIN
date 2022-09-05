//OBJECTOS  LITERALES 
/*const x = [];
var a = {}
console.log(typeof(a));
var persona = {
    nombre: 'Kevin Palencia ',
    id: 12345,
    datosCompletos: () => console.log(`${persona.nombre} ${persona.id}`),

}
console.log(persona);
console.log(persona.nombre);
console.log(persona['id']);
persona.datosCompletos();
persona.direccion = 'calle con kra';
console.log(persona);
persona.nombre = 'Tatiana Mantilla'
console.log(persona);
delete persona.id;
console.log(persona);
*/

// area de un triangulo
var figuras = {
    nombre: 'triangulo',
    base: 20,
    altura: 50,
    area: () => console.log(`El area del triangulo es: ${(figuras.base * figuras.altura) / 2}  cm2  `),

}
console.log(f)
figuras.area()

// perimetro de un romboide
var figuras = {
    nombre: 'romboide',
    lado1: 20,
    lado2: 50,
    lado3: 24,
    lado4: 45,
    perimetro: () => console.log(`El Area Del Perimetro Es:  ${(figuras.lado1 + figuras.lado2+figuras.lado3+figuras.lado4)}  cm2  `),

}
figuras.perimetro()


// teorema de pitagoras
var figuras = {
    nombre: 'triangulo',
    cateto1: 6,
    cateto2: 10,
    miFuncion: () => console.log(Math.sqrt(Math.pow(figuras.cateto1, 2) + Math.pow(figuras.cateto2, 2))),

}
figuras.miFuncion()

//hallar el radio de una circunferencia 
var figuras = {
    nombre: 'circunferencia',
    diametro: 6,
    radio: () => console.log('El diametro es: ', figuras.diametro, ' cm, Y el  radio de la circunferencia es: ' + figuras.diametro / 2 + ' cm '),
}
figuras.radio()

// funcion que recibe como parametro un objecto y decir si es circunferencia o no