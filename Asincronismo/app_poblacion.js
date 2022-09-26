//1. Generar la poblacion aleatoriamente entre 1.000 y 10.000 y con esa poblacion hacer un calculo del crecimiento de la ploblacion  en 20 años

function pobla_Aleatoria() {
    let N = (Math.round(Math.random() * 9000) + 1000)
    console.log(N)
    cont = 0
    let r = .3
    for (let t = 0; t < 20; t++) {
        var result = N * (1 + r) ** t
        cont = cont + 1
        console.log('contador: ', cont, '\n poblacion total ', result)
    }


}

pobla_Aleatoria()





/////////////////////////////////////////////////////


//segundo ejercicio


function poblacion() {
    let N = (Math.round(Math.random() * 9000) + 1000)
    let remplazo = 0
    console.log(N)
    for (let t = 0; t < 20; t++) {
        let nacimiento = (Math.round(Math.random() * 9) + 1)
        result1 = N * nacimiento / 100
        console.log('el resultado de nacimientos es:  ', result1)
        let muerte = (Math.round(Math.random() * 2) + 1)
        result2 = N * muerte / 100
        console.log('el resultado de muertes es:  ', result2)
        let r = nacimiento - muerte / N
        console.log('Tasa de crecimiento es:  ', r)
        let pf = N * (1 + r) ** t
        console.log('la poblacion final es: ', pf)

        remplazo = pf
    }
    return remplazo
}

poblacion();



function casa() {
    let = calcular = 0
    return casa = new Promise((resolve) => {
        calcular = poblacion() * 0.10
        setTimeout(() => {
            resolve(calcular)
        }, 5000);
    })
}
async function salida() {
    const suma = await casa()
    console.log('----------------------------------------------------------------------')
    console.log('la poblacion por el 10% es: ' + suma)
}
salida()