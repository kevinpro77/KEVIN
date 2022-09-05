const Aprendiz=require('./Aprendiz');
const Curso=require('./Curso');
let listado=[]

const cdf=new Curso('ADSI',2515397,listado);
console.log('recien creado....',cdf);
let a1=new Aprendiz('Miguel Perez',12345,2515397);
cdf.agregarAprendiz(a1);
console.log(cdf.lista);
cdf.generarAprendiz();
console.log(cdf.lista);
//delete cdf;
//console.log('recien eliminado....',cdf);