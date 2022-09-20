//usamos try catch para capturar los errores. Las capturas se pueden dar en funciones anidadas, 
//sin embargo en una función asíncrona, el try catch debe estar en dicha función, para poder capturar el error.

function otraFuncion() {
    serompe();
}

function serompe() {
   return 3 + z;
}

try {
   otraFuncion();
} catch(err) {
   console.error('error en el llamado');
   console.error(err.message);
   console.error(err);
}

console.log('despues de romper');