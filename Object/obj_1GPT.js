class Estudiante {
    constructor({nombre, edad,grado}){
        this.nombre   = nombre
        this.edad     = edad
        this.grado    = grado
        this.materias = []
    }
    agregarMateria(materia){
        this.materias.push(materia);
    }
    eliminarMateria(materia){
        this.materias.pop(materia);

    }
    obtenerPromedio()
    
}