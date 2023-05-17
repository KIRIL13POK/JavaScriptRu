
class CuentaBancaria {

    constructor(titular, saldo,){

        this.titular = titular;
        this.saldo = saldo;
    }

    depositar(masDinero){
        this.saldo = this.saldo + masDinero;
        console.log(`Su saldo es ${this.saldo}`)

   
    }

    retirar(menosDinero){
        if(menosDinero > this.saldo){
            console.log(`Operacion CANCELADA. Su saldo no es suficiente.`)
        }else{
            this.saldo = this.saldo - menosDinero;
            console.log(`Su saldo es ${this.saldo}`)
        }

    }

};


const CuentaBancariaJose = new CuentaBancaria('Jose', 3000);

CuentaBancariaJose.depositar(5500);
CuentaBancariaJose.retirar(100000);
CuentaBancariaJose.retirar(100);
