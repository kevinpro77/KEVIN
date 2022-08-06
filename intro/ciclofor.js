var contador = 1;
contador = contador + 1;

for (let i = 1; i <= 10; i = i + 1) {
    console.log(i)
}
/*otra forma de hacer un ciclo con for  */
let i;
let suma = 0
for (i = 1; i <= 10; i = i + 1) {
    console.log(i)
    suma = suma + i;

}
console.log(`la suma es ${suma}`)


var max = 100;
var min = 50;
for (let j = 0; j <= 10; i = j++) {
    console.log(Math.random() * (max - min) + min)
}

Math.random() * 20
Math.random() * (20 - 5) + 5
Math.random() * (50) + 50

// numeros de 1 a 100 y diga cuales de ellos son multiplos de 7
for (let a = 0; a < 100; a++) {
    if (a % 7 == 0) {
        console.log(a, 'Es multiplo de 7');
    }
};

//Generar 10 numeros aleatorios que esten en el rango de 1 a 100 
//(sin incluir el cero). Muestre la suma y el promedio
let n;
let Suma = 0;
for (let n = 1; n < 100; n + 1) {
    console.log(n)
    Suma = Suma + n;
}
console.log(`la suma es ${Suma}`)
var promedio = Suma / 100
console.log(`La suma es ${Suma} y el promedio es ${promedio}`)