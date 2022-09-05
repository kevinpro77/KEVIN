class Persona{
    #nombre
    constructor(nombre){
        this.#nombre=nombre;
    }
    get nombre(){
        return this.#nombre
    }
}
let objecto = new Persona ('Kevin');
console.log(objecto.nombre)