// primer ejercicio

//*
//* * 
//* * * 
//* * * * 
//* * * * *
//* * * * * * 

for (let i = 0; i <= 6; ++i) {
    let resultado = '';

    for (let j = 0; j <= i; ++j) {
        resultado += '* ';
    }

    console.log(resultado);
}

//segundo ejercicio
for (let i = 10; i >= 1; i--) {
    let resultado = '';

    for (let j = 0; j <= i; ++j) {
        resultado += '* ';
    }

    console.log(resultado);
}


//tercer ejercicio

for (let i = 1; i <= 6; i++) {

    let resultado = '';

    for (let j = 1; j <= i; j++) {
        resultado += j;
    }
    console.log(resultado);
}

//cuarto ejercicio 

for (let i = 10; i >= 1; i--) {

    let resultado = '';

    for (let j = 1; j <= i; j++) {
        resultado += j;
    }
    console.log(resultado);
}