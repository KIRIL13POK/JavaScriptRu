class Compra {

    constructor({ producto, cantidad, precio }) {
        this.producto = producto;
        this.cantidad = cantidad;
        this.precio = precio;
    }
    calcularTotal() {
        let precioTotal = this.cantidad * this.precio
        console.log(`En este momeno el valor de su compra es ${precioTotal}$`);
        return precioTotal;
    }
    realizarPago() {
        return new Promise((resolve, reject) => {

            const exitoPago = Math.random() < 0.8;


            if (exitoPago) {
                resolve(`La compra esta realizada con exito.`)
            } else {
                reject(`Error, OPERACION CANCELADA!!!`)
            }
        })
    }
};
const datosComra1 = {
    producto: 'Television',
    cantidad: 4,
    precio: 350
}
const datosComra2 = {
    producto: 'Plancha',
    cantidad: 13,
    precio: 50
}

const nuevaCompra1 = new Compra(datosComra1);

nuevaCompra1.calcularTotal();
nuevaCompra1.realizarPago()
    .then(mensaje => console.log(mensaje))
    .catch(mensajeError => console.log(mensajeError))
    
    
const nuevaCompra2 = new Compra(datosComra2);
nuevaCompra2.calcularTotal();
nuevaCompra2.realizarPago()
    .then(mensaje => console.log(mensaje))
    .catch(mensajeError => console.log(mensajeError))

