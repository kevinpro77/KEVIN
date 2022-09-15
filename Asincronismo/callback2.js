

function trabajoArreglos(cb1,cb2){
let vec=[]
    setTimeout(() => {
    console.log(vec)
}, 1000);
vec=cb1(vec);
console.log(cb2(vec));
}

// function cualquierFunction(vec){
//     console.log(`El parametro es de tipo ${typeof(vec)}`)
//     return [];
// }

function llenaArreglo(vec){
for (let i = 0; i < 10; i++) {
    vec[i]=Math.round(Math.random()*100)    
    }
    return vec;
}
function sumarArreglo(vec){
    let suma=0
    for (let i = 0; i < vec.length; i++) {
        suma+=vec[i];
    }
       return suma;
}   

trabajoArreglos(llenaArreglo,sumarArreglo);