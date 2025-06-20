import {Ingreso} from "./Ingreso.js"
import {Egreso} from "./Egreso.js"



let egresos = [
    new Egreso("Renta departamento", 4000),
    new Egreso("Comida", 2000),
    new Egreso("Gasolina", 1000),
    new Egreso("Mensualidad Coche", 5000)
];
let ingresos = [
    new Ingreso("Salario", 12000),
    new Ingreso("Venta coche", 5000)
];

const totalEgresos =()=>{
    let totalEgresos= 0;
    totalEgresos= egresos.reduce((total, egreso) => total + egreso.valor, 0);
    return totalEgresos;
}
const totalIngresos =()=>{
    let totalIngresos= 0;
    totalIngresos =ingresos.reduce((total, ingreso) => total + ingreso.valor, 0);
    return totalIngresos;
}



const formatoMoneda =(e)=>{
    return e.toLocaleString('es-MX',{minimumFractionDigits:2});

}
const formatoPorcentaje =(e)=>{ 
    return e.toLocaleString('es-MX',{minimumFractionDigits:2,style:'percent'});
}
const cargarCabecero =()=>{
   
const presupuesto=totalIngresos()-totalEgresos();
const porcentajeEgreso=totalEgresos()/totalIngresos();

document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
document.getElementById("ingreso").innerHTML = formatoMoneda(totalIngresos());
document.getElementById("egreso").innerHTML = formatoMoneda(totalEgresos());
   
}
const crearIngresoHTML =(ingreso)=>{
    const ingresoHTML= ` <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">+ ${formatoMoneda(ingreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarIngreso(${ingreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>`
        return ingresoHTML
}
const cargarIngresos = () => {
    let ingresosHTML = "";
    for (let ingreso of ingresos) {
        ingresosHTML += crearIngresoHTML(ingreso);
    }
    document.querySelector(".lista_ingresos").innerHTML = ingresosHTML;
};
const crearEgresoHTML = (egreso) => {
    const egresoHTML= `
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso.descripcion}</div>
            <div class="derecha limpiarEstilos">
                <div class="elemento_valor">- ${formatoMoneda(egreso.valor)}</div>
                <div class="elemento_eliminar">
                    <button class="elemento_eliminar--btn" onclick="eliminarEgreso(${egreso.id})">
                        <ion-icon name="close-circle-outline"></ion-icon>
                    </button>
                </div>
            </div>
        </div>
    `;
    return egresoHTML;
};


const cargarEgresos = () => {
    let egresosHTML = "";
    for (let egreso of egresos) {
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.querySelector(".lista_egresos").innerHTML = egresosHTML;
};
const eliminarIngreso = (id) => {
    ingresos = ingresos.filter(ingreso => ingreso._id !== id);
    cargarCabecero();
    cargarIngresos();
};

const eliminarEgreso = (id) => {
    egresos = egresos.filter(egreso => egreso._id !== id);
    cargarCabecero();
    cargarEgresos();
};
const agregarDato = () => {
    let forma = document.getElementById("forma");
    let tipo = document.getElementById("tipo").value;
    let descripcion = document.getElementById("descripcion").value;
    let valor = parseFloat(document.querySelector(".agregar_valor").value);

    if (descripcion !== "" && valor > 0) {
        if (tipo === "ingreso") {
            ingresos.push(new Ingreso(descripcion, valor));
            cargarIngresos();
        } else {
            egresos.push(new Egreso(descripcion, valor));
            cargarEgresos();
        }
        cargarCabecero();
        forma.reset();
    }
};

function cargarApp(){
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}
window.cargarApp=cargarApp;
window.agregarDato = agregarDato;
window.eliminarIngreso = eliminarIngreso;
window.eliminarEgreso = eliminarEgreso;