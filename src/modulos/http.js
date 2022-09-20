//Este modiulo nos permite crear servidores o conectarnos a ellos.
/*const http = require('http');

http.createServer((req, res) => {
    console.log(req.url)

    res.write('Mi primer servidor http');//Escribir respuesta
    res.end();//Cerrar peticion

    var hoy = new Date();
    console.log(hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds())//llevar la hora de cada ejecucion
}).listen(3000)//Accedemos al puerto*/

const http = require(`http`);

http.createServer(theServer).listen(3000);

function theServer(req, res) {
    console.log(`nueva petición`);
    console.log(req.url);
    
    switch (req.url) {
        case `/hola`:
            res.write("Bienvenido a hola");
            res.end();
            break;
        case `/node`:
            res.write("Comienza a aprender NodeJs");
            res.end();
            break;
        default:
            res.write("Error 404 Page No Found");
            res.end();
            break;
    }
}

