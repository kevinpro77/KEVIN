/*function saludar() {
    console.log('saludar')
}
saludar();


function saludar(nombre) {
    console.log('saludar')
}
saludar();*/

// saber si un numero es perfecto 
/*function perfecto(num) {
    let suma = 0
    for (let i = 01; i < num; i++) {
        if (num % i == 0) {
            suma = suma + i //suma +=i
        }
    }
    if (suma == num) {
        return `${num} Es perfecto`;
    } else {
        return `${num} No es perfecto`;
    }

}
console.log(perfecto(25)); */

//escriba una funcion que dado tres lados diga que tipo de triangulo
// equilatero
// isoceles 
// escaleno


/*function triangulo(a, b, c) {
    if (a == b == c)
        console.log('\n Es un triangulo Equilatero');
    else if (a == b || a == c || b == c)
        console.log('\n Es un triangulo Isosceles');
    else
        console.log('\n Es un triangulo Escaleno');

    return 0;
}
triangulo(4, 4, 1);*/



// funcion para resolver el teorema de pitagoras

/*function Hipotenusa(cateto1, cateto2) {
    return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
}
console.log(Hipotenusa(6, 10));*/


// Determinar si un numero es primo
/*
function primo(n) {
    for (var i = 2; i < n; i++) {
        if (n % i == 0) {
            return console.log(` El numero ${n} No es primo`)
        }
    }
    return console.log(` El numero ${n} Es primo`)
}
primo(11);*/

// saber si un numero es perfecto 

/*function perfecto(num) {
    let suma = 0
    for (let i = 01; i < num; i++) {
        if (num % i == 0) {
            suma = suma + i //suma +=i
        }
    }
    if (suma == num) {
        return `${num} Es perfecto`;
    } else {
        return `${num} No es perfecto`;
    }

}
console.log(perfecto(25)); */


//Calcular la operación xn sin utilizar la función pow */
/*function operacion(n, x) {
    for (var i = 1; i <= n; i++) {
        x = x * x
    }
    return console.log(Math.trunc(x))
}
operacion(2, 4)*/



//Determinar cuales son los múltiplos de 5 comprendidos entre  y N.
/*function multiplos(n) {
    var n= 10
    for (var i = 1; i <= n; i++) {
        if (i % 5 == 0)
            return console.log(i);
    }
}
multiplos()




var n = Math.round(Math.random() * 100)
console.log('los numeros multiplos de 5 son:')
for (var i = 1; i <= n; i++) {
    if (i % 5 == 0)
        console.log(i);

}*/