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


class Compra {

    constructor({ producto, precio, cantidad }) {
        this.producto = producto;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    calcularTotalMasIva() {
        let iva = 0.21
        let costeTotal = this.precio * this.cantidad;
        console.log(costeTotal)
        let pagarConIva = (costeTotal * iva) + costeTotal;
        console.log(`El precio final a pagar con IVA es ${pagarConIva}$.`)
        
    }

    realizarPago() {  

        return new Promise( (resolve, reject) => {

            const pagoExitoso = Math.random() < 0.8
            if (pagoExitoso) {
                resolve(`El pago fue realizado.Gracias por su compra.`)
            }else{
                reject(`ERROR!!!Operacion cancelada.`)
            }
            return pagoExitoso;
        }); 
    }

    procesarEnvio() {
        return new Promise ( ( resolve, reject ) => {
            const envioExitoso = Math.random() < 0.9

            if ( envioExitoso){
                resolve(`El envio esta hecho.`)
            }else{
                reject()
            }
        })
    }

};

const nuevaCompra1 = new Compra(datosComra1);
const nuevaCompra2 = new Compra(datosComra2);

nuevaCompra1.calcularTotalMasIva();
nuevaCompra2.calcularTotalMasIva();

nuevaCompra1.realizarPago()
    .then( mensaje => {
        console.log( mensaje)
        return nuevaCompra1.procesarEnvio()
    })
    .then( mensajeEnvio => console.log( mensajeEnvio))
    .catch( error => {
        console.log(error)
        console.log( 'La compra ha sido cancelada')
    })

nuevaCompra2.realizarPago()
    .then( mensaje => {
        console.log( mensaje)
        return nuevaCompra1.procesarEnvio()
    })
    .then( mensajeEnvio => console.log( mensajeEnvio))
    .catch( error => {
        console.log(error)
        console.log( 'La compra ha sido cancelada')
    })    

    
    