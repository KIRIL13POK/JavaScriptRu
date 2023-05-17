let primarcas = {
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

const nuevoPrimarca = {
    Khan: {
        legion: "Cicatrices Blancas",
        lider: "Khan",
        armas: "Katana, Bolter de asalto",
    },
};

const resultado = Object.assign({}, primarcas, nuevoPrimarca);
primarcas = resultado;
//console.log(primarcas);


primarcas.Russ.legion = '';
console.log(resultado);