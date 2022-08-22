/*console.log("Me apasiona el desarrollo de software");
var x = 100;
var y = 200;
console.log(`${x} + ${y} = ${x+y}`);
//Ejemplo let, var y const
var a = 100;
let b = 20;
const c = 1;
console.log(`Valor de a= ${a}`);
console.log(`Valor de b= ${b}`);
console.log(`Valor de c= ${c}`);
//Cambio de valores
a = "cambio de numero por texto";
b = 4, 6;
//c=12; //no se puede porque c es const
console.log(`Valor de a= ${a}`);
console.log(`Valor de b= ${b}`);
console.log(`Valor de c= ${c}`); */


function moda() {
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