/*function general(cadena) {
    cadena.toLowerCase;

}

var mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function contarMayusculas(cadena) {
    var contar = 0;
    for (var i = 0; i < mayusculas.length; i++) {
        for (var x = 0; x < cadena.length; x++) {
            if (cadena[x] == mayusculas[i]) {
                contar += 1;
            }
        }
    }
    return contar;
}
console.log((contarMayusculas('GENERAL')));*/



function general(cb1, cb2, vec) {
    mayor = vec.toUpperCase()
    menor = vec.toLowerCase()
    mayusculas = cb1(vec)
    minusculas = cb2(vec)
    console.log(`la cadena de texto tiene  ${mayusculas} mayusculas y ${minusculas} minusculos`)
    console.log(mayor)
    console.log(menor)
    console.log(vec)
}

function contarmayusculas(vec) {
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    m = 0
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] == mayus[i] && vec[i] != minus[i]) {
            m++
        }
    }
    return m
}

function contarminusculas(vec) {
    mayus = vec.toUpperCase()
    minus = vec.toLowerCase()
    m = 0
    for (let i = 0; i < vec.length; i++) {
        if (vec[i] != mayus[i] && vec[i] == minus[i]) {
            m++
        }
    }
    return m
}
general(contarmayusculas, contarminusculas, 'Hola COMO Estas')



/*////////////////*/

contador1 = 0
contador2 = 0
mayusculas = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
minusculas = 'abcdefghijklmñopqrstuvwxyz'

function general(cb1, cb2, string) {
    cb1(string)
    cb2(string)
    cb1 = string.toLowerCase()
    cb2 = string.toUpperCase()

    setTimeout(() => {
        console.log(cb1)
    }, 3000);
    setTimeout(() => {
        console.log(cb2)
    }, 5000);
    setTimeout(() => {
        console.log(string)
    }, 7000);

}
general()


///////////////////////////////////////////////////////////////////////