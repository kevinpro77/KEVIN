async function receptora(cb1, cb2, parametro) {
    return new Promise((resolve, reject) => {
        resolve()
        cb1();
        setTimeout(() => {
            console.log('Dentro de la función receptora')
        }, 4000);
        cb2(parametro)
    })
}
receptora()
    .then(() => {
        console.log('Función anónima'), funcionArgumento, 100;
    })

function funcionArgumento(parametro) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`${parametro} de la función argumento`)
        }, 5000);
    })

}
receptora(() => console.log('Función anónima'), funcionArgumento, 100);