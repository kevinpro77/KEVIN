let count = 0;
let vector12 = [],
    tamaño8 = Math.round((Math.random() * 20 - 15) + 10)
for (let i = 0; i < tamaño8; i++) {
    vector12[i] = Math.round(Math.random() * 100)
}
console.log(vector12)
for (let i = 0; i < vector12.length; i++) {
    if (vector12[i] % 2 == 0) {
        count = count = i;
        console.log(`${vector12[i]} es par`)
    } else {
        console.log(`${vector12[i]} es impar`)
    }
}
console.log('La cantidad de  numeros pares son' + count)




/*let count = 0;
let vector12 = [],
    tamaño8 = Math.round((Math.random() * 20 - 15) + 95)
for (let i = 0; i < tamaño8; i++) {
    vector12[i] = Math.round(Math.random() * 100)
}



let count = 0;
let vector12 = [],
    tamaño8 = Math.round((Math.random() * 20 - 15) + 95)
for (let i = 0; i < tamaño8; i++) {
    vector12[i] = Math.round(Math.random() * 100)
}*/