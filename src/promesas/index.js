function hola(nombre) {
    return new Promise(function (res, rej) {
        setTimeout(function () {
            console.log('Hola, ' + nombre);
            res(nombre);
        }, 1500);
    });

}

function hablar(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('Bla bla bla bla...');
            res(nombre);
            rej('Hay un error');
        }, 2000);
    });
}

function adios(nombre) {
    return new Promise((res, rej) => {
        setTimeout(function () {
            console.log('Adios', nombre);
            res();
        }, 10890);
    });
}

// ---

console.log('Iniciando el proceso..');
hola('Alejandro')
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log('Terminado el proceso');
    })
    .catch(error => { // Hace parte de a sintaxis de las promesas puedo captar los reject
        console.error('Ha habido un error:');
        console.error(error);
    })