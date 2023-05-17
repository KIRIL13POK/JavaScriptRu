const primarcas = {
    Guilliman: {
        legion: "Ultramarines",
        lider: "Roboute Guilliman",
        armas: "Espada de energía, Bolter",
    },
    Sangunario: {
        legion: "Ángeles Sangrientos",
        lider: "Comandante Dante",
        armas: "Hoja Sanguinaria, Bolter de asalto",
    },
    Russ: {
        legion: "Cicatrices Blancas",
        lider: "Leman Russ",
        armas: "Hacha de energía, Bolter pesado",
    },
};

let primarcaArrEnArr = []
Object.values(primarcas).forEach( obj => {
    primarcaArrEnArr.push(Object.entries(obj)) 
    return primarcaArrEnArr
});


console.log(primarcaArrEnArr);
console.log(primarcaArrEnArr.length);
console.log(primarcaArrEnArr[0]);
console.log(primarcaArrEnArr[2][0]);

const [capitulo, nombre] = primarcaArrEnArr[2][0]
console.log(nombre);