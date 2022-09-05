const x = 100;
const saludar = () => {
    return (`hola ADSI`);
}
console.log(saludar());


//funcion flecha sin paramentros 
const saludar2 = () => `hola ADSI`;
console.log(saludar2());
//

//funcion flecha con un paramentros
const saludar3 = (nombre) => `hola ${nombre} ¿conoces soacha?`;
console.log(saludar3('instructor samuel'));


//

/***/
//  1. funcion para resolver el teorema de pitagoras con flecha
const miFuncion = (cateto1, cateto2) => Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
console.log(miFuncion(6, 10));

//  funcion para el teorema de pitagoras 
function teorema(cateto1, cateto2) {
    return console.log(Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
}
teorema(6, 10)

// 2. Calcular la operación xn sin utilizar la función pow  con funcion flecha */ 
const xn = (n, x) => {
        for (var i = 1; i <= n; i++) {
            x = x * x
        }
        return console.log(Math.trunc(x))
    }
    (xn(6, 5));

//  Calcular la operación xn sin utilizar la función pow 

/*function xn(n, x) {
    for (var i = 1; i <= n; i++) {
        x = x * x
    }
    return console.log(Math.trunc(x))
}
(xn(6, 2));*/



// 3. Determinar cuales son los múltiplos de 5 comprendidos entre  y N function flecha
const multiplos = (n) => {
    for (var i = 1; i <= n; i++) {
        if (i % 5 == 0)
            return console.log(i);
    }
}
multiplos(50);

//Determinar cuales son los múltiplos de 5 comprendidos entre  y N.
/*function multiplos(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 5 == 0)
            return console.log(i);
    }
}
multiplos(10);*/

// 4. determinar  si un numero es perfecto  con flecha
const perfecto = (num) => {
    let suma = 0
    for (let i = 01; i < num; i++) {
        if (num % i == 0) {
            suma = suma + i //suma +=i
        }
    }
    if (suma == num) {
        return `${num} Es perfecto`;
    } else {
        return `${num} No es perfecto`;
    }

}
console.log(perfecto(28));

//determinar  si un numero es perfecto  con flecha

/*function perfecto(num) {
    let suma = 0
    for (let i = 01; i < num; i++) {
        if (num % i == 0) {
            suma = suma + i //suma +=i
        }
    }
    if (suma == num) {
        return `${num} Es perfecto`;
    } else {
        return `${num} No es perfecto`;
    }

}
console.log(perfecto(28));
*/
//quinto ejercicio ciclos
function divisible(n) {
    var n = Math.round(Math.random() * 100);
    console.log(`${n}, es divible por:`);

    for (cont = 1; cont <= n; cont++) {
        if (n % cont == 0) {

            console.log(cont);
        }

    }
}
divisible()
    //quinto ejercicio
    /*const divisible = (n) => {
        var n = Math.round(Math.random() * 100);
        console.log(`${n}, es divible por:`);

        for (cont = 1; cont <= n; cont++) {
            if (n % cont == 0) {

                console.log(cont);
            }

        }
    }
    divisible()

    */


// primer ejercicio de condicionales
//   Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. 
// Cuando el número exceda los límites emita un mensaje y finalice el programa
function cifras(numero) {
    var numero = Math.round(Math.random() * 99999)
    if (numero < 10)
        return console.log(numero, '\n El numero tiene 1 cifra')
    else if (numero < 100)
        return console.log(numero, '\n El numero tiene 2 cifras')
    else if (numero < 1000)
        return console.log(numero, '\n El numero tiene 3 cifras')
    else if (numero < 10000)
        return console.log(numero, '\n El numero tiene  4 cifras')
    else if (numero < 100000)
        return console.log(numero, '\n El numero tiene  5 cifras')
}
cifras()


//   Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. 
// Cuando el número exceda los límites emita un mensaje y finalice el programa flecha

/*const cifras = (numero) => {
    var numero = Math.round(Math.random() * 99999)
    if (numero < 10)
        return console.log(numero, '\n El numero tiene 1 cifra')
    else if (numero < 100)
        return console.log(numero, '\n El numero tiene 2 cifras')
    else if (numero < 1000)
        return console.log(numero, '\n El numero tiene 3 cifras')
    else if (numero < 10000)
        return console.log(numero, '\n El numero tiene  4 cifras')
    else if (numero < 100000)
        return console.log(numero, '\n El numero tiene  5 cifras')
}
cifras()*/

// segundo ejercicio condicionales
//Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
//etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores
function notas(nota) {
    var nota = Math.round(Math.random() * 10);
    console.log(`Su nota es: ${nota}`);

    if (nota >= 9) {
        console.log('Su nota es excelente');
    } else if (nota >= 7) {
        console.log('Sobresaliente');
    } else if (nota >= 6) {
        console.log('Aceptable');
    } else if (nota > 5) {
        console.log('Regular');
    } else {
        console.log('Insuficiente');
    }
}
notas()

//Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
//etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores
/*const notas = (nota) => {
    var nota = Math.round(Math.random() * 10);
    console.log(`Su nota es: ${nota}`);

    if (nota >= 9) {
        console.log('Su nota es excelente');
    } else if (nota >= 7) {
        console.log('Sobresaliente');
    } else if (nota >= 6) {
        console.log('Aceptable');
    } else if (nota > 5) {
        console.log('Regular');
    } else {
        console.log('Insuficiente');
    }
}
notas()
*/
// tercer ejercicio condicionales
// responda correctamente las tres preguntas. Si se responde mal a cualquiera de
//ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
// Colon descubrió América?
// La independencia de Colombia fue en el año 1810?
// The Doors fue un grupo de rock Americano?

function preguntas(x, y, z) {
    var x = Math.round(Math.random() * 2);
    var y = Math.round(Math.random() * 2);
    var z = Math.round(Math.random() * 2);
    console.log('responde las siguientes preguntas');


    if (x == 1) {
        console.log('\n Colon descubrió América?');
        console.log('\n has respondido correctamente');

    }
    if (x == 1 && y == 1) {
        console.log('\n La independencia de Colombia fue en el año 1810?');
        console.log('\n has respondido correctamente');

    }
    if (x == 1 && y == 1 && z == 2) {
        console.log('\n The Doors fue un grupo de rock Americano?');
        console.log('\n has respondido correctamente');

    }
    if (x == 1 && y == 1 && z == 2) {
        console.log('\n has gando el juego');
    } else {
        console.log('has perdido')
    }
}
preguntas()


// responda correctamente las tres preguntas. Si se responde mal a cualquiera de
//ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
// Colon descubrió América?
// La independencia de Colombia fue en el año 1810?
// The Doors fue un grupo de rock Americano?

/*const preguntas = (x, y, z) => {
    var x = Math.round(Math.random() * 2);
    var y = Math.round(Math.random() * 2);
    var z = Math.round(Math.random() * 2);
    console.log('responde las siguientes preguntas');


    if (x == 1) {
        console.log('\n Colon descubrió América?');
        console.log('\n has respondido correctamente');

    }
    if (x == 1 && y == 1) {
        console.log('\n La independencia de Colombia fue en el año 1810?');
        console.log('\n has respondido correctamente');

    }
    if (x == 1 && y == 1 && z == 2) {
        console.log('\n The Doors fue un grupo de rock Americano?');
        console.log('\n has respondido correctamente');

    }
    if (x == 1 && y == 1 && z == 2) {
        console.log('\n has gando el juego');
    } else {
        console.log('has perdido')
    }
}
preguntas()
*/
// cuarto ejercicio condicionales
//Pida un numero al usuario que representa días del año. Diga a que mes del año
//corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
//Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
//cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.
function mes(n) {
    var n = Math.round(Math.random() * 365)
    console.log
    if (n <= 0) {
        console.log(n, '\n', " El numero no valido")
    } else if (n <= 31) {
        console.log(n, '\n', "El numero ingresado muestra el mes de Enero")
    } else if (n < 59) {
        console.log(n, '\n', "El numero ingresado muestra el mes de FEBRERO")
    } else if (n < 90) {
        console.log(n, '\n', "El numero ingresado muestra el mes de MARZO")
    } else if (n < 120) {
        console.log(n, '\n', "El numero ingresado muestra el mes de ABRIL")
    } else if (n < 151) {
        console.log(n, '\n', "El numero ingresado muestra el mes de MAYO")
    } else if (n < 181) {
        console.log(n, '\n', "El numero ingresado  muestra el mes de JUNIO")
    } else if (n < 212) {
        console.log(n, '\n', "El numero ingresado muestra el mes de JULIO")
    } else if (n < 243) {
        console.log(n, '\n', "El numero ingresado muestra el mes de AGOSTO")
    } else if (n < 270) {
        console.log(n, '\n', "El numero ingresado muestra el mes de SEPTIEMBRE")
    } else if (n < 304) {
        console.log(n, '\n', "El numero ingresado muestra el mes de OCTUBRE")
    } else if (n < 334) {
        console.log(n, '\n', "El numero ingresado muestra el mes de NOVIEMBRE")
    } else {
        console.log(n, '\n', "El numero ingresado muestra el mes de DIEMBRE")
    }
}
mes()
    //Pida un numero al usuario que representa días del año. Diga a que mes del año
    //corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
    //Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
    //cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.

/*const mes = (n) => {
    var n = Math.round(Math.random() * 365)
    console.log
    if (n <= 0) {
        console.log(n, '\n', " El numero no valido")
    } else if (n <= 31) {
        console.log(n, '\n', "El numero ingresado muestra el mes de Enero")
    } else if (n < 59) {
        console.log(n, '\n', "El numero ingresado muestra el mes de FEBRERO")
    } else if (n < 90) {
        console.log(n, '\n', "El numero ingresado muestra el mes de MARZO")
    } else if (n < 120) {
        console.log(n, '\n', "El numero ingresado muestra el mes de ABRIL")
    } else if (n < 151) {
        console.log(n, '\n', "El numero ingresado muestra el mes de MAYO")
    } else if (n < 181) {
        console.log(n, '\n', "El numero ingresado  muestra el mes de JUNIO")
    } else if (n < 212) {
        console.log(n, '\n', "El numero ingresado muestra el mes de JULIO")
    } else if (n < 243) {
        console.log(n, '\n', "El numero ingresado muestra el mes de AGOSTO")
    } else if (n < 270) {
        console.log(n, '\n', "El numero ingresado muestra el mes de SEPTIEMBRE")
    } else if (n < 304) {
        console.log(n, '\n', "El numero ingresado muestra el mes de OCTUBRE")
    } else if (n < 334) {
        console.log(n, '\n', "El numero ingresado muestra el mes de NOVIEMBRE")
    } else {
        console.log(n, '\n', "El numero ingresado muestra el mes de DIEMBRE")
    }
}
mes()*/

// quinto ejercicio condicionales
//Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:
//Si trabaja 40 horas o menos se le paga $2600 por hora
//Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
//horas y $5000 por cada hora extra
/*function salario(horastrabajadas) {
    var horastrabajadas = Math.round(Math.random() * 100);
    var horasextras = 0
    var total = 0
    console.log(`horas trabajadas ${horastrabajadas}`);
    if (horastrabajadas <= 40) {
        total = (horastrabajadas * 2600);
        console.log("Su sueldo es de $:" + total);
    } else {
        horasextras = (horastrabajadas - 40);
        total = (horasextras * 5000) + (40 * 2600);
        console.log("Su sueldo es de $:" + total);
    }
}
salario()

// Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:
//Si trabaja 40 horas o menos se le paga $2600 por hora
//Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
//horas y $5000 por cada hora extra

/*const salario = (horastrabajadas) => {
    var horastrabajadas = Math.round(Math.random() * 100);
    var horasextras = 0
    var total = 0
    console.log(`horas trabajadas ${horastrabajadas}`);
    if (horastrabajadas <= 40) {
        total = (horastrabajadas * 2600);
        console.log("Su sueldo es de $:" + total);
    } else {
        horasextras = (horastrabajadas - 40);
        total = (horasextras * 5000) + (40 * 2600);
        console.log("Su sueldo es de $:" + total);
    }
}
salario()



/// desviacion estandar 
//desviacion tipica
function desviacion() {
    let v = [],
        t = Math.round((Math.random() * 20 - 10) + 10),
        p = 0
    pf = 0
    d = 0
    sd = 0
    dt = 0
    console.log(`tamaño de la lista ` + t);

    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
        p = p + v[i]
    }
    pf = Math.trunc(p / v.length)
    console.log(v)
    for (let i = 0; i < v.length; i++) {
        d = Math.pow((v[i] - pf), 5)
        sd = sd + d
    }
    dt = sd / v.length
    return console.log('desviacion estandar  es: ' + dt)

}
desviacion()
*/
//desviacion con flecha
const desviacion = () => {
    let v = [],
        t = Math.round((Math.random() * 20 - 10) + 10),
        p = 0
    pf = 0
    d = 0
    sd = 0
    dt = 0
    console.log(`tamaño de la lista = ` + t);

    for (let i = 0; i < t; i++) {
        v[i] = Math.round(Math.random() * 100)
        p = p + v[i]
    }
    pf = Math.trunc(p / v.length)
    console.log(v)
    for (let i = 0; i < v.length; i++) {
        d = Math.pow((v[i] - pf), 2)
        sd = sd + d
    }
    dt = sd / v.length
    return console.log('desviacion estandar  es: ' + dt)

}
desviacion()



//  Definir una función para calcular la moda de un conjunto de números.
const moda = () => {
    let arreglo = [];
    let tam = (10);
    console.log(`tamaño de la lista: ${tam}`);
    for (let i = 0; i < tam; i++) {
        arreglo[i] = Math.round(Math.random() * 100);
    }
    let contador1 = 0,
        contador2 = 0;
    let moda;

    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length; j++) {
            if (arreglo[i] == arreglo[j] && i != j)
                contador1++;

        }
        if (contador1 > contador2) {
            contador2 = contador1;
            moda = arreglo[i];
        }
        contador1 = 0;

    }

    return console.log(`${arreglo}`, '\n la moda de la lista de numeros es: ', moda)
}
moda()

