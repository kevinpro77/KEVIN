//*Genere una medida de temperatura en grados celcius
//de forma aleatoria y conviertala a Fahrenheit, Kelvin y Rankine.
let celsius_minimo = 0
let celsius_max = 100
let temperatura_aleatoria = celsius_minimo + Math.floor(Math.random() * celsius_max);

function convertirCelsiusAFahrenheit(celsius) {
    let resultado = (temperatura_aleatoria * 9 / 5.0) + 32;
    return resultado;

}
let celsius = temperatura_aleatoria;
let resultado = convertirCelsiusAFahrenheit(celsius_max);
console.log('La temperatura de grados celsius a fahrenheit es: ')
console.log(`${celsius}°C = ${resultado}°F`);




function convertirCelsiusAkelvin(celsius) {
    let resultado2 = temperatura_aleatoria + 273.15;
    return resultado2;
}
let celsius2 = temperatura_aleatoria;
let resultado2 = convertirCelsiusAkelvin(celsius_max);
console.log('La temperatura de grados celsius a kelvin es: ')
console.log(`${celsius2}°C = ${resultado2}°k`);





function convertirCelsiusARankine(celsius) {
    let resultado3 = (temperatura_aleatoria * 1.8) + 491.67;
    return resultado3;
}
let celsius3 = temperatura_aleatoria;
let resultado3 = convertirCelsiusARankine(celsius_max);
console.log(`${celsius3}°C = ${resultado3}°R`);
console.log('La temperatura de grados celsius a Rankine es: ')



//*Resolver la formula cuadratica generando a, b y c aleatoriamente.
// Defina usted un límite para las variables, por ejemplo de 0 a 100




let a = Math.round(Math.random() * (100 + 100) - 100);
let b = Math.round(Math.random() * (100 + 100) - 100);
let c = Math.round(Math.random() * (100 + 100) - 100);
console.log(' valor de variable a', a, '\n valor de variable b', b, '\n valor de variable c', c)

function x1(a, b, c) {
    return (((-1) * b) + (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
}
var resultadox1 = x1(a, b, c);
console.log('x1 = ' + resultadox1)

function segunda_solucion(a, b, c) {
    return (((-1) * b) - (Math.sqrt(Math.pow(b, 2) - (4 * a * c)))) / (2 * a);
}
var resultadox2 = segunda_solucion(a, b, c);
console.log('x2 = ' + resultadox2)




// funcion sumar
function suma(numero1, numero2) {
    console.log('la suma es\n', numero1 + numero2);
}

suma(174, 245);