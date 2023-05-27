const calculadora = {

    suma(a,b){
        return a + b;

    },
     
    resta(a,b){
        return a - b

    },

    multiplicación(a,b){
        return a * b

    },
    
    división(a,b){
        return a / b

    }

}


const GestorEmpleados = {

    lista : [],

    agregarEmpleado (nombre , salario ) {

    
        const empleado = {
            nombre, 
            salario
        }

        this.lista.push(empleado);
        return  this.lista

    },


    calcularSalarioPromedio (){

        if(this.lista.length === 0){
            console.log('La lista esta vacia no hay empleados para calcular promedio')
        }else{
            const totalSolario = this.lista.reduce( (suma, empleado) => suma + empleado.salario, 0 )
            return totalSolario / this.lista.length
        }
    },

    obtenerEmpleadoSalarioMaximo () {

        let salarioMasAlto = this.lista[0]
        for(let i = 1; i < this.lista.length; i++ ){
           if(this.lista[i].salario > salarioMasAlto.salario){
            salarioMasAlto = this.lista[i]
           }
        }
        return salarioMasAlto

    },

    obtenerNumeroEmpleados () {
        let cantidadDeEmpleados = this.lista.length
        return cantidadDeEmpleados;
    }

}


console.log(GestorEmpleados.agregarEmpleado('Kiril', 2500))
console.log(GestorEmpleados.agregarEmpleado('Porkrovskiy', 250000))


 console.log(GestorEmpleados.agregarEmpleado('Rosalia', 350000))
 console.log(GestorEmpleados.calcularSalarioPromedio())


 console.log(GestorEmpleados.obtenerEmpleadoSalarioMaximo())
 console.log(GestorEmpleados.obtenerNumeroEmpleados())

 console.log(GestorEmpleados.agregarEmpleado('Porkrovskii', 20000))