//  Definir una función para calcular la moda de un conjunto de números.

function moda() {
    let arreglo = [];
    let tam = (10);
    console.log(`tamaño de la lista: `, tam);

    for (let i = 0; i < tam; i++) {
        arreglo[i] = Math.round(Math.random() * 100);
    }


    let contador1 = 0,
        contador2 = 0;
    let moda;

    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] == arreglo[j] && i != j) contador1++;

        }
        if (contador1 > contador2) {
            contador2 = contador1;
            moda = arreglo[i];
        }
        contador1 = 0;

    }

    return console.log(`${arreglo}`, '\n\n la moda de la lista de numeros es: ', moda)
}
moda()

// mediana

/*MEDIANA numero del centro*/
/*
function medianaArr(arr1) {
    var concat = arr1;
    concat = concat.sort(
        function(a, b) { return a - b });

    console.log(concat);
    var length = concat.length;

    if (length % 2 == 0) {

        console.log(concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
    } else {
        console.log((concat[length / 2] +
            concat[(length / 2) - 1]) / 2);

        return (concat[length / 2] +
            concat[(length / 2) - 1]) / 2;
    }
}
arr1 = [1, 4, 5, 7, 9, 10, 11]
medianaArr()
*/
//.............................................................................................................
//PRUEBA 
//.............................................................................................................

