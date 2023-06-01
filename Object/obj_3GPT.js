/*
    -1-Agregar una tarea: Implementa un método para agregar una tarea al gestor. Cada tarea debe tener un nombre, una descripción y un estado (completa o incompleta).
    -2-Marcar una tarea como completa: Crea un método para marcar una tarea existente como completa.
    -3-Obtener la lista de tareas: Implementa un método para obtener la lista completa de tareas almacenadas en el gestor.
    -4-Filtrar tareas por estado: Crea un método que permita filtrar las tareas según su estado (completa o incompleta).
    -5-Contar tareas completas: Implementa un método que cuente el número de tareas completas almacenadas en el gestor.

*/




const gestorTareas = {
    listaDeTareas: [],

    agregarTarea(nombre, descripcion, estado) {
        let tarea = {
            nombre: nombre,
            descripcion: descripcion,
            estado: estado || null
        };

        this.listaDeTareas.push(tarea);

    },


    marcarUnaTareaCompleta(nombreTarea) {
        const tarea = this.listaDeTareas.find(t => t.nombre === nombreTarea)/*?.nombre*/
        if (tarea) {
            tarea.estado = 'completa'
            console.log(`El estado de la tarea es ${tarea.estado}`)
        } else {
            console.log(`No se encontró la tarea "${nombreTarea}".`);
        }
    },

    obtenerLaListaCompleta() {
        if (this.listaDeTareas.length === 0) {
            console.log('LA LISTA DE TAREAS ESTÁ VACÍA. NO HAY TAREAS POR MOSTRAR.');
        } else {
            const listaCompletaJSON = JSON.stringify(this.listaDeTareas, null, 2);
            console.log(`En estos momentos, la lista de tareas está en este estado: ${listaCompletaJSON}`);

        }
    }
};

gestorTareas.agregarTarea('Acabar ejercicio', 'Practicando Object', 'Echo el primer punto');
gestorTareas.agregarTarea('Revisar cómo funciona el método "obtenerLaListaCompleta"', 'Practicando Object', 'Echo el tercer punto');

gestorTareas.obtenerLaListaCompleta();
gestorTareas.marcarUnaTareaCompleta('Revisar cómo funciona el método "obtenerLaListaCompleta"')





