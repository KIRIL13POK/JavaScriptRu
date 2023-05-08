'use strict';

const req = new Promise((resolve, reject) => {

    console.log('1-Pediendo datos....');

    setTimeout(() => {
        console.log('2-Preparando datos....');

        const producto = {

            nombre: 'TV',
            precio: 2000,

        }

        resolve(producto);

    }, 2000);

})

req.then((producto) => {

    return new Promise((resolve, reject) => {

        setTimeout(() => {
            producto.status = 'order';
            resolve(producto);
        }, 2000);
    })

}).then((data) => {
    data.nuevo = 'otro cambio'
    return data
}).then((data) => {
    console.log(data);
})


const test = time => {
    return new Promise( resolve => {
        setTimeout( () => resolve(time), time)
    })
}

test(1000).then( (time) => console.log(`Han pasado  ${time} ms`) )
test(2000).then( (time) => console.log(`Han pasado  ${time} ms`) )
test(3000).then( (time) => console.log(`Han pasado  ${time} ms`) )
test(4000).then( (time) => console.log(`Han pasado  ${time} ms`) )
test(5000).then( (time) => console.log(`Han pasado  ${time} ms`) )
 
  Promise.all([test(1000),test(2000),test(3000),test(4000),test(5000)]).then( () => { console.log(`Todos test, prueba superada`)})

  Promise.race([test(1000),test(2000),test(3000),test(4000),test(5000)]).then( () => { console.log(`Primer test, prueba superada`)})