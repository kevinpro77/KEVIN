// uso de variables

/*var nombre = 'Grover';
console.log(nombre);
console.log(typeof(nombre)); 

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad = 'cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.999
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);
puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
**********************/


/*****************
 * Operadores Matematicos
 */

/* var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, YearAna, yearMaria, yearActual;

edadAna = 34;
edadMaria = 28;
yearActual = 2022;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nacio Ana  ' + yearAna);
console.log('Año en que nacio Maria  ' + yearMaria);

console.log(yearActual * 5);
console.log(yearActual / 2); */

/***
 * Operadores logicos, unarios y de asignacion
 */

// Logicos <> <= >= ==

var edadAna, edadMaria, diferenciaEdad;
var sumaEdades, YearAna, yearMaria, yearActual;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento

//edadAna++
console.log(++edadAna);
console.log(edadAna);

//Asignacion, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5; //Residuo o resto de una division
console.log(c);
a += b;
console.log(a);