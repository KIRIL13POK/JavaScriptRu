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

Object.defineProperty(primarcas.Guilliman, 'fortaleza', {
  value: "Macragge",
  writable: true,
  enumerable: true,
  configurable: true
});

console.log(primarcas.Guilliman.fortaleza);
console.log(primarcas.Guilliman);