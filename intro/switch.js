/*Genrere aleatorimente un valor entre 0 y 100000
aplique 4 tipos de descuento según el estrato social
El estrato también encuentrelo aleatoriamente

estrato 1:50%
estrato 2 40%
estrato 3:30%
estrato 4:20%
estrato 5:10%
estrato 6:5%
En 15 minutos reviso el ejercicio*/

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