function trabajoArreglos(cb1, cb2) {
    return new Promise((resolve, reject) => {
        resolve()
        cb1();
        cb2();
        setTimeout(() => {
            let vec = []
            console.log(vec)
        }, 4000);
        vec = cb1(vec);
        console.log(cb2(vec));
    });
}
trabajoArreglos()
    .then(() => {
        console.log('trabajo arreglos'), trabajoArreglos
    })

function llenaArreglo(vec) {
    return new Promise((resolve, reject) => {
        resolve()
        cb1();
        setTimeout(() => {
            for (let i = 0; i < 10; i++) {
                vec[i] = Math.round(Math.random() * 100)
            }
            return vec;
        }, 4000);
    });
}
llenaArreglo()
    .then(() => {
        console.log('llenando arreglos'), llenaArreglo
    })


function sumarArreglo(vec) {
    return new Promise((resolve, reject) => {
        resolve()
        cb1();
        setTimeout(() => {
            let suma = 0
            for (let i = 0; i < vec.length; i++) {
                suma += vec[i];
            }
            return suma;
        }, 4000);
        cb2(parametro)
    });

}
sumarArreglo(trabajoArreglos)
    .then(() => {
        console.log('llenando arreglos', ), sumarArreglo
    })


trabajoArreglos(llenaArreglo, sumarArreglo);