/*escriba una funcion que llene un ARRAY CON N NUMEROS (N DEBE SER MINIMO 5 Y MAXIMO 25) */




function llenarArray(prueba) {
    tam = Math.round((Math.random() * 10 - 5) + 15)
    for (let i = 0; i < tam; i++) {
        prueba[i] = Math.round(Math.random() * 100);
    }
    return (prueba)
}
arreglo = []
llenarArray(arreglo)
console.log(arreglo)


function media(prueba) {
    var suma = 0
    for (let i = 0; i < prueba.length; i++) {
        suma = suma + prueba[i];
    }
    media = (suma / arreglo.length)
    return (media)
}
medias = media(arreglo);



console.log(medias)

function diferencias(array) {
    for (let i = 0; i < array.length; i++) {

    }
}
/* ESCRIBA UNA FUNCION QUE RECIBA EL ARRAY LLENO Y RETORNE OTRO ARREGLO CON LA DIFERENCIA 
QUE HAY ENTRE EL VALOR DE CADA ELEMENTO Y LA MEDIA DEL ARREGLO */


/* ESCRIBA UNA FUNCION QUE RECIBA EL ARREGLO CON LAS DIFERENCIAS DEL PUNTO ANTERIOR Y DIGA DE CADA UNO 
CUANTO LE FALTA O CUANTO LE SOBRA SEGUN EL CASO CON REFERENCIA A LA MEDIA */