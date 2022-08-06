// 
var num;
while (num != 1) {
    num = Math.round(Math.random() * (20 - 1) + 1);
    console.log(num)

}

var n = parseInt(num);
var introduce = prompt("Escribe un número");
var numeros;

for (numeros = 2; numeros < introduce / 2; numeros++) {
    if (introduce % numeros === 0) {
        console.log(numeros, " lo divide ");
    }
}

let num = parseInt('ingresa un numero');
console.log(num)