const tiendaVirtual = require("./tiendaVirtual") ;
const  Persona = require ("./Persona");
const login = require ("./Login");
const productotv = require ("./productotv");
const ventatv = require("./ventastv");


let tienda = new tiendaVirtual (454545,'Chopiie')
console.log (tienda)


let log = new login (454545,'Chopiie','Johan Marquez','123456789')
console.log (log)


let prov = new Persona(454545,'Chopiie','Johan Marquez','123456789','CC','1495656','Vanessa July','Rodriguez Rosio','f','rosariotijeras:D.@gmail.com','Cliente')
console.log(prov)

inventario = []
let Jean = new productotv (12345,'Jean','Levis',40000,20,2)
inventario.push (Jean)
console.log (inventario)
console.log (Jean)

let vent = new ventatv (12345,'Jean','Levis',40000,20,2,'5/09/2022')
console.log(vent,vent.resultadototal())




