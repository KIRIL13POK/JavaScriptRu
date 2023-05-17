const x_men = {

    Wolverine: {

        nombre: "Logan",
        alias: "Wolverine",
        habilidad: "Regeneración",
    },

    Cyclops: {

        nombre: "Scott",
        alias: "Cyclops",
        habilidad: "Rayos ópticos",

    },
    Storm: {

        nombre: "Ororo",
        alias: "Storm",
        habilidad: "Manipulación del clima",

    },

};

let x_menArr = [];

Object.keys(x_men ).forEach( x => {
    const caracteristicaX = x_men[x];
    x_menArr.push(caracteristicaX)
    return x_menArr;  

});
console.log(x_menArr)

const cualidadesArr = [];

x_menArr.forEach( obj_x => {
    cualidadesArr.push(Object.values(obj_x)) 
    return cualidadesArr
});
console.log(cualidadesArr)

console.log(cualidadesArr.length);
console.log(cualidadesArr[1]);



const[nombre, alias, habilidad] = cualidadesArr[1];
console.log(nombre);
console.log(alias);
console.log(habilidad);
