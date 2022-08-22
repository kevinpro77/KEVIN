 let vector1 = [];
 vector1[0] = 100;
 vector1[1] = 50;
 vector1[2] = 'sena';
 vector1[4] = 30;
 console.log(vector1);
 console.log(typeof(vector1));

 //Otra forma de crear arreglos en JS

 let vec = new Array();
 vec[0] = 'yo';
 vec[1] = 'amo';
 vec[2] = 'programar';
 console.log(vec)
 vec[3] = [1, 2, 3]
 console.log(vec)

 let vector = [];
 let tam = Math.round((Math.random() * 20 - 10) + 10);
 console.log(`Valor de variable tam:${tam}`);

 for (let i = 0; i < tam; i++) {
     vector[i] = Math.round(Math.random() * 100);
 }
 console.log(vector);
 console.log(`Tamaño del vector:${vector.length}`);


 for (let i = 0; i < vector.length; i++) {
     if (vector[i] % 2 == 0) {
         console.log(`${vector[i]} es par`)
     } else {
         console.log(`${vector[i]} es impar`)
     }
 }

 let cuadrados = [];

 for (let i = 0; i < vector.length; i++) {
     cuadrados[i] = Math.pow(vector[i], 2);
 }
 console.log(cuadrados);





 //sumar todos los elementos de un arrglo 
 let vector2 = [],
     tamaño = Math.round((Math.random() * 20 - 10) + 10),
     suma = 0
 console.log('valor de variable tamaño: ' + tamaño)
 for (let i = 0; i < tamaño; i++) {
     vector2[i] = Math.round(Math.random() * 100)
 }
 console.log(vector2)
 for (let i = 0; i < vector2.length; i++) {
     suma = suma + vector2[i]
 }
 console.log(suma)

 //promediar los elementos de un arreglo 
 let vectorr = [],
     tam1 = Math.round((Math.random() * 20 - 10) + 10),
     suma1 = 0,
     promedio = 0
 console.log('valor de variable tam1: ' + tam1)
 for (let i = 0; i < tam1; i++) {
     vectorr[i] = Math.round(Math.random() * 100)
 }
 console.log(vectorr)
 for (let i = 0; i < vectorr.length; i++) {
     suma1 = suma1 + vectorr[i]
 }
 console.log('la suema es: ' + suma1)
 promedio = suma1 / vectorr.length
 console.log('el promedio es: ' + promedio)

 //obtener el numero mayor de los elemtos de un arreglo arreglo
 let v = [],
     t = Math.round((Math.random() * 20 - 10) + 10),
     m = 0
 console.log('valor de variable t: ' + t)
 for (let i = 0; i < t; i++) {
     v[i] = Math.round(Math.random() * 100)
     if (v[i] > m) {
         m = v[i]
     }
 }
 console.log(v)
 console.log('el numero mayor es: ' + m)

 //obtener el numero mayor de los elemtos de un arreglo arreglo
 let vector4 = [],
     tamaño4 = Math.round((Math.random() * 20 - 10) + 10),
     mayor = 100
 console.log('valor de variable tamaño: ' + tamaño4)
 for (let i = 0; i < tamaño4; i++) {
     vector4[i] = Math.round(Math.random() * 100)
     if (vector4[i] < mayor) {
         mayor = vector4[i]
     }
 }
 console.log(vector4)
 console.log('el numero menor es: ' + mayor)

 //buscar un elemento dentro de un arreglo
 let ve = [];
 let ta = Math.round((Math.random() * 20 - 10) + 10)
 console.log(`Valor variable tam= ${ta}`);

 for (let i = 0; i < ta; i++) {
     ve[i] = Math.round(Math.random() * 100)
 }
 console.log(ve)

 var x = Math.round((Math.random() * 20 - 10) + 10)
 if (x in ve) {
     console.log('El numero se encuentra en la lista ')
 } else {
     console.log('El numero no se encuentra en la lista ')
 }

 //ordenar un arrgelo de menor a mayor (algoritmo de la burbuja)
 let vector7 = [],
     tamaño2 = Math.round((Math.random() * 20 - 10) + 10)
 for (let i = 0; i < tamaño2; i++) {
     vector7[i] = Math.round(Math.random() * 100)
 }
 console.log(vector7)
 for (let i = 0; i < vector7.length; i++) {
     for (let j = i + 1; j < vector7.length; j++) {
         if (vector7[j] < vector7[i]) {
             /*[vector7[j], vector7[j + 1]] = [vector7[j + 1], vector7[j]];*/
             let a = vector7[i]
             vector7[i] = vector7[j]
             vector7[j] = a
         }
     }

 }
 console.log('ordenado: ' + vector7)


 //ordenar un arrgelo de mayor a menor (algoritmo de la burbuja) 
 let vector8 = [],
     tamaño3 = Math.round((Math.random() * 20 - 10) + 10)
 for (let i = 0; i < tamaño3; i++) {
     vector8[i] = Math.round(Math.random() * 100)
 }
 console.log(vector8)
 for (let i = 0; i < vector8.length; i++) {
     for (let j = i + 1; j < vector8.length; j++) {
         if (vector8[j] > vector8[i]) {
             let a = vector8[i]
             vector8[i] = vector8[j]
             vector8[j] = a
         }
     }

 }
 console.log('ordenado: ' + vector8)


 //  mediana
 let vector9 = [],
     tamaño5 = Math.round((Math.random() * 20 - 10) + 10)
 for (let i = 0; i < tamaño5; i++) {
     vector9[i] = Math.round(Math.random() * 100)
 }
 console.log(vector9)
 var double, total = 0
 double, total = 0;
 for (var i = 0; i < vector9.length; i++); {
     total += vector9[i];
 }
 console.log("La suma de todos los valores es: " + total);
 console.log("El promedio es: " + (total / vector9.length));