function llenaArreglo(vec){
    for (let i = 0; i < 10; i++) {
        vec[i]=Math.round(Math.random()*100)    
        }
        return vec;
    }
let vector=[]
llenaArreglo(vector);
//console.log(vector);

function trabajoArreglos(cb1,cb2,vec){
    let vec1=[]
    vec1=vec;
        console.log(cb1(vec1))
        setTimeout(() => {
        console.log(vec1)
    }, 2000);

    console.log(cb2(vec1));
    }
    
    // function cualquierFunction(vec){
    //     console.log(`El parametro es de tipo ${typeof(vec)}`)
    //     return [];
    // }
    
    
    function sumarArreglo(vec){
        let suma=0
        for (let i = 0; i < vec.length; i++) {
            suma+=vec[i];
        }
           return suma;
    }
    
    function promedioArreglo(vec){
        suma=0;
        for (let i = 0; i < vec.length; i++) {
            suma+=vec[i];            
        }
        return suma/vec.length;
    }
    
    trabajoArreglos(sumarArreglo,promedioArreglo,vector);