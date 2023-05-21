


const datosCiudad = [
    {
      ciudad: 'Nueva York',
      clima: 'Soleado',
      temperatura: '25°C'
    },
    {
      ciudad: 'Londres',
      
      temperatura: '18°C'
    },
    {
      ciudad: 'Tokio',
      clima: 'Lluvioso',
      temperatura: '20°C'
    },
    {
      ciudad: 'París',
      clima: 'Nublado',
      temperatura: '22°C'
    },
    {
      ciudad: 'Sídney',
      clima: 'Despejado',
      temperatura: '30°C'
    },
    {
      ciudad: 'Roma',
      clima: 'Soleado',
      temperatura: '27°C'
    },
    {
      ciudad: 'Berlín',
      clima: 'Lluvioso',
      temperatura: '16°C'
    },
    {
      ciudad: 'Madrid',
      clima: 'Despejado',
      temperatura: '28°C'
    },
    {
      ciudad: 'Ámsterdam',
      clima: 'Nublado',
      temperatura: '19°C'
    },
    {
      ciudad: 'Toronto',
      clima: 'Lluvioso',
      temperatura: '15°C'
    },
    {
      ciudad: 'Buenos Aires',
      clima: 'Soleado',
      temperatura: '23°C'
    }
    // Agrega más ciudades y sus datos aquí
  ];


const getCiudad = ( ciudadInteresada )  => {

    return new Promise ( ( resolve, reject) => {

        const ciudad = datosCiudad.find(c => c.ciudad === ciudadInteresada)?.ciudad

        if(ciudad){
            resolve (`${ciudad} esta en nuestra lista en estos momentos.`);
        }else{
            reject(`No hay datos sobre ${ciudad} en estos momentos`)
        }
        
    } )

};

const getClima = ( ciudadInteresada ) => {

    return new Promise ( ( resolve, reject) => {
        const ciudad = datosCiudad.find(c => c.ciudad === ciudadInteresada)?. ciudad

        const clima  = datosCiudad.find( cl =>cl.ciudad === ciudadInteresada)?.clima

        if( clima ){
            resolve(`El clima es ${clima} en la ciudad.`)
        }else{ 
            reject(`No hay datos sobre el clima de ${ciudad} en estos momentos`)
        }
    })
}


const getTemperatura = ( ciudadInteresada) => {
     return new Promise ( ( resolve, reject ) => {
        const ciudad = datosCiudad.find(c => c.ciudad === ciudadInteresada)?. ciudad

        const temperatura = datosCiudad.find( t => t.ciudad === ciudadInteresada)?. temperatura


        if ( temperatura ) {
            resolve( `La temperatura en estos momentos es de ${temperatura}.`)
        }else{
            reject(`No hay datos sobre la temperatura de ${ciudad} en estos momentos`)
        }
     })
} 


const getInfoCiudadTotal = async (ciudadInteresada) => {

    try {
        const respuestaCiudad = await getCiudad(ciudadInteresada)
        const respuestaClima = await getClima(ciudadInteresada)
        const respuestaTemperatura = await getTemperatura(ciudadInteresada)

         return `${respuestaCiudad}${respuestaClima}${respuestaTemperatura} `
        
    } catch (error) {
        throw error
        
    }

}


let ciudad1 =  prompt('Introduce la ciudad');


getInfoCiudadTotal( ciudad1 )
    .then( respuestas => console.log( respuestas ))
    .catch( err => console.log( err ))



const divResultado = document.querySelector('.resultado')
const parrafoParaResultado  = document.createElement('p')

parrafoParaResultado.textContent  =
 getInfoCiudadTotal( ciudad1 )
    .then( respuestas => {
        parrafoParaResultado.textContent = respuestas;
        divResultado.appendChild(parrafoParaResultado);

    })
    .catch( err => { 
        parrafoParaResultado.textContent = err;
        divResultado.appendChild(parrafoParaResultado)
    }) 

 divResultado.appendChild(parrafoParaResultado)  
