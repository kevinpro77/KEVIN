//1.Pedir 3 numeros e indicar cual de ellos es el valor del medio. Ej 11, 2 1000, el valor del medio es 11.
let numero1 = Math.round(Math.random() * 100)
let numero2 = Math.round(Math.random() * 100)
let numero3 = Math.round(Math.random() * 100)
console.log(numero1 + ' ' + numero2 + ' ' + numero3)
if (numero1 > numero2) {
    if (numero1 > numero3) {
        if (numero2 > numero3) {
            console.log(`El del medio es ${numero2}`)
        } else {
            console.log(`El del medio es ${numero3}`)
        }
    } else {
        console.log(`El del medio es ${numero1}`)
    }
} else {
    if (numero2 > numero3) {
        if (numero1 > numero3) {
            console.log(`El del medio es ${numero1}`)
        } else {
            console.log(`El del medio es ${numero3}`)
        }
    } else {
        console.log(`El del medio es ${numero2}`)
    }
}
//2.Escribe un programa que pida tres números y que escriba si son los tres iguales, si hay dos iguales o si son los tres distintos
let n1 = Math.round(Math.random() * 100)
let n2 = Math.round(Math.random() * 100)
let n3 = Math.round(Math.random() * 100)
console.log('                                              ')
console.log(n1 + ' ' + n2 + ' ' + n3)
console.log('                                              ')

if (n2 == n3 && n1 == n2 && n1 == n3)
    console.log(` los tres numeros son iguales `)
else if (n1 == n2)
    console.log(`Los dos numeros son iguales  `);
else if (n1 == n3)
    console.log(`Los dos numeros son iguales  `)
else if (n2 == n3)
    console.log(`Los dos numeros son iguales  `)
else if (n2 != n3 && n1 != n2 && n1 != n3)
    console.log(` los tres numeros son distintos `)


//3Pedir un número entre 0 y 9.999 y decir cuantas cifras tiene. Cuando el número exceda los límites emita un mensaje y finalice el programa


var numero = Math.round(Math.random() * 9999)
console.log(numero)
if (numero < 10)
    console.log('El numero tiene 1 cifra')
else if (numero < 100)
    console.log('El numero tiene 2 cifras')
else if (numero < 1000)
    console.log('El numero tiene 3 cifras')
else if (numero < 10000)
    console.log('El numero tiene  4 cifras')



// 4. Pedir una nota de 0 a 10 y mostrarla de la forma: Insuficiente, Suficiente, Bien,
//etc. Use la escala que prefiera, pero cerciórese que tiene 5 valores

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


// 5. responda correctamente las tres preguntas. Si se responde mal a cualquiera de
//ellas ya no se pregunta la siguiente y termina el juego. Las preguntas son:
// Colon descubrió América?
// La independencia de Colombia fue en el año 1810?
// The Doors fue un grupo de rock Americano?



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




//6Pida un numero al usuario que representa días del año. Diga a que mes del año
//corresponde así. Si el número es menor o igual a 31 indica que esta en enero,
//Pero si el número por ejemplo es 32 indica que es el 1 de febrero. No tenga en
//cuenta si el año es bisiesto, es decir siempre febrero tiene 28 días.

var n = Math.round(Math.random() * 365)
console.log
if (n <= 0) {
    console.log(" El numero no valido")
} else if (n <= 31) {
    console.log("El numero ingresado muestra el mes de Enero")
} else if (n < 59) {
    console.log("El numero ingresado muestra el mes de FEBRERO")
} else if (n < 90) {
    console.log("El numero ingresado muestra el mes de MARZO")
} else if (n < 120) {
    console.log("El numero ingresado muestra el mes de ABRIL")
} else if (n < 151) {
    console.log("El numero ingresado muestra el mes de MAYO")
} else if (n < 181) {
    console.log("El numero ingresado muestra el mes de JUNIO")
} else if (n < 212) {
    console.log("El numero ingresado muestra el mes de JULIO")
} else if (n < 243) {
    console.log("El numero ingresado muestra el mes de AGOSTO")
} else if (n < 270) {
    console.log("El numero ingresado muestra el mes de SEPTIEMBRE")
} else if (n < 304) {
    console.log("El numero ingresado muestra el mes de OCTUBRE")
} else if (n < 334) {
    console.log("El numero ingresado muestra el mes de NOVIEMBRE")
} else {
    console.log("El numero ingresado muestra el mes de DIEMBRE")
}



//7  Un obrero necesita calcular su salario semanal, el cual se obtiene de la sig.manera:
//Si trabaja 40 horas o menos se le paga $2600 por hora
//Si trabaja más de 40 horas se le paga $2600 por cada una de las primeras 40
//horas y $5000 por cada hora extra

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

//8. Telefónica realiza los cálculos del costo de una llamada de teléfono siguiendo
//los cálculos así:
//Cuando se descuelga el teléfono los primeros 3 minutos (banderazo) cuestan
//200 pesos y cada minuto adicional cuesta 50 pesos. Escriba un programa que
//permita calcular el costo de una llamada dados los minutos de duración.

var minutos = Math.round(Math.random() * 100);
var adicional = 0
var total = 0
if (minutos > 0) {
    if (minutos <= 3) {
        total = (minutos * 200);
    } else
        (adicional = minutos - 3);
    total = (600 + adicional * 50);

    console.log(`\n duracion de llamada ${minutos} minutos \n  pagas un total de  ${total} pesos`)

}

