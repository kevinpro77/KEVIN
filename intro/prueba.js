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







let vector1 = []
let vector2 = []
let vector3 = []
let mayor = 0
let mayor1 = 0
let mayor2 = 0
let tam1 = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam1)
for (let i = 0; i < tam1; i++) {
    vector1[i] = Math.round(Math.random() * 20)
}
console.log(vector1)
console.log('Tamaño de vector', +vector1.length);
for (i = 0; i < vector1.length; i++) {
    if (vector1[i] > mayor)
        mayor = vector1[i];
}

let tam2 = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam2)
for (let i = 0; i < tam2; i++) {
    vector2[i] = Math.round(Math.random() * 55)
}
console.log(vector2)
console.log('Tamaño de vector', +vector2.length);
for (i = 0; i < vector2.length; i++) {
    if (vector2[i] > mayor2)
        mayor2 = vector2[i];
}

let tam3 = Math.round((Math.random() * 20 - 10) + 10)
console.log('valor de variables tam:', +tam3)
for (let i = 0; i < tam2; i++) {
    vector3[i] = Math.round(Math.random() * 99)
}
console.log(vector3)
console.log('Tamaño de vector', +vector3.length);
for (i = 0; i < vector3.length; i++) {
    if (vector3[i] > mayor2)
        mayor2 = vector3[i];
}

console.log('el numero mayor es ', mayor, mayor1, mayor2)
console.log('el numero mayor es:', mayor2)

for (i = 0; i < vector1.length; i++) {
    for (i = 0; i < vector2.length; i++)
        for (i = 0; i < vector3.length; i++)
            if (vector1[i] % 2 == 0) {
                console.log(`${vector1[i]}es par`)
                console.log(`${vector2[i]}es par`)
                console.log(`${vector3[i]}es par`)
            } else {
                console.log(`${vector1[i]}es impar`)
                console.log(`${vector2[i]}es impar`)
                console.log(`${vector3[i]}es impar`)
            }
}