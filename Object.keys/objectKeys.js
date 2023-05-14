const primarcas = {
    Guilliman: {
        capitulo: "Ultramarines",
        lider: "Roboute Guilliman",
        armas: "Espada de energía, Bolter",
    },
    Sangunario: {
        capitulo: "Ángeles Sangrientos",
        lider: "Comandante Dante",
        armas: "Hoja Sanguinaria, Bolter de asalto",
    },
    Russ: {
        capitulo: "Cicatrices Blancas",
        lider: "Leman Russ",
        armas: "Hacha de energía, Bolter pesado",
    },
};
const primarcasArr = [];
console.log(Object.keys(primarcas));// ==>[ 'Guilliman', 'Sangunario', 'Russ' ]
Object.keys(primarcas).forEach(pr => {
    console.log(pr)
    /*==> 
    Guilliman
    Sangunario
    Russ
    */
});
Object.keys(primarcas).forEach( pr => {
     const cualidades = primarcas[pr];
     console.log(cualidades);
});
Object.keys(primarcas).forEach( pr => {
    const cualidadesArr = primarcas[pr];
    console.log(Object.keys(cualidadesArr))
    console.log(Object.values(cualidadesArr))
    primarcasArr.push(cualidadesArr)
    console.log(primarcasArr)
})

