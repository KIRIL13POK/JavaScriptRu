/*
Vamos a simular la gestión de una tienda de productos electrónicos utilizando clases en JavaScript. Crea una clase llamada Producto que tenga las siguientes propiedades: nombre, precio y cantidad. Luego, crea una clase llamada Tienda que tenga un array de objetos Producto como propiedad. La clase Tienda debe tener un método llamado calcularTotalVentas que utilice el método reduce para calcular el total de ventas de la tienda.
*/

class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre,
            this.precio = precio,
            this.cantidad = cantidad
    }
}

class Tienda {
    constructor() {
        this.productos = [];

    }

    agregarProducto(objetoNuevo) {
        this.productos.push(objetoNuevo)
    }

    calcularTotalVentas() {
        const totalVentas = this.productos.reduce((acumulador, { precio, cantidad }) => {
            return acumulador + (precio *cantidad)
        },0);
        return totalVentas

    }

}

const televisor = new Producto('LG', 650, 15);

const telefono = new Producto('Samsung', 350, 45);

const miPrimeraTienda = new Tienda();
miPrimeraTienda.agregarProducto(televisor)
console.log(miPrimeraTienda)
console.log(miPrimeraTienda.calcularTotalVentas())
miPrimeraTienda.agregarProducto(telefono)
console.log(miPrimeraTienda)
console.log(miPrimeraTienda.calcularTotalVentas())


/* 
Ejercicio: Calculadora de gastos mensuales
Descripción:
Vamos a crear una calculadora de gastos mensuales utilizando clases en JavaScript. Crea una clase llamada Gasto que tenga las siguientes propiedades: nombre, categoria y monto. Luego, crea una clase llamada CalculadoraGastos que tenga un array de objetos Gasto como propiedad. La clase CalculadoraGastos debe tener los siguientes métodos:
    -agregarGasto(gasto): agrega un objeto Gasto al array de gastos.
    -calcularTotalGastos(): utiliza el método reduce para calcular el total de gastos.
    -filtrarGastosPorCategoria(categoria): utiliza el método filter para obtener un array de gastos que pertenezcan a una categoría específica.
    -obtenerGastosMayoresA(monto): utiliza el método filter para obtener un array de gastos cuyo monto sea mayor a un valor dado.
*/

class Gasto {

    constructor(nombre,categoria , monto){
        this.nombre = nombre
        this.categoria = categoria
        this.monto = monto

    }
}

class CalculadoraGastos {

    constructor(){
        this.gastos = [];
    }

    agregarGasto(...gasto){
        this.gastos.push(...gasto)
    }

    calcularTotalGastos(){

       const totalGastos = this.gastos.reduce( ( acumulador , {monto}) => {
            return acumulador + monto
        },0)
        return totalGastos
    }

    filtrarGastosPorCategoria(categoria){

        const gastosFiltrados = this.gastos.filter( gasto => {
            return gasto.categoria === categoria;
        });

        return gastosFiltrados;
    }

    obtenerGastosMayoresA(monto){
        const gastoMayor = this.gastos.filter ( gasto => {
            return gasto.monto > monto;
        });
        return gastoMayor;
    }

    gastosDeMenos_A_Mas(){
       const motosDeMenos_A_Mas = this.gastos.map( gasto => {
        return gasto.monto
       }).sort((a,b) => a-b);

       return motosDeMenos_A_Mas;
        
    }



}

const gasto1 = new Gasto('Compra de alimentos', 'Urgente', 100);
const gasto2 = new Gasto('Pago de factura', 'Leve', 50);
const gasto3 = new Gasto('Renovación de suscripción', 'Leve', 20);
const gasto4 = new Gasto('Compras online', 'Urgente', 80);
const gasto5 = new Gasto('Mantenimiento del vehículo', 'Urgente', 150)

const gastosPrimerTrimestre = new CalculadoraGastos();
gastosPrimerTrimestre.agregarGasto(gasto1,gasto2,gasto3,gasto4,gasto5)
console.log(gastosPrimerTrimestre)
console.log(gastosPrimerTrimestre.gastos.length)
console.log(gastosPrimerTrimestre.calcularTotalGastos())
console.log(gastosPrimerTrimestre.filtrarGastosPorCategoria('Leve'))
console.log(gastosPrimerTrimestre.gastosDeMenos_A_Mas())





















