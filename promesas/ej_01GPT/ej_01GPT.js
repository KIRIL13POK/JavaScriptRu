/*
"Implementa una función llamada buscarUsuario que reciba como parámetro un nombre de usuario. Esta función debe realizar una solicitud a un servidor para buscar el usuario correspondiente al nombre proporcionado. La solicitud debe ser asíncrona y devolver una promesa. */

const baseDeDatos = [
    {
        nombre: 'John Doe',
        edad: 25,
        email: 'johndoe@example.com'
    },
    {
        nombre: 'Alice Smith',
        edad: 30,
        email: 'alicesmith@example.com'
    },
    {
        nombre: 'Michael Johnson',
        edad: 28,
        email: 'michaeljohnson@example.com'
    },
    {
        nombre: 'Emily Brown',
        edad: 32,
        email: 'emilybrown@example.com'
    },
    {
        nombre: 'Daniel Davis',
        edad: 27,
        email: 'danieldavis@example.com'
    },
    {
        nombre: 'Olivia Martinez',
        edad: 29,
        email: 'oliviamartinez@example.com'
    },
    {
        nombre: 'David Taylor',
        edad: 33,
        email: 'davidtaylor@example.com'
    },
    {
        nombre: 'Sophia Wilson',
        edad: 26,
        email: 'sophiawilson@example.com'
    },
    {
        nombre: 'Joseph Thomas',
        edad: 31,
        email: 'josephthomas@example.com'
    },
    {
        nombre: 'Emma Anderson',
        edad: 28,
        email: 'emmaanderson@example.com'
    },
    {
        nombre: 'Matthew Clark',
        edad: 30,
        email: 'matthewclark@example.com'
    },
    {
        nombre: 'Ava Lewis',
        edad: 29,
        email: 'avalewis@example.com'
    },
    {
        nombre: 'Jacob Green',
        edad: 34,
        email: 'jacobgreen@example.com'
    },
    {
        nombre: 'Mia Walker',
        edad: 26,
        email: 'miawalker@example.com'
    },
    {
        nombre: 'William Hill',
        edad: 32,
        email: 'williamhill@example.com'
    },
    {
        nombre: 'Samantha Baker',
        edad: 27,
        email: 'samanthabaker@example.com'
    },
    {
        nombre: 'James Turner',
        edad: 29,
        email: 'jamesturner@example.com'
    },
    {
        nombre: 'Lily Roberts',
        edad: 31,
        email: 'lilyroberts@example.com'
    },
    {
        nombre: 'Benjamin Harris',
        edad: 28,
        email: 'benjaminharris@example.com'
    },
    {
        nombre: 'Charlotte Young',
        edad: 33,
        email: 'charlotteyoung@example.com'
    }
];

const buscarUsuario = (usuarioBD) => {
    return new Promise((resolve, reject) => {
        const usuario = baseDeDatos.find(u => u.nombre === usuarioBD)?.nombre
        if (usuario) {
            resolve(usuario)
        } else {
            reject('ERROR!!! Este nombre no esta en nuesta base de datos.')

        }
    })

}

// buscarUsuario('John Des')
//     .then(usuario => console.log(`El usuario ${usuario} se encuentar en nuestra base de datos.`))
//     .catch(err => console.log(err));


document.addEventListener("DOMContentLoaded", function () {
    let submitButton = document.querySelector("#buscador button[type='submit']");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();
        let username = document.getElementById('username').value;
        let divResultado = document.querySelector('.resultado');

         // Limpiar contenido HTML del div "resultado" si ya tiene hijos
         limpiarHTMl(divResultado);

        buscarUsuario(username)
            .then(usuario => {
                const divResultado = document.querySelector('.resultado');
                const parrafoParaResultado = document.createElement('p');
                parrafoParaResultado.textContent = `El usuario ${usuario} se encuentra en nuestra base de datos.`;
                divResultado.appendChild(parrafoParaResultado);
            })
            .catch(err => {
                const divResultado = document.querySelector('.resultado');
                const parrafoParaResultado = document.createElement('p');
                parrafoParaResultado.textContent = err;
                divResultado.appendChild(parrafoParaResultado);
            });
    });
});


const limpiarHTMl = (elemento) => {
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}



