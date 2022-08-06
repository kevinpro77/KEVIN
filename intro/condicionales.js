//
var x = Math.round(Math.random() * 100)
console.log(x)
if (x % 5 == 0) {
    console.log('si es multiplo de 5 ')
}

var x = Math.round(Math.random() * 100)
console.log(x)
if (x % 2 == 0) {
    console.log('ES PAR ')
} else console.log(' ES IMPAR ')

//Genere dos numeros aleatorios y diga si b es factor de A,TAREA//
var a = Math.round(Math.random() * 10)
var b = Math.round(Math.random() * 10)
console.log(+a)
console.log(+b)
console.log('')
if ((b <= a) && (b % a == 0)) {
    console.log(+b, 'Es factor de', +a)
} else {
    console.log(+b, 'NO es factor de', +a)
}

//var x = Math.round(Math.random() * 100)//
x = 10
console.log(x)
if (x > 0) {
    console.log('Es Positivo')
} else if (x < 0) {
    console.log('Es Negativo')
} else console.log('el valor es 0')

//Genere dos numeros aleatorios a y b y diga cual de los dos es mayor o si son iguales//

a = Math.round(Math.random() * 100)
console.log(a)
b = Math.round(Math.random() * 100)
console.log(b)
if (a > b) {
    console.log('a es mayor que b')
} else {
    console.log('a es menor que b ')
}
if (a == b) {
    console.log('a es igual a b ')
}
//tiene tres numeros aleatorios diga cual es el menor. No utilice operadores logicos//

a = Math.round(Math.random() * 100)
b = Math.round(Math.random() * 100)
c = Math.round(Math.random() * 100)
console.log(a)
console.log(b)
console.log(c)

//calificaciones
//> 4.5 Exelente
var nota = Math.random() * 4.9;
console.log(`Su nota es: ${nota}`);

if (nota >= 4.5) {
    console.log('Su nota es excelente');
} else if (nota >= 4) {
    console.log('Sobresaliente');
} else if (nota >= 3.5) {
    console.log('Aceptable');
} else if (nota > 2.5) {
    console.log('Regular');
} else {
    console.log('Insuficiente');
}

//OPERADORES LOGICOS && || !

var x = true;
var y = false;
console.log(`Expresion ADN conjucion, y ${x&& y}`)

/*Genrere aleatorimente un valor entre 0 y 100000
aplique 4 tipos de descuento según el estrato social
El estrato también encuentrelo aleatoriamente

estrato 1:50%
estrato 2 40%
estrato 3:30%
estrato 4:20%
estrato 5:10%
estrato 6:5% */

var valor = Math.round(Math.random() * 100000);
var estrato = Math.round(Math.random() * 6);
console.log(valor);
switch (estrato) {
    case 1:
        valor = valor * 0.50
        break;
    case 2:
        valor = valor * 0.40
        break;
    case 3:
        valor = valor * 0.30
        break;
    case 4:
        valor = valor * 0.20
        break;
    case 5:
        valor = valor * 0.10
        break;
    case 6:
        valor = valor * 0.05
        break;
}
console.log("su estrato es: " + estrato + " despues del descuento el valor total es de: " + valor);