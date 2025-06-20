import {Dato} from "./Dato.js"
export  class Ingreso extends Dato {
    static contador=0;
    constructor(descripcion,valor){
        super(descripcion,valor); 
        Ingreso.contador++;
        this._id=Ingreso.contador
    }
    get id(){
        return this._id;
    }
    
}