//9 Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
//ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es  posterior
var d = Math.round(Math.random() * 31)
var m = Math.round(Math.random() * 12)
var a = Math.round(Math.random() * 2000)

dd = d - 1
mm = m - 1
aa = 2022 - a

console.log('el dia es: ', d, 'el mes es: ', m, 'el año es: ', a)
console.log('en dias es', dd, 'la reste del mes es: ', mm, 'la resta del año: ', aa);

//10 Solicite una fecha al usuario. en formato día, mes y año. Dígale cuanto tiempo
// ha pasado desde esa fecha hasta hoy o cuanto falta para llegar a esa fecha si es posterior
var h = Math.round(Math.random(1) * 24)
console.log(h)
var m = Math.round(Math.random(1) * 60)
console.log(m)
var s = Math.round(Math.random(1) * 60)
console.log(s)

var s = s + 1
console.log(s)
if (m > 59) {
    var m = 0
}
if (h > 23) {
    var h1 = 1
}
if (m > 59) {
    var s = 0
    var m = m + 1
} else if (m > 59) {
    var m = 0
    var h = h + 1
} else {
    console.log(h, m, s)
}


//11. Escribir un algoritmo que pida un valor entero que equivale a una cantidad de
//DINERO y calcule a cuantos billetes de 50.000, 20.000, 10.000, 5.000, 2.000, y
//1.000 equivalen. Si el usuario digita 282000 el programa debe responder cinco
//billetes de 50.000, un billete de veinte mil, un billete de diez mil, un billete de dos mil.

var d = Math.round(Math.random() * 100000)
console.log(+d)
i = 0
ii = 0
iii = 0
iv = 0
v = 0
vi = 0
if (d >= 50000) {
    i = Math.round(d / 50000)
    d = d - (i * 50000)
    console.log('Hay', +i, 'billetes de 50000')
} else {
    console.log('no hay ningun billete de 50000')
}
if (d >= 20000) {
    ii = Math.round(d / 20000)
    d = d - (ii * 20000)
    console.log('Hay', +ii, 'billetes de 20000')
} else {
    console.log('no hay ningun billete de 20000')
}
if (d >= 10000) {
    iii = Math.round(d / 10000)
    d = d - (i * 10000)
    console.log('Hay', +iii, 'billetes de 10000')
} else {
    console.log('no hay ningun billete de 10000')
}
if (d >= 5000) {
    iv = Math.round(d / 5000)
    d = d - (iv * 5000)
    console.log('Hay', +iv, 'billetes de 5000')
} else {
    console.log('no hay ningun billete de 5000')
}
if (d >= 2000) {
    v = Math.round(d / 2000)
    d = d - (v * 2000)
    console.log('Hay', +v, 'billetes de 2000')
} else {
    console.log('no hay ningun billete de 2000')
}
if (d >= 1000) {
    vi = Math.round(d / 1000)
    d = d - (v * 1000)
    console.log('Hay', +vi, 'billetes de 5000')
} else {
    console.log('no hay ningun billete de 1000')
}


//12 Solicite la hora en formato horas, minutos y segundos. Imprima en pantalla la hora que será dentro de 1 segundo
var h = Math.round(Math.random(1) * 24)
console.log(h)
var m = Math.round(Math.random(1) * 60)
console.log(m)
var s = Math.round(Math.random(1) * 60)
console.log(s)

var s = s + 1
console.log(s)

if (m > 59) {

}
if (h > 23) {

}
if (s > 59) {
    m = m + 1
} else if (m > 59) {
    h = h + 1
} else {
    console.log('la hora es:', h, " ", m, " ", s, " ");
}


//13Solicite al usuario una cantidad numérica que expresa segundos (medida de
// tiempo). Exprésela (conviértala) en horas minutos y segundos. Según el caso

var ss = Math.round(Math.random() * 100000)
console.log(ss)
minuto = ss / 60
console.log(minuto)
hora = ss / 3600
console.log(hora)
console.log('el numero de segundos es: ', ss, 'el numero de minutos es: ', minuto, 'las horan son: ', hora);

//14 Solicite un Angulo al usuario en grados. Diga en que cuadrante está. Diga
//además en que vuelta está sabiendo que cada 360 grados se completa una
//vuelta a la circunferencia. Además diga el resultado en radianes.
var N1 = Math.round(Math.random() * 1000)
console.log(n1)

var v1 = N1 / 3
console.log(v1)
var v2 = N1 * 3
console.log(v2)

console.log('la base es: ', v1, 'la altura es: ', v1, 'la profundidad es: ', v1, )
console.log('el volumen del cubo es: ', v2, );


/*15.La fecha de Pascua corresponde al primer domingo después de la primera luna
llena que sigue al equinoccio de primavera, y se calcula con las siguientes
expresiones:
A= año MOD 19
B= año MOD 4
C= año MOD 7
D= (19*A+24) MOD 30
E= (2*B+4*C+6*D+5) MOD 7
N= (22+D+E)
En el que N indica el número de día del mes de marzo (o abril si N es superior a
31) correspondiente al domingo de Pascua. Realizar un programa que
determine esta fecha para un año ingresado por teclado.*/


var año = Math.round(Math.random() * 2022)
console.log(año)
A = año % 19
B = año % 4
C = año % 7
D = (19 * A + 24) % 30
E = (2 * B + 4 * C + 6 * D + 5) % 7
N = (22 + D + E)
console.log(N)
if (N <= 31) {
    console.log('esta en el mes de marzo', N)
} else {
    console.log('este en el mes de abril', N)
}