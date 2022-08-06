//Genere una medida de temperatura en grados celcius de forma aleatoria y conviertala a Fahrenheit, Kelvin y Rankine.

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
console.log();



function convertirCelsiusAkelvin(celsius) {
    let resultado2 = temperatura_aleatoria + 273.15;
    return resultado2;
}
let celsius2 = temperatura_aleatoria;
let resultado2 = convertirCelsiusAkelvin(celsius_max);
console.log('La temperatura de grados celsius a kelvin es: ')
console.log(`${celsius2}°C = ${resultado2}°k`);

console.log();



function convertirCelsiusARankine(celsius) {
    let resultado3 = (temperatura_aleatoria * 1.8) + 491.67;
    return resultado3;
}
let celsius3 = temperatura_aleatoria;
let resultado3 = convertirCelsiusARankine(celsius_max);
console.log('La temperatura de grados celsius a Rankine es: ')
console.log(`${celsius3}°C = ${resultado3}°R`);
console.log();