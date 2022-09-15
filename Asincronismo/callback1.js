function receptora(cb1,cb2,parametro){ 
    cb1();  
    setTimeout(() => {        
        console.log('Dentro de la función receptora')         
    }, 0); 
    cb2(parametro)   
    
}
function funcionArgumento(parametro){
    console.log(`${parametro} de la función argumento`);
}

receptora(()=>console.log('Función anónima'),funcionArgumento,100);

