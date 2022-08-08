//1. Determinar los divisores de un número introducido por teclado
var n = Math.round(Math.random() * 100);
console.log(`${n}, es divible por:`);

for (cont = 1; cont <= n; cont++) {
    if (n % cont == 0) {

        console.log(cont);
    }

}

// 2. determinar si un numero es primo

let n = Math.round(Math.random() * 100);
let = esPrimo = true;

if (n == 1 || n == 0) {
    esPrimo = false;

} else {

    for (i = 2; i < n; i++) {

        if (n % i === 0) {
            esPrimo = false;
        }
    }
}
if (esPrimo) {

    console.log(n + " es primo");

} else console.log(n + " no es primo");


/* 3. Determinar si un número es o no es perfecto.*/
var numero = Math.round(Math.random() * 1000);
for (let i = 1; i <= numero; i++) { // i es el número que vamos a comprobar
    let suma = 0;
    for (let j = 1; j <= i / 2; j++) { // j son los divisores. Se divide desde 1 hasta i/2
        if (i % j == 0) {
            suma = suma + j; // si es divisor se suma
        }
    }
    if (i == suma) {
        console.log(`${suma}, es perfecto`)
    }
}




//4. Cuáles y cuántos son los números perfectos comprendidos entre 1 y 1000

var contador = 0;
var numero = 1000;
console.log(`los numeros perfectos ente 1 y 1000 son:`)
for (let i = 1; i <= numero; i++) { // i es el número que vamos a comprobar
    let suma = 0;
    for (let j = 1; j <= i / 2; j++) { // j son los divisores. Se divide desde 1 hasta i/2
        if (i % j == 0) {
            suma = suma + j; // si es divisor se suma

        }

    }
    if (i == suma) {
        console.log(`${suma}`)
        contador = contador += 1;
    }
}
console.log(`Hay ${contador}  numeros perfectos entre 1 y 1000`)




// 5. Cuáles y cuántos son los números primos comprendidos entre 1 y 1000? 
contador = 0
let n = Math.round(Math.random() * 100);
let = esPrimo = true;

if (n == 1 || n == 0) {
    esPrimo = false;

} else {

    for (i = 2; i < n; i++) {

        if (n % i === 0) {
            esPrimo = false;
            contador = contador += 1;
        }
    }
}
if (esPrimo) {

    console.log(n + " es primo");

} else console.log(`n +  no es primo,${contador}`);

//8. Determinar cuales son los múltiplos de 5 comprendidos entre  y N.
var n = Math.round(Math.random() * 100)
console.log('los numeros multiplos de 5 son:')
for (var i = 1; i <= n; i++) {
    if (i % 5 == 0)
        console.log(i);

}

//ejercicio 12 ciclos 

let N = Math.round(Math.random() * 15);
for (let i = 0; i <= N; ++i) {
    let resultado = '';

    for (let j = 1; j <= i; ++j) {
        resultado += '* ';
    }

    console.log(resultado);
}