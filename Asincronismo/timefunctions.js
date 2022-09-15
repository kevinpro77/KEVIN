function externa(){
    console.log('Función externa al setTimeOut')
}
const funcionExt=()=>{
    console.log('Función externa flecha')
}
setTimeout(() => {
    console.log('Yo amo Soacha');
}, 2000);

setTimeout(function(){
    console.log('Función Clásica')
},3000)

setTimeout(externa,5000);
setTimeout(funcionExt, 6000);

setInterval(() => {
    console.log('se repite')
}, 3000);

let timerId = setInterval(() => console.log('Amo el SENA'), 2000);

// después de 7 segundos parar
setTimeout(() => { 
    clearInterval(timerId);
   // console.log('stop');
    }, 7000);


    for (let i = 0; i < 10; i++) {        
        setTimeout(() => {
            console.log(i);    
        }, (i*1000));
        
    }