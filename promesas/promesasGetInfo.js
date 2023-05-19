const primarcas = [
    {
        nombre: "Lion El'Jonson",
        legion: "Ángeles Oscuros",
        numeroLegion: "I"
    },
    {
        nombre: "Fulgrim",
        poder: "Perfección y combate",
        legion: "Emperadores Hijos",
        numeroLegion: "III"
    },
    {
        nombre: "Perturabo",
        poder: "Asedio y construcción",
        legion: "Puños Imperiales",
        numeroLegion: "IV"
    },
    {
        nombre: "Jaghatai Khan",
        poder: "Velocidad y astucia",
        legion: "Scars Blancas",
        numeroLegion: "V"
    },
    {
        nombre: "Leman Russ",
        poder: "Fuerza y ferocidad",
        legion: "Lobos Espaciales",
        numeroLegion: "VI"
    },
    {
        nombre: "Rogal Dorn",
        poder: "Defensa y fortificaciones",
        legion: "Puños Imperiales",
        numeroLegion: "VII"
    },
    {
        nombre: "Konrad Curze",
        poder: "Miedo y sigilo",
        legion: "Nocturnos",
        numeroLegion: "VIII"
    },
    {
        nombre: "Sanguinius",
        poder: "Sangre y vuelo",
        legion: "Ángeles Sangrientos",
        numeroLegion: "IX"
    },
    {
        nombre: "Ferrus Manus",
        poder: "Habilidades tecnológicas",
        legion: "Manos de Hierro",
        numeroLegion: "X"
    },
    {
        nombre: "Horus Lupercal",
        poder: "Carisma y liderazgo",
        legion: "Luna Wolves/Sons of Horus",
        numeroLegion: "XVI"
    },
    {
        nombre: "Rogal Dorn",
        poder: "Defensa y fortificaciones",
        legion: "Puños Imperiales",
        numeroLegion: "VII"
    },
    {
        nombre: "Konrad Curze",
        poder: "Miedo y sigilo",
        legion: "Nocturnos",
        numeroLegion: "VIII"
    },
    {
        nombre: "Sanguinius",
        poder: "Sangre y vuelo",
        legion: "Ángeles Sangrientos",
        numeroLegion: "IX"
    },
    {
        nombre: "Ferrus Manus",
        poder: "Habilidades tecnológicas",
        legion: "Manos de Hierro",
        numeroLegion: "X"
    },
    {
        nombre: "Horus Lupercal",
        poder: "Carisma y liderazgo",
        legion: "Luna Wolves/Sons of Horus",
        numeroLegion: "XVI"
    },
    {
        nombre: "Roboute Guilliman",
        poder: "Estrategia y liderazgo",
        legion: "Ultramarines",
        numeroLegion: "XIII"
    },
    {
        nombre: "Mortarion",
        poder: "Peste y resistencia",
        legion: "Guardia de la Muerte",
        numeroLegion: "XIV"
    },
    {
        nombre: "Alpharius/Omegon",
        poder: "Astucia y habilidades de infiltración",
        legion: "Alpha Legion",
        numeroLegion: "XX"
    },
    {
        nombre: "Corvus Corax",
        poder: "Sigilo y guerra asimétrica",
        legion: "Cuervos Sangrientos",
        numeroLegion: "XIX"
    },
    {
        nombre: "Vulkan",
        poder: "Forja y resistencia",
        legion: "Salamandras",
        numeroLegion: "XVIII"
    }
]




const getInfoNombre = (numeroLegion) => {

    return new Promise((resolve, reject) => {

        const primarca = primarcas.find(p => p.numeroLegion === numeroLegion)?.nombre

        if (primarca) {
            resolve(primarca)
        } else {
            reject(`Este numeroLegion no coincide con Los nombres de PRIMARCAS de 40K`)
        }
    })
};

const getInfoLegion = (numeroLegion) => {

    return new Promise((resolve, reject) => {

        const nombreLegion = primarcas.find(l => l.numeroLegion === numeroLegion)?.legion

        if (nombreLegion) {
            resolve(nombreLegion);
        } else {
            reject(`La legión con el  "${numeroLegion}" no coincide con los nombres de las legiones de Warhammer 40,000.`);
        }
    })

};

const getPoderPrimarc = (numeroLegion) => {

    return new Promise((resolve, reject) => {

        const poderPrimarc = primarcas.find(pd => pd.numeroLegion === numeroLegion)?.poder

        if (poderPrimarc) {
            resolve(poderPrimarc)
        } else {
            reject(`Los poder de primarc  no se conocen actualmente`)
        }
    })
};

let legionXIV = 'XIV'
let legionVIII = "VIII"
let legionIX = 'IX'
let legionI = 'I'


//------------------------------1---------------

let nombrePrimarcaXIV = '';
let nombreDeLaLegionXIV = '';
getInfoNombre(legionXIV)
    .then(primarca => {
        nombrePrimarcaXIV = primarca
        return getInfoLegion(legionXIV)
    })
    .then(nombreLegion => {
        nombreDeLaLegionXIV = nombreLegion
        return getPoderPrimarc(legionXIV)
    })
    .then(poderPrimarc => console.log(`Con el numer dado de la legion -${legionXIV} , la legion pertenece a primarca ${nombrePrimarcaXIV} con poderes de: ${poderPrimarc} y  se conoce como legion: ${nombreDeLaLegionXIV}.\n`))
    .catch(err => console.log(err));

//------------------------------2---------------
let nombrePrimarcaVIII = '';
let nombreDeLaLegionVIII = '';
getInfoNombre(legionVIII)
    .then(primarca => {
        nombrePrimarcaVIII = primarca
        return getInfoLegion(legionVIII)
    })
    .then(nombreLegion => {
        nombreDeLaLegionVIII = nombreLegion
        return getPoderPrimarc(legionVIII)
    })
    .then(poderPrimarc => console.log(`Con el numer dado de la legion -${legionVIII} , la legion pertenece a primarc ${nombrePrimarcaVIII} con poderes de: ${poderPrimarc} y  se conoce como legion: ${nombreDeLaLegionVIII}.\n`))
    .catch(err => console.log(err));

//------------------------------3---------------
let nombrePrimarcaIX = '';
let nombreDeLaLegionIX = '';
getInfoNombre(legionIX)
    .then(primarca => {
        nombrePrimarcaIX = primarca
        return getInfoLegion(legionIX)
    })
    .then(nombreLegion => {
        nombreDeLaLegionIX = nombreLegion
        return getPoderPrimarc(legionIX)
    })
    .then(poderPrimarc => console.log(`Con el numer dado de la legion -${legionIX} , la legion pertenece a primarc ${nombrePrimarcaIX} con poderes de: ${poderPrimarc} y  se conoce como legion: ${nombreDeLaLegionIX}.\n`))
    .catch(err => console.log(err));

//------------------------------3---------------
let nombrePrimarcaI = '';
let nombreDeLaLegionI = '';
getInfoNombre(legionI)
    .then(primarca => {
        nombrePrimarcaI = primarca
        return getInfoLegion(legionI)
    })
    .then(nombreLegion => {
        nombreDeLaLegionI = nombreLegion
        return getPoderPrimarc(legionI)
    })
    .then(poderPrimarc => console.log(`Con el numer dado de la legion -${legionI} , la legion pertenece a primarc ${nombrePrimarcaI} con poderes de: ${poderPrimarc} y  se conoce como legion: ${nombreDeLaLegionI}.\n`))
    .catch(err => console.log(err));    










