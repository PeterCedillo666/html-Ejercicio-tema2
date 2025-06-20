export class Dato{
    constructor(descripcion, valor){
        this.descripcion = descripcion;
        this.valor = valor;
    }
    getDescripcion(){
        return this.descripcion;
    }
    setDescripcion(val){
        this.descripcion = val;
    }
    getValor(){
        return this.valor;
    }
    setValor(val){
        this.valor = val;
    }
}