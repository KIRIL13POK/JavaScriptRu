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

const getTodosLosDatos = async (numeroLegion)=> {
    try {
        const nombrePrimarca = await getInfoNombre(numeroLegion);
        const nombreDeLaLegion = await getInfoLegion(numeroLegion);
        const poderesPrimarc = await getPoderPrimarc(numeroLegion);
        
        return `Con el numero dado de la legion -${numeroLegion} , la legion pertenece a primarca ${nombrePrimarca} con poderes de: ${poderesPrimarc} y  se conoce como legion: ${nombreDeLaLegion}.\n`
        
    } catch (error) {
        throw error;
     
    }
};

let legionXIV = 'XIV'
let legionVIII = "VIII"
let legionIX = 'IX'
let legionI = 'I'

getTodosLosDatos(legionXIV)
    .then(datos => console.log(datos))
    .catch(err =>  console.log(err))

getTodosLosDatos(legionI)
    .then(datos => console.log(datos))
    .catch(err =>  console.log(err))   

getTodosLosDatos(legionVIII)
    .then(datos => console.log(datos))
    .catch(err =>  console.log(err))     

    getTodosLosDatos(legionXIV)
    .then(datos => console.log(datos))
    .catch(err =>  console.log(err))

getTodosLosDatos(legionIX)
    .then(datos => console.log(datos))
    .catch(err =>  console.log(err))        