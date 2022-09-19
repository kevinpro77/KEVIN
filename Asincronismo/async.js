function resolver() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolver');
        }, 2000);
    });
}

async function llamar() {
    console.log('llamar funcion');
    const result = await resolver(); // resolver despues de dos segundos
    console.log(result);
    // expected output: "resolved"
}

llamar();