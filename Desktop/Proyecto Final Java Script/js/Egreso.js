import {Dato} from "./Dato.js"
export  class Egreso extends Dato {
    static contador=0;
    constructor(descripcion,valor){
        super(descripcion,valor);
        Egreso.contador++;
       this._id=Egreso.contador
    }
    get id(){
        return this._id;
    }
    
}